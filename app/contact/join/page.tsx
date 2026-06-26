"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";

const tabs = [
  { label: "도입 상담 신청", href: "/contact/join" },
  { label: "무료 AI 도입 진단", href: "/contact/consulting" },
];

const infraCards = [
  { label: "AI 두번째뇌\n+ AI직원팀", color: "var(--color-primary)", icon: "https://www.af-asset.com/images/sub/list-01.png" },
  { label: "업무·문서\n자동화", color: "#548ee3", icon: "https://www.af-asset.com/images/sub/list-02.png" },
  { label: "챗봇·웹앱\n제작", color: "#5461e3", icon: "https://www.af-asset.com/images/sub/list-03.png" },
];

export default function JoinPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) { alert("개인정보 수집 및 이용에 동의해주세요."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, message: form.message }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="sub">
      <Header />
      <SubPageBanner title="AI 도입 상담 신청" tabs={tabs} activeTab="/contact/join" />

      <div id="container">
        <div id="contArea" className="wide">
          <div className="real-cont">
            <div className="contact">

              {/* ── 3가지 약속 섹션 ── */}
              <section className="promise">
                <div className="contain" style={{ maxWidth: "1400px" }}>
                  <h2>
                    O&J 컴퍼니는{" "}
                    <span className="under">
                      <span>3</span><span>가</span><span>지</span>
                    </span>
                    를 약속드립니다
                  </h2>
                  <div className="wrap">
                    <div className="bg" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-primary)", opacity: "90%", width: "300px", height: "300px", borderRadius: "100%", color: "#fff", fontSize: "34px", fontWeight: 600, lineHeight: "1.41em", letterSpacing: "-.03em", textAlign: "center" }}>
                      <p>무료 도입 진단</p>
                    </div>
                    <div className="bg" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#548ee3", opacity: "90%", width: "300px", height: "300px", borderRadius: "100%", color: "#fff", fontSize: "34px", fontWeight: 600, lineHeight: "1.41em", letterSpacing: "-.03em", textAlign: "center", margin: "0 -20px" }}>
                      <p>사장님 눈높이<br />쉬운 설명</p>
                    </div>
                    <div className="bg" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#5461e3", opacity: "90%", width: "300px", height: "300px", borderRadius: "100%", color: "#fff", fontSize: "34px", fontWeight: 600, lineHeight: "1.41em", letterSpacing: "-.03em", textAlign: "center" }}>
                      <p>꼭 필요한 것만<br />만들어 드림</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 서비스 인프라 섹션 ── */}
              <section className="infra">
                <h3>사장님의 일을 대신하는 AI</h3>

                {/* 한눈에 보는 서비스 */}
                <div className="free">
                  <div className="txt-wrap">
                    <div>
                      <h4>올인원 AI 서비스</h4>
                      <p>두번째뇌부터 챗봇·웹앱까지<br />사장님께 꼭 필요한 것만 골라 만들어 드립니다</p>
                    </div>
                  </div>
                  <div style={{ flex: 1, display: "flex", gap: "20px" }}>
                    {infraCards.map((card) => (
                      <div
                        key={card.label}
                        className="infra-card"
                        style={{ flex: 1, backgroundColor: card.color }}
                      >
                        <img src={card.icon} alt={card.label} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
                        <p style={{ whiteSpace: "pre-line" }}>{card.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 시그니처 섹션 */}
                <div
                  style={{
                    display: "flex",
                    background: "linear-gradient(to right, #6a44e0, #b155eb)",
                    marginTop: "100px",
                  }}
                >
                  <div className="contain" style={{ maxWidth: "1400px", display: "flex", padding: "150px 30px" }}>
                    <div style={{ marginRight: "190px", padding: "55px 0" }}>
                      <h3 style={{ fontSize: "48px", fontWeight: 700, lineHeight: "1.67em", letterSpacing: "-.03em", color: "#fff" }}>시그니처 서비스</h3>
                      <p style={{ fontSize: "22px", fontWeight: 400, lineHeight: "1.59em", letterSpacing: "-.03em", color: "#fff", opacity: "90%" }}>
                        사장님의 자료와 노하우를 기억하는 AI 두번째 뇌<br />
                        디스코드로 부르면 바로 일하는 AI 직원팀
                      </p>
                      <p style={{ fontSize: "19px", fontWeight: 500, lineHeight: "4.21em", letterSpacing: "-.03em", color: "#fff", opacity: "80%" }}>
                        ※물어보면 답하고, 시키면 처리합니다.
                      </p>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
                      {[
                        { label: "AI 두번째 뇌" },
                        { label: "디스코드 AI 직원팀" },
                      ].map((item) => (
                        <div key={item.label} style={{ display: "flex", alignItems: "center", background: "#fff", height: "180px", borderRadius: "30px", padding: "30px 50px" }}>
                          <p style={{ fontSize: "32px", fontWeight: 600, lineHeight: "1.56em", letterSpacing: "-.03em", color: "#242424" }}>{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 자동화 */}
                <div className="education">
                  <div className="contain" style={{ maxWidth: "1400px" }}>
                    <h3>매일 반복되는 일을 줄여 드립니다</h3>
                    <div className="edu-wrap">
                      {[
                        { label: "업무 자동화 구축", icon: "https://www.af-asset.com/images/sub/edu-img-01.png" },
                        { label: "문서 자동화 시스템", icon: "https://www.af-asset.com/images/sub/edu-img-02.png" },
                      ].map((edu) => (
                        <div key={edu.label} className="edu-img" style={{ flex: 1 }}>
                          <img src={edu.icon} alt="" style={{ marginBottom: "15px", height: "80px", objectFit: "contain" }} />
                          <p style={{ fontSize: "32px", fontWeight: 600, lineHeight: "2.5em", letterSpacing: "-.03em", color: "#242424" }}>{edu.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* focusing 배너 */}
                <div className="focusing">
                  <div className="contain" style={{ maxWidth: "1400px" }}>
                    <h3>O&J는 사장님이 더 중요한 일에 집중하시도록<br />포커싱을 두고 있습니다</h3>
                  </div>
                </div>
              </section>

              {/* ── 신청 폼 ── */}
              <div id="contact" style={{ paddingTop: "150px" }}>
                <div className="contain" style={{ maxWidth: "1400px" }}>
                  <div className="inquiry-wrap">
                    <div className="inquiry-form">
                      {submitted ? (
                        <div style={{ textAlign: "center", padding: "100px 0" }}>
                          <p style={{ fontSize: "24px", fontWeight: 700, color: "#242424", marginBottom: "20px" }}>신청이 완료되었습니다</p>
                          <p style={{ color: "#454545" }}>O&J 담당자가 1일 이내 연락드립니다.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div className="form-wrap">
                            <div className="group">
                              <div className="title">
                                <p>사장님의 일을 AI가 대신합니다</p>
                                <h4>O&J 컴퍼니<br /><span>AI 도입 상담</span> 신청하기</h4>
                              </div>
                              <div className="form">
                                <div className="row">
                                  <div className="col">
                                    <dl>
                                      <dt><label htmlFor="join_name">NAME</label></dt>
                                      <dd>
                                        <input type="text" id="join_name" required placeholder="성함을 입력해 주세요"
                                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                          className="input-field" />
                                      </dd>
                                    </dl>
                                  </div>
                                  <div className="col">
                                    <dl>
                                      <dt><label htmlFor="join_tel">Phone</label></dt>
                                      <dd>
                                        <input type="tel" id="join_tel" required placeholder="전화번호를 입력해주세요"
                                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                          className="input-field" />
                                      </dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="group">
                              <div className="form">
                                <div className="row">
                                  <div className="col col-x2">
                                    <dl>
                                      <dt><label htmlFor="join_memo">MESSAGE</label></dt>
                                      <dd>
                                        <textarea id="join_memo" placeholder="어떤 일을 AI에게 맡기고 싶으신지 적어 주세요"
                                          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                          className="input-field"
                                          style={{ height: "150px", border: "1px solid #808080", padding: "20px 18px", resize: "none", display: "block", width: "100%" }} />
                                      </dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="submit-area">
                            <div className="form-agree">
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <input type="checkbox" id="join_chk" required checked={form.agree}
                                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                                  style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }} />
                                <label htmlFor="join_chk" style={{ color: "#454545", fontSize: "16px", cursor: "pointer" }}>
                                  개인정보 수집 및 이용에 동의합니다.
                                </label>
                              </div>
                            </div>
                            <button type="submit" className="btn-submit" disabled={loading}>{loading ? "전송 중..." : "신청하기"}</button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
