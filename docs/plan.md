Plan: WinMix Tipster Pro Premium Design System Implementáció

A jelenlegi projekt már jó alapokkal rendelkezik, de több területen szükséges a finomítás a dokumentált design rendszer eléréséhez. A következő módosítások szükségesek:

1. Design Foundation (Alapvető Rendszer Frissítés)

General Sans font importálása és beállítása (jelenlegi Plus Jakarta Sans helyett) a Fontshare-ről
Brand lime szín módosítása CCFF00-ról BEF264-re (lime-400) és emerald-300 (#6EE7B7) hozzáadása másodlagos színként
Háttér színek finomítása: #030303 helyett #0A0A0A softer black használata
CSS custom property-k (design tokens) hozzáadása a teljes projekt egységes értékkezelésére
Tabular numbers beállítása a font-variant-numeric használatával minden számértékhez
Text wrapping finomítás: text-balance címekhez, text-pretty többsoros szövegekhez
2. Spatial UI és Glassmorphism Effektek

Glassmorphism implementálása minden kártyán: backdrop-filter blur(20px) + rgba background
Noise texture overlay hozzáadása a kártyákhoz (1-2% opacitással)
Kártya háttér gradient finomítása: linear-gradient 180deg irányban sötétebb-világosabb árnyalatokkal
Inner glow effekt hozzáadása: inset 0 1px 0 rgba(255,255,255,0.05)
Ambient background glow-k létrehozása: lebegő blur-3xl köröket lime-400/10 és sky-400/5 opacitással
Kártya border módosítása rgba(255,255,255,0.05) értékre jobb mélység érzékeléshez
3. Navigáció és Sidebar Fejlesztések

Sidebar aktív állapot újratervezése gradient háttérrel: linear-gradient jobbról balra lime fade-el
Bal oldali 3px vastag lime border hozzáadása aktív elemekhez
Glow shadow intenzitás növelése aktív elemeken: 0 0 40px rgba(190,242,100,0.15)
Hover állapot finomítása: rgba(190,255,0,0.08) háttérrel
Sidebar szélesség pontosítása: 256px expanded, 64px collapsed állapotban
Collapsible almenük vizuális javítása border-left separator-rel
4. AI Win Probability Panel Kiemelt Kezelés

Egyedi háttér gradient hozzáadása: purple(139,92,246) 0% és lime 100% között fade
Lassan mozgó shimmer animáció implementálása (10s infinite)
Perspective 3D hover effekt: rotateY(2deg) hover állapotnál
Confidence indikátor színkódolása: 70%+ lime glow, 40-70% amber, <40% rose
AI Thinking indikátor létrehozása animated shimmer effekttel
AI badge vizuális fejlesztése intenzívebb glow-val és animation-nel
5. Stat Card és Data Visualization Frissítések

Progress ring-ek gradient stroke beállítása: lime-emerald linear-gradient használatával
Drop-shadow filter hozzáadása a ring-ekhez: 0 0 8px rgba(190,255,0,0.5)
Animated stroke-dashoffset implementálása 1.2s ease-out timing-gel
Sparkline mini-chartsok hozzáadása minden stat kártya aljához (80x20px, lime gradient)
Hover transform finomítása: translateY(-4px) + shadow glow intenzifikálás
Progress bar-ok gradient fill módosítása: emerald-lime 90deg linear-gradient
6. Badge, Button és Interactive Elements

Live badge újratervezése: pulsing dot + uppercase label + neon border
Primary button glow intenzitás növelése hover-nél: 0 0 30px rgba(190,255,0,0.3)
Secondary button border hover animáció: lime border fade-in
Pill-shaped border-radius alkalmazása: 9999px minden button-nél
Badge font-size csökkentése 11px-re és letter-spacing növelése 0.1em-re
StatusDot komponens színes drop-shadow hozzáadása a láthatóság javításához
7. Match Visualizer és Live Elements

Team form indikátorok méretének növelése: 28x28px körök
Form indikátorok gradient fill implementálása: win, draw, loss különböző színátmenetekkel
Legutóbbi mérkőzés pulse animációja
Tooltip bővítése részletesebb mérkőzés adatokkal
Live időzítő font-variant-numeric: tabular-nums beállítása
Match center hero card ambient glow intenzitásának növelése
8. Chart és Graph Fejlesztések

Line chart gradient fill implementálása: rgba(190,255,0,0.4) 0% -> rgba(190,255,0,0.05) 100%
Neon glow stroke filter: drop-shadow(0 0 8px rgba(190,255,0,0.5))
Grid vonalak módosítása: csak horizontal vonalak, stroke-dasharray: 2,4
Data point hover scale növelése: transform: scale(1.5)
Axis label opacity csökkentése: 0.5 helyett 0.3
Chart container background subtle grid pattern hozzáadása
9. Animation és Transition Finomítás

Transition értékek egységesítése: 150ms fast, 250ms base, 350ms slow
Cubic-bezier easing hozzáadása: cubic-bezier(0.4, 0, 0.2, 1)
Counter animation implementálása a számértékekhez: 0 -> target érték typewriter effekttel
Stagger delay hozzáadása sequential animációkhoz: 0.3s per element
Real-time data update fade-in: 200ms ease
Score változás highlight effect: background flash lime color
10. Responsive és Mobile Optimalizáció

Breakpoint finomítás ellenőrzése: 640px, 768px, 1024px, 1280px, 1536px
Touch target minimum 44x44px biztosítása minden interaktív elemen
Bottom navigation bar hozzáadása mobile view-hoz
Swipe gesture támogatás stat card váltáshoz
Chart complexity csökkentése mobile nézetben
Collapsible sidebar hamburger menu finomítása
11. Typography és Text Hierarchy

Type scale implementálása clamp() függvényekkel responsive szövegméretekhez
Hero text (pontszámok): clamp(48px, 5vw, 72px)
Heading 1 (címek): clamp(32px, 4vw, 48px)
Letter-spacing finomítás: -0.5px címekhez, 0.18em uppercase labelekhez
Line-height konzisztencia: leading-relaxed (1.625) body texthez
Text contrast hierarchia: primary 100%, secondary 85%, tertiary 60%, muted 50%
12. Accessibility és Performance

Visible focus states minden interaktív elemre: 2px lime outline + offset
ARIA labels hozzáadása minden icon button-höz
Live region announcements implementálása score változásokhoz
Semantic HTML5 element-ek ellenőrzése és javítása
Kontraszt arányok tesztelése: minimum 7:1 text, 4.5:1 interactive
GPU-accelerated transforms használata: transform helyett translate3d ahol szükséges
Összegzés

A terv 12 szakaszban strukturálja a WinMix Tipster Pro frontend átdolgozását a prémium 2026-os design standard elérése érdekében. A fő hangsúly a glassmorphism spatial UI effekteken, a neon lime glow vizuális identitáson, az AI panel kiemelt kezelésén, valamint a tabular numbers és micro-interactions következetes implementálásán van.

A módosítások következetes, logikus sorrendben épülnek egymásra, kezdve az alapvető design token-ekkel és színrendszerrel, majd haladva a komponens szintű finomításokon át egészen az accessibility és performance optimalizációig.
Kritikus korrekciók:

Szín módosítás (1. pont) - Fordított az információ:

Jelenlegi: CCFF00
Design prompt javaslata: BEF264 (lime-400)
De a jelenlegi CCFF00 már hasonló, csak egy kicsit eltérő árnyalat
Font módosítás - Vigyázat szükséges:

General Sans licensz költségvetési probléma
Jobb alternatíva: megtartani a Plus Jakarta Sans-t (már megvan, működik)
Vagy: Inter vagy System Font fallback
Hiányzó összegzés - Az eredeti terv végén voltak kérdések:

Font alternatíva kiválasztása
Real-time data integrációs lehetőség
Dark/Light mode kérdés
Ezek nem szerepelnek az md fájlban.

Javításokat javaslom:

pont módosítása:

Brand lime szín finomítása (jelenlegi CCFF00 megtartása vagy BEF264-re módosítás)
és emerald-300 (#6EE7B7) hozzáadása másodlagos akcentként
Font pont módosítása:

Plus Jakarta Sans megtartása (vagy System Font fallback megvizsgálása)
és font súlyok pontosítása: 400, 500, 600, 700
Fájl végén záró rész hozzáadása az implementációs prioritások és kérdések listázásával.
Javaslatom: A terv strukturálisan jó, de ezek a módosítások szükségesek az implementáció előtt.