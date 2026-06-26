"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";

const tabs: { label: string; href: string }[] = [];

export default function ConsultingContactPage() {
  const [form, setForm] = useState({ cate: "기업컨설팅", name: "", phone: "", message: "", agree: false });
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
      <SubPageBanner title="무료 AI 도입 진단" subtitle="사장님의 업무를 듣고 어디에 AI를 쓰면 좋을지 알려 드립니다" tabs={tabs} activeTab="/contact/consulting" />

      <div id="container">
        <div id="contArea">
          <div className="real-cont">
            <div className="sub-title">
              <h1>무료 진단 신청하기</h1>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "100px 0" }}>
                <p style={{ fontSize: "24px", fontWeight: 700, color: "#242424", marginBottom: "20px" }}>
                  무료 진단 신청이 완료되었습니다
                </p>
                <p style={{ color: "#454545" }}>O&J 담당자가 1일 이내 연락드립니다.</p>
              </div>
            ) : (
              <div className="inquiry-wrap">
                <div className="inquiry-form" style={{ maxWidth: "760px" }}>
                  <form onSubmit={handleSubmit}>

                    <div className="form-wrap">
                      <div className="group">
                        <div className="form">
                          <div className="row">
                            <div className="col">
                              <dl>
                                <dt><label htmlFor="user_name"><span style={{ position: "absolute", opacity: 0 }}>(필수)</span>NAME</label></dt>
                                <dd>
                                  <input
                                    type="text" id="user_name" required
                                    placeholder="성함을 입력해 주세요"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="input-field"
                                  />
                                </dd>
                              </dl>
                            </div>
                            <div className="col">
                              <dl>
                                <dt><label htmlFor="tel"><span style={{ position: "absolute", opacity: 0 }}>(필수)</span>Phone</label></dt>
                                <dd>
                                  <input
                                    type="tel" id="tel" required
                                    placeholder="전화번호를 입력해주세요"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="input-field"
                                  />
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
                                <dt><label htmlFor="memo">MESSAGE</label></dt>
                                <dd>
                                  <textarea
                                    id="memo"
                                    placeholder="상담요청 내용을 입력해 주세요"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="input-field"
                                    style={{ height: "150px", border: "1px solid #808080", padding: "20px 18px", resize: "none", display: "block", width: "100%" }}
                                  />
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="submit-area">
                      <div className="form-agree">
                        <div className="check" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <input
                            type="checkbox" id="p_chk" required
                            checked={form.agree}
                            onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                            style={{ width: "20px", height: "20px", accentColor: "var(--color-primary)" }}
                          />
                          <label htmlFor="p_chk" style={{ color: "#454545", fontSize: "16px", cursor: "pointer" }}>
                            개인정보 수집 및 이용에 동의합니다.
                          </label>
                        </div>
                      </div>
                      <div>
                        <button type="submit" className="btn-submit" disabled={loading}>{loading ? "전송 중..." : "문의하기"}</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
