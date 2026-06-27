import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";
import Link from "next/link";
import { cases } from "../data";
import { detailData } from "../detailData";

export default async function PerformanceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = cases.find((item) => item.id === id);
  if (!c) redirect("/performance");

  const d = detailData[id];

  return (
    <div id="sub">
      <Header />
      <SubPageBanner title="Performance" subtitle="업종별 AI 자동화 적용 사례" />

      <div id="container">
        <div id="contArea">
          <div className="real-cont">
            <div style={{ marginBottom: "40px" }}>
              <Link href="/performance" style={{ fontSize: "15px", color: "#808080", fontWeight: 500, letterSpacing: "-0.02em" }}>
                ← 목록으로 돌아가기
              </Link>
            </div>

            {/* 헤더 카드 */}
            <div style={{ maxWidth: "760px", margin: "0 auto 50px", background: "linear-gradient(135deg, #6a44e0 0%, #452791 100%)", borderRadius: "12px", padding: "44px 40px", color: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 14px", borderRadius: "14px", background: "rgba(255,255,255,0.16)", fontSize: "13px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {c.category}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 14px", borderRadius: "14px", background: c.real ? "#fff" : "rgba(255,255,255,0.16)", color: c.real ? "var(--color-primary)" : "#fff", fontSize: "13px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {c.real ? "실제 구축" : "적용 사례"}
                </span>
              </div>
              <p style={{ fontSize: "15px", opacity: 0.82, letterSpacing: "-0.02em", marginBottom: "8px" }}>{c.industry}</p>
              <h1 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: "1.4em" }}>{c.headline}</h1>
              {c.metric && (
                <p style={{ display: "inline-block", marginTop: "20px", padding: "8px 16px", borderRadius: "8px", background: "#fff", color: "var(--color-primary)", fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {c.metric}
                </p>
              )}
              <p style={{ fontSize: "13px", opacity: 0.7, letterSpacing: "-0.02em", marginTop: "18px" }}>{c.date}</p>
            </div>

            {d && (
              <>
                {/* 정보 표 */}
                <div style={{ maxWidth: "760px", margin: "0 auto 40px" }}>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#242424", letterSpacing: "-0.03em", marginBottom: "18px", paddingBottom: "12px", borderBottom: "1px solid #e8e8e8" }}>
                    한눈에 보기
                  </h2>
                  <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #e8e8e8", borderRadius: "8px", overflow: "hidden" }}>
                    <tbody>
                      {[
                        { label: "업종", value: c.industry },
                        { label: "도입 규모", value: d.scale },
                        { label: "적용 영역", value: d.area },
                        { label: c.real ? "실제 효과" : "핵심 효과", value: d.effect },
                      ].map((row) => (
                        <tr key={row.label} style={{ borderBottom: "1px solid #eee" }}>
                          <th style={{ width: "140px", textAlign: "left", verticalAlign: "top", background: "#f7f5ff", color: "var(--color-primary)", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.02em", padding: "16px 18px", borderRight: "1px solid #eee" }}>
                            {row.label}
                          </th>
                          <td style={{ fontSize: "16px", color: "#454545", lineHeight: "1.7em", letterSpacing: "-0.02em", padding: "16px 20px" }}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* AI 자동화 구축 포인트 */}
                {d.points.length > 0 && (
                  <div style={{ maxWidth: "760px", margin: "0 auto 40px" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#242424", letterSpacing: "-0.03em", marginBottom: "18px", paddingBottom: "12px", borderBottom: "1px solid #e8e8e8" }}>
                      AI 자동화 구축 포인트
                    </h2>
                    <ol style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                      {d.points.map((point, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "16px", color: "#454545", lineHeight: "1.75em", letterSpacing: "-0.02em" }}>
                          <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: "var(--color-primary)", color: "#fff", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                            {i + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* 마무리 */}
                <div style={{ maxWidth: "760px", margin: "0 auto 50px", background: "#f4f0ff", border: "1px solid #d4c8ff", borderRadius: "8px", padding: "24px 28px" }}>
                  <p style={{ fontSize: "16px", color: "#454545", lineHeight: "1.8em", letterSpacing: "-0.02em" }}>{d.summary}</p>
                </div>
              </>
            )}

            {!d && (
              <div style={{ maxWidth: "760px", margin: "0 auto 50px", background: "#f4f0ff", border: "1px solid #d4c8ff", borderRadius: "8px", padding: "24px 28px" }}>
                <h2 style={{ fontSize: "17px", fontWeight: 700, color: "var(--color-primary)", letterSpacing: "-0.03em", marginBottom: "10px" }}>이런 자동화를 만들어 드립니다</h2>
                <p style={{ fontSize: "16px", color: "#454545", lineHeight: "1.75em", letterSpacing: "-0.02em" }}>
                  {c.industry} 업종에 {c.headline.replace(/를 .*$/, "")} 같은 자동화를 구축하면, 반복 업무를 줄이고 놓치는 일 없이 운영할 수 있습니다.
                  O&J가 업종에 맞춰 직접 만들어 드립니다.
                </p>
              </div>
            )}

            {/* CTA */}
            <div style={{ maxWidth: "760px", margin: "0 auto 60px", background: "linear-gradient(135deg, #6a44e0 0%, #452791 100%)", borderRadius: "12px", padding: "50px 40px", textAlign: "center", color: "#fff" }}>
              <p style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: "1.4em", marginBottom: "12px" }}>우리 업종에도 이런 자동화가 가능할까요?</p>
              <p style={{ fontSize: "16px", opacity: 0.88, letterSpacing: "-0.02em", lineHeight: "1.75em", marginBottom: "30px" }}>
                O&J가 무료로 가능성을 진단해 드립니다.<br />지금 바로 상담을 신청하세요.
              </p>
              <Link href="/contact/consulting" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "54px", minWidth: "190px", padding: "0 35px", background: "#fff", color: "var(--color-primary)", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em", borderRadius: "27px" }}>
                무료 상담 신청하기 →
              </Link>
            </div>

            <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", paddingBottom: "20px" }}>
              <Link href="/performance" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "48px", minWidth: "160px", padding: "0 30px", border: "1px solid #ddd", color: "#505050", fontWeight: 500, fontSize: "15px", letterSpacing: "-0.02em" }}>
                ← 목록으로
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
