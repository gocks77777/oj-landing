import Link from "next/link";

interface Tab { label: string; href: string; }

interface Props {
  title: string;
  subtitle?: string;
  bgClass?: string;
  tabs?: Tab[];
  activeTab?: string;
}

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
];

export default function SubPageBanner({ title, subtitle, tabs, activeTab }: Props) {
  return (
    <>
      {/* 서브 비주얼 - af-asset 520px 배너 */}
      <div className="sub-visual" style={{ marginTop: "100px" }}>
        <div
          className="bg"
          style={{ backgroundImage: `url('${BG_IMAGES[0]}')` }}
        />
        {/* 어두운 오버레이 */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div className="inner">
          <p className="t1">{title}</p>
          {subtitle && <p className="t2">{subtitle}</p>}
        </div>
      </div>

      {/* LNB 탭 - af-asset 형식 */}
      {tabs && tabs.length > 0 && (
        <div className="lnb">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.href} className={activeTab === tab.href ? "active" : ""}>
                <Link href={tab.href}>{tab.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
