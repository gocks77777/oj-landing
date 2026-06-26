export default function Footer() {
  return (
    <div id="footer">
      <div className="contain">
        <div className="foot-logo">
          <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-.04em", color: "#12053a" }}>O&J 컴퍼니</span>
          <p style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>AI Automation Studio</p>
        </div>

        <address>
          <dl>
            <dt>상호명</dt>
            <dd>O&J 컴퍼니</dd>
          </dl>
          <dl>
            <dt>대표</dt>
            <dd>오정빈 · 정해찬</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>대한민국</dd>
          </dl>
          <dl>
            <dt>대표번호</dt>
            <dd>준비중</dd>
          </dl>
          <dl>
            <dt>사업자등록</dt>
            <dd>준비중</dd>
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
