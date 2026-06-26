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
      <SubPageBanner title="Performance" subtitle="업종별 AI 자동화 적용 사례" />

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
                }}
              >
                업종별 AI 자동화 적용 사례
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#767676",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.7em",
                }}
              >
                ※ 일부는 O&J가 만드는 자동화의 대표 적용 사례입니다.
                실제 구축 사례는 <strong style={{ color: "var(--color-primary)" }}>실제 구축</strong> 뱃지로 표시됩니다.
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
                        className="thumb"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          minHeight: "200px",
                          padding: "26px 24px",
                          background: "linear-gradient(135deg, #6a44e0 0%, #452791 100%)",
                          borderRadius: "12px",
                          color: "#fff",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "auto" }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              height: "26px",
                              padding: "0 12px",
                              borderRadius: "13px",
                              background: "rgba(255,255,255,0.16)",
                              fontSize: "12px",
                              fontWeight: 600,
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {c.category}
                          </span>
                          {c.real && (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                height: "26px",
                                padding: "0 12px",
                                borderRadius: "13px",
                                background: "#fff",
                                color: "var(--color-primary)",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                              }}
                            >
                              실제 구축
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: "14px", opacity: 0.82, letterSpacing: "-0.02em", marginTop: "20px", marginBottom: "6px" }}>
                          {c.industry}
                        </p>
                        <p style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: "1.4em" }}>
                          {c.headline}
                        </p>
                      </div>
                      <div className="tit" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {c.metric && (
                          <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>{c.metric}</span>
                        )}
                      </div>
                      <div className="date">{c.date}</div>
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
