import Image from "next/image";

import { sponsorLogos } from "@/constants/sponsors";

export default function SponsorsMarquee() {
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
