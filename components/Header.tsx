"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "O&J 컴퍼니",
    sub: [
      { label: "CEO 인사말", href: "/company/greetings" },
      { label: "기업 컨설팅", href: "/company/consulting" },
    ],
  },
  { label: "실적", href: "/performance", sub: [] },
  { label: "무료 진단", href: "/contact/consulting", sub: [] },
];

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [fixed, setFixed] = useState(!transparent);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setFixed(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  return (
    <>
      <div id="header" className={fixed ? "header-fixed" : ""}>
        <div className="contain">
          {/* 로고 */}
          <div className={`sitelogo${fixed ? " sitelogo-dark" : ""}`}>
            <Link href="/" title="홈으로">O&J 컴퍼니</Link>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* 데스크탑 GNB */}
            <nav id="gnb">
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <a href="#" onClick={(e) => e.preventDefault()}>{item.label}</a>
                    )}
                    {item.sub.length > 0 && (
                      <div className="submenu">
                        <ul>
                          {item.sub.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href}>{s.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* 햄버거 버튼 */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴"
              style={{
                marginLeft: "clamp(16px, 4vw, 100px)", width: "44px", height: "44px",
                background: "transparent",
                border: "0", cursor: "pointer", fontSize: "28px", lineHeight: "44px",
                color: fixed ? "#12053a" : "#fff",
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* 모바일/전체 메뉴 */}
      <div className={`all-navigation${menuOpen ? " open" : ""}`}>
        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href
                  ? <Link href={item.href} onClick={() => setMenuOpen(false)} style={{ display: "block", fontSize: "50px", fontWeight: 700, letterSpacing: "-.03em", lineHeight: "1.33em", color: "#fff" }}>{item.label}</Link>
                  : <a href="#" style={{ display: "block", fontSize: "50px", fontWeight: 700, letterSpacing: "-.03em", lineHeight: "1.33em", color: "#fff" }}>{item.label}</a>
                }
                {item.sub.length > 0 && (
                  <div className="submenu">
                    <ul>
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} onClick={() => setMenuOpen(false)}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>닫기</button>
      </div>
      <div className={`all-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
    </>
  );
}
