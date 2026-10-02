# Dianas Bridal Weekend

Vår gemensamma webbplats för helgen 21–22 november: schema, villan, budget, lekar, packlista och inköpslista.

Byggd med Next.js, TypeScript och Tailwind CSS. Ingen databas, ingen inloggning och inga API-nycklar. Sidan är helt statisk och gratis att hosta på Vercel.

---

## 1. Kör sidan lokalt

Du behöver [Node.js](https://nodejs.org) (version 20 eller senare).

```bash
npm install      # installerar allt (första gången)
npm run dev      # startar sidan på http://localhost:3000
npm run build    # testar att allt bygger korrekt innan du publicerar
```

---

## 2. Ändra innehåll

**Allt innehåll ligger i en enda fil: [`content/weekend.ts`](content/weekend.ts)**

Där finns tider, adresser, priser, lekar, packlistan och det vi köper in. Varje del har en kommentar som förklarar vad den gör.

Sidorna (Helgen, Villan, Budget, …) och deras ordning i menyn styrs av [`lib/pages.ts`](lib/pages.ts).

### Exempel: lägga till något på sidan Inköp

Under `shopping` finns en lista per kategori. Lägg bara till en rad:

```ts
items: ["Ljus / LED-ljus", "Blommor", "Konfetti"],
```

### Exempel: ändra ett pris

```ts
{ label: "Privatkock", min: 700, status: "toBook" },             // före
{ label: "Privatkock", min: 750, status: "booked" },             // efter
{ label: "Keramikmålning", min: 220, max: 500, status: "tbc" },  // spann: 220–500 kr
```

Summan räknas ut automatiskt.

### Statusord du kan använda

Sidan visar bara etiketter för det som inte är klart än, så att den inte blir rörig.

| Skriv         | Visas som                               |
| ------------- | --------------------------------------- |
| `"tbc"`       | TBC                                     |
| `"idea"`      | IDÉ                                     |
| `"toBook"`    | ATT BOKA                                |
| `"confirmed"` | ingen etikett (klart)                   |
| `"booked"`    | ingen etikett (BOKAT visas bara på villan) |

### Länkar (minnesformulär, bilduppladdning, Swish)

Längst upp i filen finns `links`:

```ts
web3formsKey: "xxxxxxxx-....",                        // minnesformuläret, se nedan
photoUpload: "https://www.dropbox.com/request/....",  // knappen på sidan Bilder & minnen
payment: "Swish 070-123 45 67",
```

Är en länk tom (`""`) visas en reservtext, t.ex. "Länken kommer snart".

### Adresser

Lägg till `address: "Gatan 1, Viksjö"` på en rad i schemat om adressen ska visas. Tänk på att sidan är öppen för alla som har länken.

---

## Bilduppladdning: få bilderna via Dropbox + mejl

Sidan **Bilder & minnen** har en knapp där alla kan ladda upp bilder med eller på Diana, utan konto eller inloggning. Det enklaste och gratis sättet är en **Dropbox-filförfrågan** ("File request"):

1. Skapa ett gratis konto på [dropbox.com](https://www.dropbox.com) (2 GB ingår).
2. Gå till **Filförfrågningar** (*File requests*): [dropbox.com/requests](https://www.dropbox.com/requests).
3. Klicka **Skapa förfrågan**, ge den ett namn (t.ex. "Bilder till Diana") och välj en mapp.
4. Kopiera länken du får (den börjar med `https://www.dropbox.com/request/`).
5. Klistra in den i `content/weekend.ts`:
   ```ts
   photoUpload: "https://www.dropbox.com/request/XXXXXXXX",
   ```
6. Pusha till GitHub. Nu fungerar knappen.

Den som laddar upp fyller bara i sitt namn och väljer bilderna. **Du får ett mejl** från Dropbox varje gång någon laddar upp, och bilderna hamnar i din Dropbox-mapp i full kvalitet. Ingen annan kan se de uppladdade bilderna.

Du kan också dela samma länk direkt i Snapchat, eller länka till sidan `/bilder` (t.ex. `dianas-bridal-weekend.vercel.app/bilder`).

---

## Minnesformuläret: få minnena på mejl (Web3Forms)

På sidan **Bilder & minnen** finns ett formulär där alla skriver sitt namn och ett minne med Diana (till leken Gissa minnet). Varje inskick kommer som ett **mejl** till dig via den gratis tjänsten [Web3Forms](https://web3forms.com) (250 inskick per månad).

Nyckeln är redan inlagd. Vill du byta mottagare:

1. Gå till [web3forms.com](https://web3forms.com), skriv in den mejladress som ska få minnena och klicka **Create Access Key**.
2. Nyckeln kommer på mejl. Klistra in den i `content/weekend.ts`:
   ```ts
   web3formsKey: "din-nya-nyckel",
   ```
3. Pusha till GitHub.

Tips: kolla skräpposten första gången, och markera mejlet som "inte skräp". Nyckeln är gjord för att synas publikt, men din mejladress syns aldrig på sajten.

---

## 3. Byta eller lägga till foton

Fotona ligger i [`public/villa/`](public/villa/).

1. Lägg den nya bilden i `public/villa/`, t.ex. `bastu.jpg`.
2. Öppna `content/weekend.ts` och importera den högst upp:
   ```ts
   import sauna from "@/public/villa/bastu.jpg";
   ```
3. Lägg till den i `villa.gallery`:
   ```ts
   { src: sauna, alt: "Bastun", caption: "Bastun", size: "small" },
   ```
   `size` kan vara `"large"`, `"tall"`, `"wide"` eller `"small"`.

Bilderna optimeras automatiskt (WebP/AVIF och rätt storlek för mobil).

Om du byter startbilden kan du skapa en ny förhandsbild för Snapchat/iMessage med `npm run og`.

---

## 4. Lägg upp koden på GitHub

1. Skapa ett konto på [github.com](https://github.com) om du inte har ett.
2. Klicka på **New repository**, döp det till t.ex. `dianas-bridal-weekend`, välj **Private** och klicka **Create repository**.
3. Kör i projektmappen:

```bash
git init
git add .
git commit -m "Dianas bridal weekend"
git branch -M main
git remote add origin https://github.com/DITT-ANVÄNDARNAMN/dianas-bridal-weekend.git
git push -u origin main
```

---

## 5. Publicera på Vercel (gratis)

1. Gå till [vercel.com](https://vercel.com) och logga in med ditt GitHub-konto.
2. Klicka **Add New… → Project**.
3. Välj repot `dianas-bridal-weekend` och klicka **Import**.
4. Ändra ingenting, utan klicka bara **Deploy**.
5. Efter ungefär en minut får du en länk, t.ex. `dianas-bridal-weekend.vercel.app`. Den kan du dela på Snapchat.

**Uppdateringar:** varje gång du ändrar något och kör

```bash
git add .
git commit -m "Uppdatera innehåll"
git push
```

publicerar Vercel den nya versionen automatiskt inom en minut.

Vill du ha en snyggare adress? I Vercel går du till **Settings → Domains** och byter namn på `.vercel.app`-adressen.

---

## Bra att veta

- Sidan är dold för Google och andra sökmotorer (`noindex, nofollow`), men alla som har länken kan öppna den. **Dela den inte med Diana.**
- Inget konto eller inloggning behövs för att besöka sidan.
- Inga miljövariabler eller inställningar behövs i Vercel.
