import { ClockIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <div className="contact-left">
            <h2>Готовы обсудить вашу перевозку?</h2>
            <p>
              Позвоните нам — рассчитаем маршрут, сроки и стоимость доставки в
              течение дня.
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
