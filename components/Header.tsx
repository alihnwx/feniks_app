import Link from "next/link";

import { Logo } from "@/components/ui/Icons";

export default function Header() {
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
