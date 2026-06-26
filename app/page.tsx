"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { cases as perfCases } from "@/app/performance/data";

export default function Home() {
  const scrollTopRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (scrollTopRef.current) {
        scrollTopRef.current.classList.toggle("active", window.scrollY > 300);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="wrapper">
      <Header transparent />

      <div id="container">

        {/* ── 1. 메인 비주얼 ── */}
        <section className="main-visual">
          <div
            className="bg-img"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')" }}
          />
          {/* 어두운 오버레이 */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />
          <div className="inner">
            <h2 style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>O&J 컴퍼니</h2>
            <p style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)" }}>AI로 사장님의 일을 대신합니다 — 자동화·AI 직원팀·문서 자동화</p>
          </div>
        </section>

        {/* ── 2. 인사말 섹션 (main-greeting) ── */}
        <section
          className="main-section"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        >
          <div className="overlay" />
          <div className="section-inner" style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <div className="contain">
              <div style={{ marginBottom: "60px" }}>
                <h2 className="m-tit">AI로 일하는 회사</h2>
                <p className="m-txt" style={{ marginTop: "37px" }}>
                  O&J 컴퍼니는 사장님 대신 AI가 일하게 만드는 자동화 솔루션 전문 기업입니다
                </p>
              </div>
              <Link href="/company/greetings" className="more-btn">회사 소개</Link>
            </div>
          </div>
        </section>

        {/* ── 3. 서비스 섹션 (main-service) ── */}
        <section
          className="main-section"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')" }}
        >
          <div className="overlay" />
          <div className="section-inner" style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <div className="contain">
              <div style={{ textAlign: "center", marginBottom: "75px" }}>
                <h2 className="m-tit" style={{ display: "inline-block" }}>O&J SERVICE</h2>
                <p className="m-txt" style={{ marginTop: "20px" }}>
                  까먹지 않는 두뇌 + 24시간 일하는 AI 직원, O&J가 만들어 드립니다
                </p>
              </div>
              <div className="service-links">
                <Link
                  href="/company/consulting"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80')" }}
                >
                  <div className="inner">
                    <div className="tit">AI 두 번째 뇌 + AI 직원팀</div>
                    <div className="plus" />
                  </div>
                </Link>
                <Link
                  href="/company/consulting"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80')" }}
                >
                  <div className="inner">
                    <div className="tit">업무·문서 자동화</div>
                    <div className="plus" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 성과 사례 섹션 (main-example) ── */}
        <section
          className="main-section"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')", backgroundPosition: "50% 30%" }}
        >
          <div className="overlay" style={{ background: "rgba(0,0,0,0.7)" }} />
          <div className="section-inner" style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "100px", paddingBottom: "100px" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="m-tit" style={{ display: "inline-block", wordBreak: "keep-all" }}>AI 자동화 구축 사례</h2>
            </div>
            {/* 슬라이더 형식 텍스트 카드 그리드 */}
            <div className="perf-slider" style={{ maxWidth: "1200px", margin: "0 auto 33px", display: "flex", gap: "16px", overflowX: "auto", padding: "0 20px" }}>
              {perfCases.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  style={{
                    flex: "0 0 calc(20% - 16px)", borderRadius: "16px", overflow: "hidden",
                    minWidth: "190px",
                    background: "linear-gradient(160deg, #1c2350 0%, #0b0f2c 100%)",
                    padding: "30px 22px", color: "#fff", textAlign: "center",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    minHeight: "210px",
                  }}
                >
                  <div style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.35, wordBreak: "keep-all" }}>{c.industry}</div>
                  <div style={{ margin: "14px 0", padding: "9px 16px", borderRadius: "8px", background: "var(--color-primary)", fontSize: "16px", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.35, wordBreak: "keep-all" }}>{c.metric || c.headline}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#b9bdec", wordBreak: "keep-all" }}>{c.category} <span style={{ color: "#ffc24b" }}>구축 완료</span></div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/performance" className="more-btn">Performance</Link>
            </div>
          </div>
        </section>

        {/* ── 5. 컨설팅 상담 CTA (main-consult) ── */}
        <section
          className="main-section"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
        >
          <div className="overlay" />
          <div className="section-inner" style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <div className="contain">
              <div style={{ marginBottom: "55px" }}>
                <h2 className="m-tit">무료 AI 도입 진단</h2>
                <p className="m-txt" style={{ marginTop: "37px" }}>
                  지금 어떤 일이 번거로운지만 말씀해주세요
                </p>
              </div>
              <Link href="/contact/consulting" className="more-btn">무료 진단</Link>
            </div>
          </div>
        </section>

        {/* ── 6. 푸터 섹션 ── */}
        <section>
          <Footer />
        </section>

      </div>

      {/* 맨위로 */}
      <a
        ref={scrollTopRef}
        href="#"
        className="scroll-top"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      >
        맨위로가기
      </a>
    </div>
  );
}
