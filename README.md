Статичный сайт для ИП "Феникс" 

Сделан на Next.js

Структура папок: 
app: 
    - globals.css – все стили css
    - page.tsx – главная страница

components:
    - Header.tsx
    - Hero.tsx 
    - RouteCard.tsx
    - Values.tsx
    - Services.tsx 
    - StatsBanner.tsx
    - Contact.tsx
    - SponsorsMarquee.tsx
    - Footer.tsx

constants:
    - sponsors.ts (массив спонсоров для SponsorsMarquee.tsx)
 
public
    - background_image (фоновые изображения)
    - sponsor_logos (лого спонсоров для SponsorsMarquee и sponsors.ts)