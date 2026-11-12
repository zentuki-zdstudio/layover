# ✳ LAYOVER. — Your people, everywhere

> Meet somewhere. Stay connected everywhere.

**Mobilní webová PWA a produktový prototyp** pro lidi, kteří se potkali při cestování a chtějí zůstat ve spojení i po odjezdu z hostelu.

## Co už je v prototypu

- **Home:** osobní dashboard, kruhy, další destinace a vzpomínky.
- **Circles:** vytváření malých skupin kolem skutečného setkání, vlastní chat a fotografie.
- **Chats:** lokální ukázkové skupinové i soukromé konverzace.
- **Travel Radar:** filtrování ukázkových cestovatelů podle města a budoucích plánů.
- **Memory Wall:** fotografie přidané z telefonu (zmenšené a uložené lokálně), filtrování podle kruhu, srdíčka.
- **Meetups:** prohlížení, vlastní lokální události a označení zájmu.
- **My Passport:** úprava profilu a další destinace, export lokálních dat a reset.
- **PWA:** manifest, ikony a service worker pro základní offline fungování po návštěvě stránky.

**DŮLEŽITÉ:** Toto je **offline-first UI demo, ne skutečně provozovaná sociální síť**. Ukázkoví cestovatelé a události jsou fiktivní. Data se ukládají přes `localStorage` na jednom zařízení. Zprávy a fotografie se nikomu neposílají; ostatní je nevidí. Registrace, autentizace, skutečná sdílená data, platby a rezervace nejsou připojené.

## Spuštění na počítači

Bez frameworku, npm ani API klíče:

```bash
python3 -m http.server 8000
```

Otevři `http://localhost:8000`. Pro rychlý náhled je možné otevřít `index.html` i lokálně, ale PWA/service worker vyžaduje HTTPS nebo localhost.

## GitHub Pages — nasazení za pár kliknutí

1. Vytvoř nový **public** GitHub repozitář, například `layover`.
2. Nahraj **všechny soubory z této složky přímo do kořene repozitáře** (`index.html` musí být v rootu).
3. Otevři **Settings → Pages → Build and deployment**.
4. Zvol **Deploy from a branch**, větev `main`, složku `/(root)`, ulož.
5. Otevři `https://TVUJ-UCET.github.io/layover/` (nahraď uživatele a repo).
6. Na telefonu lze přes prohlížeč přidat web na plochu.

Případně z terminálu:

```bash
git init
git add .
git commit -m "feat: layover interactive concept"
git branch -M main
git remote add origin https://github.com/TVUJ-UCET/layover.git
git push -u origin main
```

Nedávej do GitHub repozitáře fotografie skutečných lidí bez souhlasu ani soukromé adresy, klíče nebo hesla. GitHub Pages je veřejná služba a není backend pro chat.

## Technická struktura

```text
index.html               — kostra aplikace
styles.css               — responzivní rozhraní
app.js                   — navigace, ukázková data a interakce
manifest.webmanifest     — instalace na domovskou obrazovku
sw.js                    — základní offline cache
assets/                  — ikona aplikace
PRODUCT.md               — positioning, monetizace, validace a roadmapa
```

## Jak z dema udělat reálnou aplikaci

**Doporučený v1 stack:** React + TypeScript + Vite (až při rozšiřování), Supabase Auth, Postgres s RLS, Supabase Realtime a Storage, GitHub Pages / Cloudflare Pages nebo Vercel pro frontend.

Pro první skutečný release implementovat v tomto pořadí:

1. **Auth, bezpečný profil, věkové hranice a ochrana osobních údajů**. Do veřejné aplikace nepouštět anonymní chat bez moderace.
2. **Soukromé kruhy a pozvánky**, ověřování členství v databázi. Uživatelské ID nesmí samo stačit ke čtení cizích zpráv.
3. **Realtime group chat + DM jen se souhlasem příjemce**, blokování, hlášení, limity proti spamu.
4. **Fotky jen do soukromých kruhů**, kontrola členství v RLS/storage, mazání obsahu, souhlas vyobrazených.
5. **Cestovní plány opt-in** a město, nikoliv přesná poloha. Nikdy nezobrazovat ubytování nebo live GPS.
6. **Eventy a tipy** až po zavedení pravidel věkově bezpečného setkávání, souhlasu hostitelů a moderace.
7. Teprve potom **partnerské rezervace, affiliate odkazy a placené funkce**, vždy transparentně označené.

**Bezpečnost:** Klíč `service_role` / secret key ze Supabase se nikdy nevkládá do JavaScriptu v prohlížeči. RLS je nezbytné; základní demo se nesmí zaměňovat za produkčně zabezpečený backend.

## Licence

MIT — viz `LICENSE`.
