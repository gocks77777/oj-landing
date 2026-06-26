import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";

const tabs = [
  { label: "CEO 인사말", href: "/company/greetings" },
  { label: "기업 컨설팅", href: "/company/consulting" },
];

const certs = [
  { label: "AI 두번째뇌\n+ AI직원팀" },
  { label: "업무 자동화\n구축" },
  { label: "문서 자동화\n시스템" },
];

export default function Greetings() {
  return (
    <div id="sub">
      <Header />
      <SubPageBanner title="O&J 컴퍼니" subtitle="창업자 소개" tabs={tabs} activeTab="/company/greetings" />

      <div id="container">
        <div id="contArea">
          <div className="real-cont">
            <div className="sub-title">
              <h1>창업자 인사말</h1>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="greeting-headline">
                O&J 컴퍼니를 찾아주신{" "}
                <span style={{ color: "var(--color-primary)" }}>사장님, 진심으로 환영합니다.</span>
              </h2>
              <div style={{ fontSize: "18px", lineHeight: 1.8, color: "#454545", letterSpacing: "-.02em" }}>
                <p>
                  안녕하세요. O&J 컴퍼니입니다. 저희는
                  &ldquo;사장님의 일을 AI가 대신합니다&rdquo;라는 한 가지 철학으로,
                  기업의 업무를 자동화하는 AI 솔루션 전문 기업입니다.
                </p>
                <br />
                <p>
                  사장님이 매일 반복하시는 일 — 견적서 만들고, 문서 정리하고,
                  고객 문의에 답하고, 자료 찾는 일 — 그 시간을 AI에게 맡기면
                  사장님은 더 중요한 일에 집중하실 수 있습니다. 저희는 실제로
                  <strong> 업무 자동화 시스템을 구축하고, 문서 자동화 도구를 만들고,
                  AI 강의를 진행해 온</strong> 경험으로 이 일을 해왔습니다.
                </p>
                <br />
                <p>
                  거창한 기술 용어 없이, 사장님 눈높이에서 쉽게 설명드리고
                  꼭 필요한 것만 만들어 드립니다. 처음 상담부터 도입, 그리고
                  실제로 일이 줄어드는 순간까지 O&J가 끝까지 함께하겠습니다.
                </p>
              </div>
              <div style={{ marginTop: "40px", fontSize: "18px", fontWeight: 600, color: "#242424", letterSpacing: "-.02em" }}>
                <span style={{ color: "var(--color-primary)" }}>O&J 컴퍼니 임직원 일동</span>
              </div>
            </div>

            {/* 실적 요약 배너 */}
            <div style={{ display: "flex", gap: "30px", marginTop: "80px", marginBottom: "80px" }}>
              {[
                { num: "AI", label: "사장님의 두번째 뇌" },
                { num: "24시간", label: "쉬지 않는 AI 직원팀" },
                { num: "올인원", label: "자동화·문서·챗봇·웹앱" },
              ].map((stat) => (
                <div key={stat.label} style={{ flex: 1, background: "var(--color-primary)", borderRadius: "20px", padding: "40px 30px", textAlign: "center" }}>
                  <p style={{ fontSize: "48px", fontWeight: 800, color: "#fff", letterSpacing: "-.03em", lineHeight: 1 }}>{stat.num}</p>
                  <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", marginTop: "12px", letterSpacing: "-.02em" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* 대표 서비스 섹션 */}
            <div style={{ borderTop: "1px solid #eee", paddingTop: "80px", marginBottom: "80px" }}>
              <h3 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-.03em", color: "#242424", textAlign: "center", marginBottom: "50px" }}>
                O&J 대표 서비스
              </h3>
              <div className="cert-cards">
                {certs.map((c) => (
                  <div key={c.label} style={{ flex: 1, maxWidth: "360px", border: "2px solid var(--color-primary)", borderRadius: "20px", padding: "40px 30px", textAlign: "center" }}>
                    <p style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-primary)", whiteSpace: "pre-line", wordBreak: "keep-all", lineHeight: 1.5, letterSpacing: "-.02em" }}>{c.label}</p>
                    <p style={{ fontSize: "15px", color: "#606060", marginTop: "14px", lineHeight: 1.6 }}>
                      반복되는 일을 AI가 대신해 사장님의 시간을 돌려드립니다
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <a href="#" className="scroll-top">맨위로가기</a>
    </div>
  );
}
