"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";
import Link from "next/link";
import { cases } from "./data";

const PAGE_SIZE = 6;

export default function PerformancePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cases.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleCases = cases.slice(startIndex, startIndex + PAGE_SIZE);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Build page number list (show at most 5 page numbers around current)
  const getPageNumbers = () => {
    const delta = 2;
    const pages: number[] = [];
    const left = Math.max(1, currentPage - delta);
    const right = Math.min(totalPages, currentPage + delta);
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div id="sub">
      <Header />
      <SubPageBanner title="Performance" subtitle="AI 자동화 구축 사례" />

      <div id="container">
        <div id="contArea" className="wide">
          <div className="real-cont">
            {/* 안내 문구 */}
            <div
              style={{
                maxWidth: "1260px",
                margin: "0 auto 30px",
                padding: "0 30px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#242424",
                  letterSpacing: "-0.03em",
                  marginBottom: "12px",
                  wordBreak: "keep-all",
                }}
              >
                AI 자동화 구축 사례
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#767676",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.7em",
                  wordBreak: "keep-all",
                }}
              >
                다양한 업종의 현장에서 실제로 돌아가고 있는 AI 자동화 구축 사례입니다.
              </p>
            </div>

            <div
              className="gallery-list"
              style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 30px" }}
            >
              <ul style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {visibleCases.map((c) => (
                  <li key={c.id} style={{ float: "none", width: "auto", margin: 0 }}>
                    <Link
                      href={`/performance/${c.id}`}
                      title={c.headline}
                      style={{ display: "block", height: "100%" }}
                    >
                      <div
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.boxShadow = "0 28px 56px -20px rgba(106,68,224,0.55)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 18px 40px -18px rgba(8,11,32,0.85)";
                        }}
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          minHeight: "256px",
                          padding: "30px 26px",
                          background: "linear-gradient(160deg, #1a1f3d 0%, #0c1024 100%)",
                          borderRadius: "18px",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "#fff",
                          boxShadow: "0 18px 40px -18px rgba(8,11,32,0.85)",
                          transition: "transform .25s ease, box-shadow .25s ease",
                        }}
                      >
                        {/* 빛번짐 glow */}
                        <span
                          aria-hidden
                          style={{
                            position: "absolute",
                            top: "-30%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "260px",
                            height: "260px",
                            background: "radial-gradient(circle, rgba(106,68,224,0.32) 0%, rgba(106,68,224,0) 68%)",
                            pointerEvents: "none",
                          }}
                        />
                        {/* vignette */}
                        <span
                          aria-hidden
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 55%), radial-gradient(120% 120% at 50% 120%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)",
                            pointerEvents: "none",
                          }}
                        />

                        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                          {/* 상단 pill 태그 */}
                          <span
                            style={{
                              display: "inline-block",
                              padding: "5px 14px",
                              borderRadius: "999px",
                              background: "#2a2f52",
                              border: "1px solid rgba(255,255,255,0.08)",
                              fontSize: "12px",
                              fontWeight: 600,
                              letterSpacing: "-0.01em",
                              color: "#c9cdf0",
                              wordBreak: "keep-all",
                            }}
                          >
                            {c.headline}
                          </span>

                          {/* 업종 타이틀 */}
                          <p style={{ marginTop: "18px", fontSize: "27px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: "1.3em", wordBreak: "keep-all" }}>
                            {c.industry}
                          </p>

                          {/* 강조 metric 박스 */}
                          <div
                            style={{
                              margin: "20px auto 18px",
                              padding: "13px 22px",
                              borderRadius: "12px",
                              background: "linear-gradient(135deg, #7a55ef 0%, #5a36c9 100%)",
                              boxShadow: "0 10px 26px -10px rgba(106,68,224,0.7)",
                              fontSize: "20px",
                              fontWeight: 800,
                              letterSpacing: "-0.02em",
                              lineHeight: "1.35em",
                              wordBreak: "keep-all",
                              maxWidth: "100%",
                            }}
                          >
                            {c.metric || c.headline}
                          </div>

                          {/* 하단 라벨 */}
                          <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em", color: "#9aa0d4", wordBreak: "keep-all" }}>
                            {c.category} <span style={{ color: "#ffc24b" }}>구축 완료</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 페이지네이션 */}
            <div className="paging">
              <button
                type="button"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                aria-label="첫 페이지"
              >
                ◀◀
              </button>
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="이전 페이지"
              >
                ◀
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  type="button"
                  className={page === currentPage ? "active" : ""}
                  onClick={() => goToPage(page)}
                  aria-label={`${page} 페이지`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="다음 페이지"
              >
                ▶
              </button>
              <button
                type="button"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                aria-label="마지막 페이지"
              >
                ▶▶
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
