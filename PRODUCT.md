# LAYOVER — product strategy v0.1

## Shrnutí

**Problém:** Lidé se v hostelu snadno seznámí, ale po odjezdu se skupiny rozpadají a kontakty se ztrácejí. Jedna společná skupina navíc není vhodná pro lidi, kteří se navzájem nikdy nepotkali.

**Neprodáváme obecný cestovatelský chat.** Stavíme *persistent social graph from real encounters*: malé soukromé kruhy, kde setkání vzniklo, archiv společných vzpomínek a opt-in přehled, jestli bude někdo ze známých ve stejném městě.

### USP

„The people you meet become a map of places where you know someone.“

Dlouhodobé propojení konkrétních lidí **po checkoutu**, nikoli nekonečný feed cizinců. Hostelworld má už dnes city chat, hostel chat, soukromé zprávy, eventy a cestovní plány, takže samotné kopírování funkcí není výhoda.

## Funkce podle důležitosti

**P0 — ověřit potřebu:**

- Circles vytvořené prostřednictvím vzájemného souhlasu / QR pozvánky.
- Historie skupiny a společné fotografie.
- Volitelné cestovní plány a upozornění „někdo z tvých známých bude ve městě“.
- Soukromí, mazání účtu, blokování, reportování.

**P1 — síťová hodnota:**

- „Ask your circle“ — dotaz na tipy ve městě, doručený pouze lidem, kteří chtějí radit.
- „Warm introduction“ — dva lidé ze dvou kruhů se mohou propojit **jen se souhlasem obou**.
- Společná cestovní timeline/kapsle: fotka, název města, krátká vzpomínka, žádné automatické GPS.
- Invite card a QR pro osobní setkání.

**P2 — podnikání:**

- Kurátorované lokální tipy a partnerské podniky.
- Skupinové procházky a zážitky pořádané ověřenými hostiteli.
- Hostel dashboard jako doplněk stávajících systémů (nevytvářet další booking engine).
- Rezervační a affiliate integrace.

**Zatím nedělat:** komplexní globální feed, AI itineráře bez unikátního datasetu, vlastní mapový engine, katalog hostelů, platby v MVP, masový seznam „lidi kolem mě“ s GPS.

## Monetizace — pořadí

1. **Lokální partnerské zážitky**: provize z prodeje veřejných skupinových tour, kulturních aktivit, jízdenek nebo workshopů. Affiliate platformy mají již infrastrukturu pro tracking, vyúčtování a vracení peněz. Příklad: Viator uvádí 8 % provizi z kvalifikovaných dokončených rezervací; GetYourGuide uvádí základní provizi 8 % pro nové partnery. Podmínky a oprávněnost je nutné ověřit při registraci.
2. **Cafés / food venues**: unikátní kód pro prokazatelně uplatněnou návštěvu, např. paušál za nového zákazníka nebo placené sponzorované doporučení. Veřejně označit jako reklamu, neobjednávat ani nesledovat útratu uživatelů bez souhlasu.
3. **Hostel B2B**: nástroj pro uchování komunity hostelu *po pobytu*, fotoalba a společné zážitky. Hypotetický pilotní ceník 499–1 499 Kč / hostel / měsíc. Nezačínat prodejem bez dat z pilotu.
4. **Community host experiences**: skupinové city walks a aktivity s transparentní cenou a jasně určeným pořadatelem. Uživatelé musí vědět, kdo nese odpovědnost; při účasti mladších osob přísná bezpečnostní pravidla.
5. **Obsah (IG / YouTube / Shorts)**: autentické příběhy o navazování cestovatelských přátelství, 30sekundové tipy od lokálních lidí, portréty dobrovolných účastníků. Je to marketingový akviziční kanál, nikoli předpokládaný rychlý zdroj peněz.

**Ilustrační scénáře, nikoliv prognóza:** 10 hostelů × 699 Kč/měsíc = 6 990 Kč hrubých měsíčních tržeb. Nebo 20 dokončených rezervací zážitku za 500 Kč s 8% provizí = 800 Kč hrubé provize. Před náklady, vrácením peněz a daněmi.

## Go-to-market: Praha → další města

**První týden:** používat UI demo k interview, ne k veřejnému sběru osobních údajů. Zeptat se 8–12 lidí, co používají nyní, zda opravdu ztratili kontakt, zda by si zapsali další destinaci, co by odmítali sdílet. Nezískávat soukromé fotografie bez svolení.

**První pilot po zabezpečení backendu:** jedna dobrovolná skupina s pozvánkami, 2–3 kruhy, 2 týdny používání. Měřit přidané kontakty a **retenci po checkoutu**, ne vanity počty registrací.

**North star:** počet dvojic, které měly skutečné setkání a po 30 dnech spolu dobrovolně znovu komunikovaly.

**Praktické signály:**
- 50 % pozvaných v pilotu dobrovolně dokončí vstup do kruhu.
- 25 % účastníků se vrátí ke kruhu po odjezdu z města.
- Aspoň 3 skutečné užitečné příběhy typu „pomohl mi někdo, koho jsem poznal v jiné zemi“.

Čísla výše jsou **navržené prahy pro testování hypotéz**, nikoli výsledky výzkumu.

## Rizika

- **Cold start:** cestovatel si nemusí instalovat další appku kvůli jednomu kontaktu. Proto web/PWA a QR, minimum klikání.
- **Hostelworld:** velmi silný konkurent se základními sociálními funkcemi. Diferenciace musí být v retenci *mimo konkrétní hostel a mimo právě navštěvované město*.
- **Ochrana lidí:** mladší cestovatelé, veřejně sdílené fotografie, spam, obtěžování a nebezpečná osobní setkání. Veřejné spuštění vyžaduje věkově vhodné režimy, blokování, nahlašování, moderaci, přístupová práva a transparentní pravidla.
- **GDPR:** minimalizovat data, jasná oprávnění, právo smazání a exportu; v Česku je hranice samostatného souhlasu dítěte pro vybrané online služby 15 let. V případě globální služby řešit pravidla podle jurisdikce.
- **Ekonomika:** provize nevzniká kliknutím ani návštěvou. Měřit dokončené a skutečně zaplacené transakce.

## Technický další krok

GitHub Pages hostuje statický frontend, nikoliv databázi ani serverový chat. Pro produkční v1 použít Supabase Auth, Postgres s RLS, Realtime a neveřejný Storage. Všechny přístupy ověřovat na serveru, ne jen ve frontend UI. Opatřit službu moderací, věkově vhodným přístupem a samostatnými pravidly pro obsah.

## Veřejné zdroje (stav listopad 2026)

- Hostelworld Social: https://social.hostelworld.com/
- Hostelworld Social Pass: https://www.hostelworld.com/blog/hostelworld-social-pass-the-social-app-no-booking-required/
- Backpackr: https://backpackr.org/
- GAFFL: https://www.gogaffl.com/
- Travello: https://play.google.com/store/apps/details?id=com.outbound
- Viator Creator Affiliate: https://partnerresources.viator.com/creator/
- GetYourGuide Affiliate: https://partner.getyourguide.support/hc/en-us/articles/23082933149981-How-to-get-started-with-the-Affiliate-Program-as-a-Creator
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security
- Český ÚOOÚ: https://uoou.gov.cz/index.php/verejnost/zakladni-prirucka-k-ochrane-udaju
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages
