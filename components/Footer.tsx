export default function Footer() {
  return (
    <div id="footer">
      <div className="contain">
        <div className="foot-logo">
          <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-.04em", color: "#12053a" }}>O&J 컴퍼니</span>
          <p style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>AI Automation Solutions</p>
        </div>

        <address>
          <dl>
            <dt>상호명</dt>
            <dd>O&J 컴퍼니</dd>
          </dl>
          <dl>
            <dt>구분</dt>
            <dd>AI 자동화 솔루션 전문 기업</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>서울특별시</dd>
          </dl>
          <dl>
            <dt>이메일</dt>
            <dd>wjdgocks777@gmail.com</dd>
          </dl>
        </address>

        <div className="foot-wrap">
          <ul className="f-links">
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이메일무단수집거부</a></li>
          </ul>
          <p className="copyright">© 2026 O&J Company. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}
