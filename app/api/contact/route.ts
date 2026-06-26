import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const NOTIFY_EMAILS = ["wjdgocks777@gmail.com"];

// 허용 오리진
const ALLOWED_ORIGINS = [
  "https://oj-landing.vercel.app",
  "http://localhost:3000",
];

// 간단한 인메모리 레이트 리미팅 (IP당 분당 3회)
const rateMap = new Map<string, { count: number; ts: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > 60_000) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

// 입력값 sanitize (HTML 태그 제거)
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

async function sendNotificationEmail(name: string, phone: string, message: string, time: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `O&J 컴퍼니 <${process.env.GMAIL_USER}>`,
    to: NOTIFY_EMAILS.join(", "),
    subject: `[O&J 컴퍼니] 새 상담 신청 - ${name}`,
    text: `새로운 상담 신청이 접수되었습니다.\n\n이름: ${name}\n전화번호: ${phone}\n신청일시: ${time}\n메시지: ${message || "없음"}`,
  });
}

export async function POST(req: NextRequest) {
  // 1. Origin 검증
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // 2. IP 레이트 리미팅
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "잠시 후 다시 시도해주세요." }, { status: 429 });
  }

  try {
    const body = await req.json();

    // 3. 입력값 검증 및 sanitize
    const name = sanitize(String(body.name ?? ""));
    const phone = sanitize(String(body.phone ?? ""));
    const message = sanitize(String(body.message ?? ""));

    if (!name || name.length > 20) {
      return NextResponse.json({ error: "이름을 확인해주세요." }, { status: 400 });
    }
    if (!phone || phone.length < 9) {
      return NextResponse.json({ error: "전화번호를 입력해주세요." }, { status: 400 });
    }
    if (message.length > 500) {
      return NextResponse.json({ error: "메시지는 500자 이내로 입력해주세요." }, { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const now = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    });
    const firstSheet = spreadsheet.data.sheets?.[0].properties?.title ?? "Sheet1";

    // 열 순서 고정: A=신청일시, B=이름, C=전화번호, D=메시지
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `${firstSheet}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[now, name, phone, message]],
      },
    });

    await sendNotificationEmail(name, phone, message, now).catch((err) =>
      console.error("Email error:", err)
    );

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Contact error:", msg);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
