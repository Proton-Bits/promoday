import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { sites } from "@/lib/sites";
import { hexToRgbTriplet } from "@/lib/color";
import WhatsappButton from "@/components/WhatsappButton";

const site = sites.perfumes;

export const metadata: Metadata = {
  title: "PromoZap — Sem Pixel",
};

export default function Page() {
  const themeStyle = {
    "--accent": site.accent,
    "--accent-rgb": hexToRgbTriplet(site.accent),
  } as CSSProperties;

  return (
    <>
      <section className="hero" style={themeStyle}>
        <div className="particles" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span className="p" key={i} />
          ))}
        </div>

        <div className="hero-inner">
          <div className="avatar-wrap">
            <Image
              src={site.logoSrc}
              alt={site.logoAlt}
              width={224}
              height={224}
              className="avatar-img"
              priority
            />
            <span className="avatar-status" aria-hidden="true" />
          </div>

          <h1>
            {site.headline.top}
            <br />
            {site.headline.bottomPre}
            <span>{site.headline.highlight}</span>
            {site.headline.bottomPost}
          </h1>

          <div className="stats">
            <span>{site.statsLeft}</span>
            <span className="dot">·</span>
            <span>{site.statsRight}</span>
          </div>

          <WhatsappButton href={site.whatsappLink}>
            <span>Quero entrar grátis</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.55 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.25 8.25Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
            </svg>
          </WhatsappButton>

          <p className="hero-sub">{site.subtitle}</p>
        </div>
      </section>

      <footer className="footer">
        <div className="foot-brand">
          Promo<span style={themeStyle}>Zap</span>
        </div>
        <p>{site.footerTagline}</p>
        <p style={{ marginTop: 6 }}>©2026 PromoZap — Todos os direitos reservados.</p>
      </footer>
    </>
  );
}