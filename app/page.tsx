import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Феникс Логистикс — международные грузоперевозки",
  description:
    "Международные грузоперевозки под ключ: маршруты, таможенное оформление, складская логистика и доставка.",
};

const sponsorLogos = [
  {
    name: "Gorilla Energy Drink",
    src: "/sponsor_logos/Gorilla_Energy_Drink.png",
    width: 690,
    height: 690,
  },
  {
    name: "Rakhat",
    src: "/sponsor_logos/Rakhat.png",
    width: 378,
    height: 204,
  },
  {
    name: "Adler",
    src: "/sponsor_logos/adler.jpeg",
    width: 200,
    height: 200,
  },
  {
    name: "Alasintez",
    src: "/sponsor_logos/alasintez.jpg",
    width: 400,
    height: 400,
  },
  {
    name: "Alina",
    src: "/sponsor_logos/alina.png",
    width: 654,
    height: 220,
  },
  {
    name: "Алматинский завод",
    src: "/sponsor_logos/ao_almatinskiy_zavod.jpg",
    width: 1080,
    height: 1080,
  },
  {
    name: "Bericap",
    src: "/sponsor_logos/bericap.webp",
    width: 486,
    height: 486,
  },
  {
    name: "Cinkaz",
    src: "/sponsor_logos/cinkaz.png",
    width: 223,
    height: 152,
  },
  {
    name: "Danone",
    src: "/sponsor_logos/danone.jpg",
    width: 200,
    height: 149,
  },
  {
    name: "Dosfarm",
    src: "/sponsor_logos/dosfarm.png",
    width: 255,
    height: 55,
  },
  {
    name: "Genau",
    src: "/sponsor_logos/genau.png",
    width: 1412,
    height: 459,
  },
  {
    name: "L'Oreal",
    src: "/sponsor_logos/loreal.png",
    width: 320,
    height: 320,
  },
  {
    name: "Magnum",
    src: "/sponsor_logos/magnum.webp",
    width: 480,
    height: 270,
  },
  {
    name: "Mars",
    src: "/sponsor_logos/mars.png",
    width: 300,
    height: 168,
  },
  {
    name: "Miko",
    src: "/sponsor_logos/miko.jpeg",
    width: 225,
    height: 225,
  },
  {
    name: "Pride KZ",
    src: "/sponsor_logos/pridekz.png",
    width: 246,
    height: 150,
  },
  {
    name: "Qazalpack",
    src: "/sponsor_logos/qazalpack.svg",
    width: 508,
    height: 96,
  },
  {
    name: "RG Brands",
    src: "/sponsor_logos/rgbrands.jpeg",
    width: 228,
    height: 221,
  },
  {
    name: "Shin-Line",
    src: "/sponsor_logos/shin-line.svg",
    width: 121,
    height: 120,
  },
  {
    name: "UzChem",
    src: "/sponsor_logos/uzchem.png",
    width: 225,
    height: 225,
  },
  {
    name: "Yakar",
    src: "/sponsor_logos/yakar.jpeg",
    width: 275,
    height: 183,
  },
];

