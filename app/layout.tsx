import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oj-landing.vercel.app"),
  title: "O&J 컴퍼니 — AI로 사장님의 일을 대신합니다",
  description: "AI 두 번째 뇌, AI 직원팀, 업무·문서 자동화. 기술은 몰라도 됩니다 — 불편한 것만 말씀해주세요. AI 자동화 솔루션 전문 기업 O&J 컴퍼니.",
  openGraph: {
    title: "O&J 컴퍼니 — AI로 사장님의 일을 대신합니다",
    description: "AI 두 번째 뇌, AI 직원팀, 업무·문서 자동화. 기술은 몰라도 됩니다 — 불편한 것만 말씀해주세요.",
    url: "https://oj-landing.vercel.app",
    siteName: "O&J 컴퍼니",
    images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "O&J 컴퍼니" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O&J 컴퍼니 — AI로 사장님의 일을 대신합니다",
    description: "AI 두 번째 뇌, AI 직원팀, 업무·문서 자동화. 기술은 몰라도 됩니다.",
    images: ["/og-v3.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
