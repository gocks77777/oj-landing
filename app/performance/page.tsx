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
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          minHeight: "240px",
                          padding: "34px 24px",
                          background: "linear-gradient(160deg, #1c2350 0%, #0b0f2c 100%)",
                          borderRadius: "14px",
                          color: "#fff",
                          transition: "transform .2s, box-shadow .2s",
                        }}
                      >
                        <p style={{ fontSize: "21px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: "1.35em", wordBreak: "keep-all" }}>
                          {c.industry}
                        </p>
                        <div
                          style={{
                            margin: "18px 0",
                            padding: "11px 22px",
                            borderRadius: "8px",
                            background: "var(--color-primary)",
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
                        <p style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.02em", color: "#b9bdec", wordBreak: "keep-all" }}>
                          {c.category} <span style={{ color: "#ffc24b" }}>구축 완료</span>
                        </p>
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
