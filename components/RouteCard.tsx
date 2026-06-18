export default function RouteCard() {
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
