import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageBanner from "@/components/SubPageBanner";

const tabs = [
  { label: "CEO 인사말", href: "/company/greetings" },
  { label: "기업 컨설팅", href: "/company/consulting" },
];

// af-asset 원본 아이콘 이미지 URL 사용
const services = [
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-01.png",
    iconAlt: "AI 두번째뇌 아이콘",
    title: "AI 두번째 뇌 + AI직원팀 (시그니처)",
    desc: `사장님이 가진 자료·노하우·문서를 AI가 기억하는 '두번째 뇌'를 만들어 드립니다
여기에 디스코드로 부르면 바로 일하는 AI 직원팀을 붙여, 물어보면 답하고 시키면 처리하는 나만의 AI 팀을 갖게 됩니다`,
  },
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-02.png",
    iconAlt: "업무 자동화 아이콘",
    title: "업무 자동화",
    desc: `매일 손으로 하던 반복 업무 — 자료 수집 / 정리 / 입력 / 알림 보내기 등을 AI가 알아서 처리하도록 만들어 드립니다
사람이 안 해도 되는 일을 줄여, 사장님과 직원이 진짜 중요한 일에 집중할 수 있게 합니다`,
  },
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-03.png",
    iconAlt: "문서 자동화 아이콘",
    title: "문서 자동화",
    desc: `견적서 / 제안서 / 보고서 / 계약서처럼 매번 새로 쓰는 문서를, 몇 가지 정보만 넣으면 AI가 자동으로 완성해 드립니다
손으로 만들면 한 시간 걸리던 문서를 클릭 몇 번으로 끝내, 문서 작업 시간을 크게 줄여 드립니다`,
  },
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-04.png",
    iconAlt: "AI 챗봇 아이콘",
    title: "AI 챗봇",
    desc: `고객 문의에 24시간 대신 답하는 AI 챗봇을 만들어 드립니다 자주 묻는 질문 응대 / 예약·상담 접수 / 제품 안내까지
사장님이 자리에 없어도 고객을 놓치지 않고, 응대에 드는 시간과 비용을 함께 줄여 드립니다`,
  },
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-05.png",
    iconAlt: "웹앱 제작 아이콘",
    title: "웹앱 제작",
    desc: `사장님 사업에 꼭 맞는 홈페이지 / 예약 시스템 / 관리자 페이지 / 내부 업무 도구를 직접 만들어 드립니다
복잡한 외주 없이, 필요한 기능만 담아 쉽고 빠르게 쓸 수 있는 웹앱으로 만들어 드립니다`,
  },
  {
    icon: "https://www.af-asset.com/images/sub/enter-img-06.png",
    iconAlt: "무료 진단 아이콘",
    title: "무료 AI 도입 진단",
    desc: `"우리 회사에 AI를 어디에 쓰면 좋을지" 막막하시면, 먼저 무료로 진단해 드립니다
사장님의 업무를 듣고, 가장 효과가 큰 부분부터 어떻게 자동화할 수 있는지 쉬운 말로 알려 드립니다`,
  },
];

export default function ConsultingPage() {
  return (
    <div id="sub">
      <Header />
      <SubPageBanner title="O&J 서비스" subtitle="사장님의 일을 AI가 대신합니다" tabs={tabs} activeTab="/company/consulting" />

      <div id="container">
        <div id="contArea">
          <div className="real-cont">
            <div className="sub-title">
              <h1>O&J 컴퍼니 / AI 서비스<br />사장님의 일을 AI가 대신합니다</h1>
            </div>

            <div className="enterprise">
              <ul className="cnt">
                {services.map((s) => (
                  <li key={s.title} className="list">
                    <div className="img">
                      <img src={s.icon} alt={s.iconAlt} />
                    </div>
                    <div className="txt">
                      <h2>{s.title}</h2>
                      <p>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <a href="#" className="scroll-top">맨위로가기</a>
    </div>
  );
}