function PageAssets() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --navy-deep: #152a60;
          --navy: #0e1f47;
          --navy-light: #16306b;
          --blue-accent: #3d6dff;
          --white: #ffffff;
          --paper: #f4f6fb;
          --ink: #0a1530;
          --grey: #5b6478;
          --line: rgba(10, 21, 48, 0.1);
          --line-light: rgba(255, 255, 255, 0.14);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Manrope', sans-serif;
          color: var(--ink);
          background: var(--white);
          overflow-x: hidden;
        }

        h1, h2, h3 {
          font-family: 'Archivo', sans-serif;
          letter-spacing: -0.01em;
        }

        .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        a { text-decoration: none; color: inherit; }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ===== HEADER ===== */
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 21, 48, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line-light);
        }

        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .logo-mark {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--white);
        }

        .logo-mark svg { display: block; }

        .logo-text {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 19px;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .logo-text span {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 400;
          font-size: 10.5px;
          letter-spacing: 0.14em;
          color: #8fa3d6;
          margin-top: 2px;
        }

        nav.links {
          display: flex;
          gap: 36px;
        }

        nav.links a {
          color: #c4cee8;
          font-size: 14.5px;
          font-weight: 500;
          transition: color 0.2s;
        }

        nav.links a:hover { color: var(--white); }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          background: var(--white);
          color: var(--navy-deep);
          font-weight: 600;
          font-size: 14px;
          line-height: 1;
          white-space: nowrap;
          padding: 11px 20px;
          border-radius: 7px;
          transition: background 0.2s, transform 0.2s;
        }

        .nav-cta:hover { background: #d9e2ff; transform: translateY(-1px); }

        /* ===== HERO ===== */
        .hero {
          position: relative;
          background:
            linear-gradient(160deg, rgba(44, 73, 147, 0.41) 0%, rgba(14, 31, 71, 0.72) 55%, rgba(22, 48, 107, 0.7) 100%),
            url('/background_image/ИП%20%E2%80%9CФеникс%E2%80%9D.jpg') center center / cover no-repeat;
          color: var(--white);
          padding: 168px 0 0;
          overflow: hidden;
        }

        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 75%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
          padding-bottom: 64px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9db4ec;
          margin-bottom: 26px;
        }

        .eyebrow::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5d8bff;
          box-shadow: 0 0 0 4px rgba(93,139,255,0.18);
        }

        .hero h1 {
          font-size: clamp(38px, 4.6vw, 58px);
          line-height: 1.06;
          font-weight: 800;
          max-width: 640px;
        }

        .hero h1 em {
          font-style: normal;
          color: #7ea1ff;
        }

        .hero p.lead {
          margin-top: 22px;
          font-size: 17.5px;
          line-height: 1.6;
          color: #b9c4e6;
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 36px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-accent);
          color: var(--white);
          font-weight: 600;
          font-size: 15px;
          padding: 15px 26px;
          border-radius: 8px;
          transition: background 0.2s, transform 0.2s;
        }

        .btn-primary:hover { background: #2a57e0; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.22);
          color: var(--white);
          font-weight: 600;
          font-size: 15px;
          padding: 15px 24px;
          border-radius: 8px;
          transition: border-color 0.2s, background 0.2s;
        }

        .btn-ghost:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.4); }

        /* route card visual */
        .route-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--line-light);
          border-radius: 16px;
          padding: 28px;
          backdrop-filter: blur(6px);
        }

        .route-card .card-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 22px;
        }

        .route-card .card-head .label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8295c7;
        }

        .route-card .card-head .id {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5d8bff;
        }

        .route-line {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 0 4px;
          margin: 30px 0 18px;
        }

        .route-line::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 10px;
          right: 10px;
          height: 1px;
          background: repeating-linear-gradient(90deg, #4d6bb0 0, #4d6bb0 6px, transparent 6px, transparent 12px);
        }

        .route-point {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 70px;
        }

        .route-point .dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--navy-deep);
          border: 2px solid #5d8bff;
          z-index: 1;
        }

        .route-point.end .dot { background: #5d8bff; border-color: #5d8bff; }

        .route-point .city {
          font-size: 13px;
          font-weight: 600;
          color: var(--white);
          text-align: center;
        }

        .route-point .country {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8295c7;
        }

        .route-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--line-light);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 24px;
        }

        .route-stats .stat {
          background: rgba(10,21,48,0.55);
          padding: 16px 14px;
        }

        .route-stats .stat .num {
          font-family: 'Archivo', sans-serif;
          font-size: 21px;
          font-weight: 700;
          color: var(--white);
        }

        .route-stats .stat .cap {
          font-size: 11px;
          color: #8295c7;
          margin-top: 3px;
        }

        .hero-bottom-bar {
          position: relative;
          z-index: 2;
          border-top: 1px solid var(--line-light);
          padding: 22px 0;
        }

        .marquee-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: #93a2cc;
          letter-spacing: 0.02em;
        }

        .marquee-row b { color: var(--white); font-weight: 600; }

        /* ===== TRUST / VALUES STRIP ===== */
        .values {
          background: var(--paper);
          padding: 90px 0;
        }

        .section-head {
          max-width: 620px;
          margin-bottom: 56px;
        }

        .section-head .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue-accent);
          margin-bottom: 14px;
          display: block;
        }

        .section-head h2 {
          font-size: clamp(28px, 3.2vw, 38px);
          font-weight: 800;
          line-height: 1.18;
          color: var(--navy-deep);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 14px;
          overflow: hidden;
        }

        .value-card {
          background: var(--white);
          padding: 38px 30px;
          transition: background 0.25s;
        }

        .value-card:hover { background: #fafbfe; }

        .value-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: var(--blue-accent);
          margin-bottom: 22px;
        }

        .value-card h3 {
          font-size: 19px;
          font-weight: 700;
          color: var(--navy-deep);
          margin-bottom: 10px;
        }

        .value-card p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--grey);
        }

        /* ===== SERVICES ===== */
        .services {
          padding: 90px 0;
          background: var(--white);
        }

        .services-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--line);
        }

        .service-row {
          display: grid;
          grid-template-columns: 60px 1.1fr 1.4fr;
          gap: 32px;
          align-items: center;
          padding: 30px 4px;
          border-bottom: 1px solid var(--line);
          transition: background 0.2s;
        }

        .service-row:hover { background: var(--paper); }

        .service-row .idx {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--blue-accent);
        }

        .service-row h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--navy-deep);
        }

        .service-row p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--grey);
        }

        /* ===== STATS BANNER ===== */
        .stats-banner {
          background: var(--navy-deep);
          padding: 64px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stats-grid .stat-block {
          text-align: left;
          border-left: 1px solid var(--line-light);
          padding-left: 22px;
        }

        .stats-grid .stat-block .num {
          font-family: 'Archivo', sans-serif;
          font-size: 34px;
          font-weight: 800;
          color: var(--white);
        }

        .stats-grid .stat-block .num span { color: #7ea1ff; }

        .stats-grid .stat-block .cap {
          font-size: 13px;
          color: #93a2cc;
          margin-top: 6px;
        }

        /* ===== CONTACT ===== */
        .contact {
          padding: 100px 0 90px;
          background: var(--paper);
        }

        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          background: var(--navy-deep);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .contact-left {
          padding: 56px 48px;
          color: var(--white);
          position: relative;
        }

        .contact-left h2 {
          font-size: clamp(26px, 3vw, 33px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .contact-left p {
          color: #b9c4e6;
          font-size: 15px;
          line-height: 1.65;
          max-width: 380px;
        }

        .contact-detail-list {
          margin-top: 38px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .contact-detail {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .contact-detail .ic {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--line-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-detail .label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8295c7;
          margin-bottom: 4px;
        }

        .contact-detail .val {
          font-size: 15.5px;
          font-weight: 600;
          color: var(--white);
        }

        .contact-right {
          background: var(--navy-light);
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-right .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #93a2cc;
          margin-bottom: 18px;
        }

        .contact-right .big-link {
          font-family: 'Archivo', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 28px;
          word-break: break-word;
        }

        .contact-right .btn-primary {
          width: fit-content;
        }

        /* ===== SPONSORS ===== */
        .sponsors {
          background: var(--white);
          padding: 54px 0;
          border-top: 1px solid var(--line);
          overflow: hidden;
        }

        .sponsors-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
        }

        .sponsors-head .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue-accent);
        }

        .sponsors-head .line {
          height: 1px;
          flex: 1;
          background: var(--line);
        }

        .sponsors-marquee {
          position: relative;
          margin: 0 -32px;
          overflow: hidden;
        }

        .sponsors-marquee::before,
        .sponsors-marquee::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 2;
          width: 120px;
          pointer-events: none;
        }

        .sponsors-marquee::before {
          left: 0;
          background: linear-gradient(90deg, var(--white), rgba(255,255,255,0));
        }

        .sponsors-marquee::after {
          right: 0;
          background: linear-gradient(270deg, var(--white), rgba(255,255,255,0));
        }

        .sponsors-track {
          display: flex;
          width: max-content;
          animation: sponsors-scroll 48s linear infinite;
        }

        .sponsors-group {
          display: flex;
          align-items: center;
          gap: 22px;
          padding-right: 22px;
        }

        .sponsor-logo {
          width: 190px;
          height: 86px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: #ffffff;
          padding: 18px 22px;
        }

        .sponsor-logo img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.78;
          transition: filter 0.2s, opacity 0.2s;
        }

        .sponsor-logo:hover img {
          filter: grayscale(0);
          opacity: 1;
        }

        @keyframes sponsors-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsors-track {
            animation: none;
          }
        }

        /* ===== FOOTER ===== */
        footer {
          background: var(--navy-deep);
          padding: 30px 0;
          border-top: 1px solid var(--line-light);
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 13px;
          color: #7b8ab8;
        }

        .footer-row .logo-text { color: var(--white); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          nav.links { display: none; }
          .hero-inner { grid-template-columns: 1fr; padding-bottom: 40px; }
          .hero { padding-top: 130px; }
          .values-grid { grid-template-columns: 1fr; }
          .service-row { grid-template-columns: 1fr; gap: 10px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .contact-inner { grid-template-columns: 1fr; }
          .contact-left, .contact-right { padding: 40px 28px; }
          .marquee-row { flex-direction: column; }
          .sponsors-head { align-items: flex-start; }
          .sponsors-head .line { display: none; }
          .sponsor-logo { width: 164px; height: 78px; }
        }

        @media (max-width: 540px) {
          .wrap { padding: 0 20px; }
          .hero {
            background:
              linear-gradient(160deg, rgba(21, 42, 96, 0.82) 0%, rgba(14, 31, 71, 0.78) 55%, rgba(22, 48, 107, 0.76) 100%),
              url('/background_image/ИП%20%E2%80%9CФеникс%E2%80%9D.jpg') center center / cover no-repeat;
          }
          .nav-row { height: 66px; gap: 10px; }
          .logo-mark { gap: 8px; min-width: 0; }
          .logo-mark svg { width: 30px; height: 30px; flex-shrink: 0; }
          .logo-text {
            font-size: 15.5px;
            line-height: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .logo-text span { display: none; }
          .nav-cta {
            font-size: 12px;
            padding: 9px 10px;
            border-radius: 6px;
          }
          .hero h1 { font-size: 32px; }
          .contact-right .big-link { font-size: 24px; }
          .sponsors-marquee { margin: 0 -20px; }
          .sponsors-marquee::before,
          .sponsors-marquee::after { width: 56px; }
        }
      `}</style>
    </>
  );
}

function Logo() {
  return (
    <div className="logo-mark">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="8" fill="#3d6dff" />
        <path
          d="M9 22L17 9L25 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 22L17 14.5L21.5 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
      <div className="logo-text">
        Feniks Logistics<span>International Freight</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="wrap nav-row">
        <Logo />
        <nav className="links">
          <Link href="#values">Почему мы</Link>
          <Link href="#services">Услуги</Link>
          <Link href="#contact">Контакты</Link>
        </nav>
        <a className="nav-cta" href="tel:+77715441994">
          +7 (771) 544 19 94
        </a>
      </div>
    </header>
  );
}

function RouteCard() {
  return (
    <div className="route-card">
      <div className="card-head">
        <span className="label">Маршрут</span>
        <span className="id">FNX-2026-114</span>
      </div>
      <div className="route-line">
        <div className="route-point">
          <span className="dot" />
          <span className="city">Алматы</span>
          <span className="country">KZ</span>
        </div>
        <div className="route-point">
          <span className="dot" />
          <span className="city">Урумчи</span>
          <span className="country">CN</span>
        </div>
        <div className="route-point end">
          <span className="dot" />
          <span className="city">Ташкент</span>
          <span className="country">UZ</span>
        </div>
      </div>
      <div className="route-stats">
        <div className="stat">
          <div className="num">24/7</div>
          <div className="cap">Контроль груза</div>
        </div>
        <div className="stat">
          <div className="num">100%</div>
          <div className="cap">Сохранность</div>
        </div>
        <div className="stat">
          <div className="num">В срок</div>
          <div className="cap">Доставка</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-lines" />
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Международные грузоперевозки</div>
            <h1>
              Ваш груз в надежных руках.{" "}
              <em>Точно в срок, в любую точку.</em>
            </h1>
            <p className="lead">
              «Feniks Logistics» организует международные грузоперевозки под
              ключ: от расчёта маршрута и таможенного оформления до доставки на
              склад получателя. Надёжно, быстро, качественно — на каждом
              километре пути.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="tel:+77715441994">
                Позвонить нам
              </a>
              <Link className="btn-ghost" href="#services">
                Смотреть услуги
              </Link>
            </div>
          </div>

          <RouteCard />
        </div>

        <div className="hero-bottom-bar">
          <div className="marquee-row">
            <span>
              Надёжно — <b>каждый груз под контролем</b>
            </span>
            <span>
              Быстро — <b>оптимальные маршруты</b>
            </span>
            <span>
              Качественно — <b>сервис без компромиссов</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="values" id="values">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Почему выбирают нас</span>
          <h2>Три принципа, на которых держится каждая перевозка</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-num">Надёжно</div>
            <h3>Гарантия сохранности груза</h3>
            <p>
              Тщательный контроль на всех этапах пути — от загрузки до
              выгрузки. Страхование и прозрачное отслеживание исключают
              неприятные сюрпризы.
            </p>
          </div>
          <div className="value-card">
            <div className="value-num">Быстро</div>
            <h3>Точные сроки доставки</h3>
            <p>
              Продуманная логистика и проверенные международные маршруты
              позволяют доставлять грузы без задержек и лишних простоев на
              границе.
            </p>
          </div>
          <div className="value-card">
            <div className="value-num">Качественно</div>
            <h3>Сервис, на который можно положиться</h3>
            <p>
              Индивидуальный подход к каждому клиенту: расчёт стоимости,
              документы, таможенное сопровождение — мы берём на себя все
              детали.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">Что мы делаем</span>
          <h2>Международные перевозки полного цикла</h2>
        </div>
        <div className="services-list">
          <div className="service-row">
            <span className="idx">01</span>
            <h3>Автомобильные перевозки</h3>
            <p>
              Доставка грузов любого объёма в Казахстан, Узбекистан, Россию, Китай, Ирак, Таджикистан и Туркменистан
            </p>
          </div>
          <div className="service-row">
            <span className="idx">02</span>
            <h3>Таможенное оформление</h3>
            <p>
              Полное сопровождение документов и прохождение таможни без
              задержек на границе — берём бюрократию на себя.
            </p>
          </div>
          <div className="service-row">
            <span className="idx">03</span>
            <h3>Складская логистика</h3>
            <p>
              Временное хранение, консолидация и обработка грузов на складах в
              Алматы перед отправкой или после получения.
            </p>
          </div>
          <div className="service-row">
            <span className="idx">04</span>
            <h3>Отслеживание и поддержка</h3>
            <p>
              Постоянная связь с менеджером и контроль статуса груза на каждом
              этапе маршрута — вы всегда знаете, где ваш груз.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-block">
            <div className="num">
              60<span></span>
            </div>
            <div className="cap">собственных машин</div>
          </div>
          <div className="stat-block">
            <div className="num">
              100<span></span>
            </div>
            <div className="cap">привлеченных машин</div>
          </div>
          <div className="stat-block">
            <div className="num">
              800<span>+</span>
            </div>
            <div className="cap">успешных перевозок в месяц</div>
          </div>
          <div className="stat-block">
            <div className="num">
              6<span></span>
            </div>
            <div className="cap">стран международной доставки</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16.5v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 21 16.5z"
        stroke="#7ea1ff"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z"
        stroke="#7ea1ff"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="3" stroke="#7ea1ff" strokeWidth="1.6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#7ea1ff" strokeWidth="1.6" />
      <path
        d="M12 6v6l4 2"
        stroke="#7ea1ff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <div className="contact-left">
            <h2>Готовы обсудить вашу перевозку?</h2>
            <p>
              Позвоните нам — рассчитаем маршрут,
              сроки и стоимость доставки в течение дня.
            </p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <div className="ic">
                  <PhoneIcon />
                </div>
                <div>
                  <div className="label">Телефон</div>
                  <div className="val">+7 (771) 544 19 94</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="ic">
                  <PinIcon />
                </div>
                <div>
                  <div className="label">Адрес</div>
                  <div className="val">
                    ул. Немировича-Данченко 45, г. Алматы
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="ic">
                  <ClockIcon />
                </div>
                <div>
                  <div className="label">Режим работы</div>
                  <div className="val">Пн–Сб, 09:00–19:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <span className="tag">Позвонить прямо сейчас</span>
            <a className="big-link" href="tel:+77715441994">
              +7 (771) 544 19 94
            </a>
            <a className="btn-primary" href="tel:+77715441994">
              Заказать звонок →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorsMarquee() {
  return (
    <section className="sponsors" aria-label="Спонсоры">
      <div className="wrap">
        <div className="sponsors-head">
          <span className="tag">Нам доверяют</span>
          <span className="line" />
        </div>
      </div>

      <div className="sponsors-marquee">
        <div className="sponsors-track">
          {[0, 1].map((groupIndex) => (
            <div
              className="sponsors-group"
              aria-hidden={groupIndex === 1}
              key={groupIndex}
            >
              {sponsorLogos.map((logo) => (
                <div className="sponsor-logo" key={`${groupIndex}-${logo.src}`}>
                  <Image
                    src={logo.src}
                    alt={groupIndex === 0 ? logo.name : ""}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-row">
        <div className="logo-text">Feniks Logistics</div>
        <div>
          © 2026 Feniks Logistics. Международные грузоперевозки.
        </div>
        <div>
          г.Алматы 
          ул.Немировича-Данченко 45
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <PageAssets />
      <Header />
      <Hero />
      <Values />
      <Services />
      <StatsBanner />
      <Contact />
      <SponsorsMarquee />
      <Footer />
    </>
  );
}
