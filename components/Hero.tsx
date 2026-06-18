import Link from "next/link";

import RouteCard from "@/components/RouteCard";

export default function Hero() {
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
                Позвонить нам →
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
