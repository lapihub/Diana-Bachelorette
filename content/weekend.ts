/**
 * ============================================================
 *  DIANAS BRIDAL WEEKEND — ALL INNEHÅLL PÅ ETT STÄLLE
 * ============================================================
 *
 *  Allt som kan ändras ligger i den här filen: tider, adresser,
 *  priser, status, lekar och inköpslistan.
 *
 *  STATUS — använd något av dessa ord (inom citattecken):
 *    "confirmed"  → bekräftat   (visas inte, det är standard)
 *    "booked"     → BOKAT
 *    "toBook"     → ATT BOKA
 *    "tbc"        → TBC
 *    "idea"       → IDÉ
 *    "toBuy"      → att köpa    (visas inte i inköpslistan, det är standard)
 *    "done"       → klart       (visas överstruket i inköpslistan)
 *
 *  Exempel: ändra { label: "Ballonger", status: "toBuy" }
 *        till { label: "Ballonger", status: "done" }
 *  → spara, pusha till GitHub, så uppdateras sidan automatiskt.
 * ============================================================
 */

import type { StaticImageData } from "next/image";
import type { Status } from "@/lib/status";

import livingRoom from "@/public/villa/living-room.png";
import pool from "@/public/villa/pool.png";
import dinner from "@/public/villa/dinner.png";
import residence from "@/public/villa/residence.png";

/* ------------------------------------------------------------
 *  GRUNDINFO
 * ---------------------------------------------------------- */

export const event = {
  bride: "Diana",
  title: "Bridal Weekend",
  dateLabel: "21–22 november 2026",
  locationLabel: "Viksjö, Stockholm",
  intro:
    "Allt du behöver veta inför Dianas bridal weekend finns samlat här. Läs igenom, förbered dig och håll länken hemlig för bruden.",
};

/* ------------------------------------------------------------
 *  LÄNKAR
 *  Lämna tomt ("") om länken inte finns än – då visas en
 *  reservtext istället för en knapp.
 * ---------------------------------------------------------- */

export const links = {
  airbnb: "https://www.airbnb.se/rooms/1780669211066889679",
  /** Google Formulär för anonyma minnen till leken "Gissa minnet". */
  memoryForm: "",
  /**
   * Länk där alla kan ladda upp bilder utan konto, t.ex. en
   * Dropbox-filförfrågan (https://www.dropbox.com/request/...).
   * Se README.md för hur du skapar den.
   */
  photoUpload: "https://www.dropbox.com/request/oprff8k3x6n6snet3err",
  /** Swish-nummer eller annan betalinfo, t.ex. "Swish 070-123 45 67". */
  payment: "",
};

/* ------------------------------------------------------------
 *  VIKTIGA DATUM  (visas på startsidan)
 * ---------------------------------------------------------- */

export const paymentDeadline = {
  day: "11",
  month: "november",
  title: "Sista dag för betalning",
  description: "Alla betalningar för Airbnb ska vara inne senast den här dagen.",
};

export const cancellationDeadline = {
  day: "20",
  month: "november",
  title: "Sista avbokningsdag för Airbnb",
};

/* ------------------------------------------------------------
 *  SCHEMA
 *  Preliminärt. Ändra tider/platser när de är bestämda.
 *  address: lägg till en adress om den ska visas på sidan.
 * ---------------------------------------------------------- */

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  location?: string;
  address?: string;
  status: Status;
};

export type ScheduleDay = {
  label: string;
  date: string;
  items: ScheduleItem[];
};

export const schedule: ScheduleDay[] = [
  {
    label: "Lördag",
    date: "21 november",
    items: [
      {
        time: "10:15",
        title: "Överraskningen börjar",
        description: "Diana vet ingenting. Vi samlas i tid så att vi är på plats när hon förs dit.",
        status: "confirmed",
      },
      {
        time: "ca 10:30",
        title: "Frukost hos Dianas föräldrar",
        description: "En långsam frukost/brunch innan dagen drar igång.",
        location: "Gillsätragränd 46 - Skärholmen",
        status: "confirmed",
      },
      {
        time: "12:45",
        title: "Keramikmålning",
        description: "Vi målar varsin keramikpjäs som minne från dagen.",
        location: "Webloom Ceramics - Norrtullsgatan 31",
        status: "tbc",
      },
      {
        time: "15:00",
        title: "Incheckning i villan",
        description: "Vi checkar in i Viksjö och gör i ordning dekorationerna innan kvällen.",
        location: "Airbnb",
        status: "confirmed",
      },
      {
        time: "16:00",
        title: "Bubbel & förberedelser",
        description: "Lite häng, bubbel och förberedelser för kvällen. Diana byter om till sin vita kvällsoutfit.",
        status: "tbc",
      },
      {
        time: "ca 19:00",
        title: "Middag med privatkock",
        description: "En privatkock lagar middag åt oss i villan. Under middagen kör vi flera av lekarna.",
        status: "toBook",
      },
      {
        time: "sent",
        title: "Pool After Dark",
        description: "Levande ljus, poolen och en lugnare stund tillsammans.",
        status: "confirmed",
      },
    ],
  },
  {
    label: "Söndag",
    date: "22 november",
    items: [
      {
        time: "ca 09:30",
        title: "Söndagsfrukost",
        description: "Frukost tillsammans i villan.",
        status: "confirmed",
      },
      {
        time: "11:00",
        title: "Utcheckning",
        description: "Vi packar, städar av och lämnar villan.",
        status: "confirmed",
      },
    ],
  },
];

/* ------------------------------------------------------------
 *  TRANSPORT
 * ---------------------------------------------------------- */

export const transport: { title: string; text: string; status: Status }[] = [
  {
    title: "Under lördagen",
    text: "Bolt/Uber eller samåkning mellan frukosten, keramiken och villan. Vi delar på kostnaden.",
    status: "tbc",
  },
  {
    title: "Till villan",
    text: "Viksjö ligger i Järfälla, ungefär 25–30 minuter med bil från Stockholm city.",
    status: "confirmed",
  },
  {
    title: "Hem på söndag",
    text: "Utcheckning 11:00. Samåkning, Bolt eller kollektivtrafik från Jakobsberg.",
    status: "tbc",
  },
];

/* ------------------------------------------------------------
 *  VILLAN
 * ---------------------------------------------------------- */

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
  /** Hur stor bilden ska vara i galleriet. */
  size: "large" | "tall" | "wide" | "small";
};

export const villa = {
  host: "Noblet",
  location: "Viksjö, Stockholm",
  checkIn: "Lördag 15:00",
  checkOut: "Söndag 11:00",
  status: "booked" as Status,
  description:
    "Ett klassiskt rött hus vid vattnet utanför Stockholm, med inomhuspool, bastu och stora, ljusa sällskapsrum.",
  heroImage: livingRoom,
  poolImage: pool,
  amenities: ["Inomhuspool", "Bastu", "Gym", "Stora sällskapsytor", "Matsal", "Kök", "Övernattning"],
  /** Tjänster som Noblet erbjuder via huset. */
  services: [
    { title: "Privatkock", text: "Vår plan för lördagsmiddagen.", status: "toBook" as Status },
    { title: "Catering", text: "Möjligt alternativ.", status: "idea" as Status },
    { title: "Eventplanering", text: "Hjälp med upplägg och dukning.", status: "idea" as Status },
  ],
  gallery: [
    {
      src: livingRoom,
      alt: "Vardagsrum med kristallkrona, guldram-spegel och ljusa soffor",
      caption: "Salongen",
      size: "large",
    },
    {
      src: pool,
      alt: "Inomhuspool med stenplattor och trappor ner i vattnet",
      caption: "Inomhuspoolen",
      size: "tall",
    },
    {
      src: dinner,
      alt: "Matsal med långbord och bentwood-stolar framför stora fönster",
      caption: "Matsalen",
      size: "wide",
    },
    {
      src: residence,
      alt: "Rött trähus med vita knutar vid sjön en sommardag",
      caption: "Huset vid vattnet",
      size: "wide",
    },
  ] satisfies GalleryImage[],
};

/* ------------------------------------------------------------
 *  BUDGET  (kr per person)
 *  max används när priset är ett spann, t.ex. 220–500.
 * ---------------------------------------------------------- */

export type BudgetItem = {
  label: string;
  min: number;
  max?: number;
  status: Status;
};

export const budget = {
  items: [
    { label: "Frukost hos Dianas föräldrar", min: 160, status: "confirmed" },
    { label: "Keramikmålning", min: 220, max: 500, status: "tbc" },
    { label: "Airbnb", min: 900, status: "booked" },
    { label: "Privatkock", min: 700, status: "toBook" },
    { label: "Dekorationer", min: 150, status: "confirmed" },
    { label: "Söndagsfrukost", min: 150, status: "confirmed" },
  ] satisfies BudgetItem[],
  extras: ["transport", "dryck", "snacks", "Dianas outfit", "scrapbook", "Diana Museum", "eventuell spa-present"],
  estimate: "ca 2 500–3 000 kr",
  dianaNote: "Diana betalar ingenting. Hennes andel delas av oss andra.",
};

/* ------------------------------------------------------------
 *  DRESSCODE & PACKLISTA
 * ---------------------------------------------------------- */

export const dressCode: { title: string; text: string; status?: Status }[] = [
  { title: "Dagtid", text: "Bekvämt och snyggt. Keramikfärg kan stänka, så ta inte ditt finaste plagg." },
  {
    title: "Kvällen",
    text: "Elegant middag - tänk er 'Black tie'.",
    status: "tbc",
  },
  { title: "Bruden", text: "Diana bär vitt. Vi står för outfiten och packar den i hemlighet." },
];

export const packingList: string[] = [
  "Baddräkt eller bikini",
  "Kvällsoutfit",
  "Bekväma kläder för dagen",
  "Mjukiskläder & nattkläder",
  "Morgonrock & tofflor",
  "Kläder till söndagen",
  "Smink, hårprodukter & locktång",
  "Necessär & mediciner",
  "Mobilladdare",
  "Varm jacka",
];

/* ------------------------------------------------------------
 *  SKICKA BILDER  (sidan /bilder)
 * ---------------------------------------------------------- */

export const photos = {
  /** T.ex. "1 november". Tomt = visas inte. */
  deadline: "",
  wanted: [
    { title: "Diana som barn & tonåring", text: "Till leken Hur gammal var bruden? och Diana Museum." },
    { title: "Du och Diana", text: "1–3 favoriter till scrapbooken." },
    { title: "Roliga minnen", text: "Skärmdumpar, biljetter, gamla looks och annat till museet." },
  ],
};

/* ------------------------------------------------------------
 *  LEKAR
 *  submit: "memoryForm" visar knapp till formuläret,
 *          "photos" visar knapp till sidan Skicka bilder.
 * ---------------------------------------------------------- */

export type Game = {
  number: string;
  title: string;
  /** När leken körs under dagen. */
  when: string;
  intro: string;
  steps?: string[];
  listTitle?: string;
  list?: string[];
  needed: string[];
  submit?: "memoryForm" | "photos";
};

export const games: Game[] = [
  {
    number: "I",
    title: "Hur gammal var bruden?",
    when: "Under kvällen",
    intro:
      "Vi visar foton på Diana i olika åldrar, utan att avslöja hur gammal hon var. Alla gissar, och sedan avslöjar Diana svaren.",
    needed: ["Gamla foton på Diana", "Utskrivna foton eller en digital presentation", "Svarslappar & pennor"],
    submit: "photos",
  },
  {
    number: "II",
    title: "The Ara Tapes",
    when: "Under middagen",
    intro:
      "Innan helgen svarar Ara i hemlighet på frågor om Diana och deras relation, och svaren spelas in på video. Diana får samma fråga, svarar, och sedan spelar vi upp Aras svar. Matchar de?",
    listTitle: "Förslag på frågor",
    list: [
      "Vad var ditt första intryck av Diana?",
      "Vilken fras säger Diana oftast?",
      "Vilken mat skulle Diana kunna äta för alltid?",
      "Vem sa ”Jag älskar dig” först?",
      "Vad blir Diana mest irriterad på?",
      "Vilken är Dianas roligaste vana?",
      "Vilket är ditt favoritminne tillsammans?",
      "Vad tror du att Diana älskar mest med dig?",
      "Var ser ni er själva om tio år?",
    ],
    needed: ["Färdiga frågor", "Aras videor inspelade", "Laptop / TV / AirPlay testat"],
  },
  {
    number: "III",
    title: "Gissa minnet",
    when: "Under kvällen",
    intro:
      "Innan helgen skickar alla in ETT minne med Diana, anonymt. Under kvällen läser Diana upp dem ett i taget och gissar vem som skrev vilket. Var specifik och gärna rolig, och gör det klurigt att gissa.",
    needed: ["Ett anonymt minne från varje gäst"],
    submit: "memoryForm",
  },
  {
    number: "IV",
    title: "Hemliga uppdrag",
    when: "Hela dagen",
    intro:
      "Alla får ett hemligt uppdrag på morgonen som ska genomföras utan att Diana märker något. Efter middagen avslöjar alla sina uppdrag, och Diana gissar vad var och en försökte göra.",
    needed: ["12–13 unika uppdrag", "Utskrivna uppdragskort i kuvert"],
  },
  {
    number: "V",
    title: "Vem är mest trolig — Men Edition",
    when: "Efter middagen",
    intro:
      "En lekfull grupplek om relationer, män, dejting och livet som gift. Alla pekar samtidigt på tre.",
    listTitle: "Vem är mest trolig att …",
    list: [
      "… ha en partner som inte hittar något i kylen, fast det står längst fram?",
      "… ha sagt ”vi tittar bara” i en möbelbutik och kommit hem med en soffa?",
      "… vara den som planerar alla resor?",
      "… ha en partner som säger ”jag är snart hemma” men inte ens har gått än?",
      "… ha förnyat sin partners garderob utan att han märkt det?",
      "… vinna en diskussion utan att egentligen ha rätt?",
      "… få sin partner att gråta under bröllopstalet?",
      "… ha blivit uppraggad på det mest oromantiska stället?",
      "… ha en partner som ringer sin mamma för att fråga om råd?",
      "… gifta sig näst?",
      "… ha sparat varenda meddelande från första dejten?",
      "… låta sin partner tro att det var hans idé?",
    ],
    needed: ["Färdiga påståenden"],
  },
  {
    number: "VI",
    title: "The Diana Files",
    when: "Pool After Dark",
    intro: "En lugnare lek vid poolen. Alla svarar på frågor om Diana, både roliga och sådana som betyder något.",
    listTitle: "Frågorna",
    list: [
      "Vilket är ditt första minne av Diana?",
      "Vad är det mest Diana-iga Diana gör?",
      "Vilken Diana-era är din favorit?",
      "Vilken låt får dig att tänka på Diana?",
      "Vad kommer garanterat vara likadant med Diana när hon är 70?",
      "Vad är Diana bättre på än hon själv inser?",
      "Vart borde hela gruppen resa tillsammans en dag?",
      "Vilken dokusåpa skulle Diana överleva längst i?",
      "Vad gör Diana och Ara en vanlig lördag om 15 år?",
    ],
    needed: ["Frågekort", "Levande ljus vid poolen"],
  },
];

/* ------------------------------------------------------------
 *  TILL DIANA, MED KÄRLEK
 * ---------------------------------------------------------- */

export const forDiana = {
  scrapbook: {
    title: "Scrapbooken",
    status: "tbc" as Status,
    text: "En bok fylld med oss, som sätts ihop innan helgen och ges till Diana. Alla bidrar med 1–3 foton och ett personligt brev.",
  },
  museum: {
    title: "Diana Museum",
    status: "idea" as Status,
    text: "En hörna i villan med bitar ur Dianas liv, som en liten utställning hon går runt i: foton, skärmdumpar, gamla meddelanden, biljetter, citat och handskrivna minnen.",
    rooms: ["De tidiga åren", "Tonårsarkivet", "Vänskapsåren", "Diana & Ara", "Brud-eran"],
  },
  spa: {
    title: "Spa-present",
    status: "idea" as Status,
    text: "En spabehandling eller massage till Diana som gruppgåva.",
  },
};

/* ------------------------------------------------------------
 *  INKÖPSLISTA
 *  Byt status till "done" när något är köpt/klart.
 * ---------------------------------------------------------- */

export type ChecklistItem = { label: string; status: Status };
export type ChecklistCategory = { title: string; items: ChecklistItem[] };

export const checklist: ChecklistCategory[] = [
  {
    title: "Dekoration",
    items: [
      { label: "Ballonger", status: "toBuy" },
      { label: "Ljus / LED-ljus", status: "toBuy" },
      { label: "Blommor", status: "toBuy" },
      { label: "Bordsdekoration", status: "toBuy" },
      { label: "Utskrivna foton", status: "toBuy" },
      { label: "Brud-dekorationer", status: "toBuy" },
      { label: "Serveringsartiklar vid behov", status: "tbc" },
    ],
  },
  {
    title: "Middag & kväll",
    items: [
      { label: "Champagne / mousserande", status: "toBuy" },
      { label: "Alkoholfritt bubbel", status: "toBuy" },
      { label: "Vin", status: "toBuy" },
      { label: "Ingredienser till drinkar", status: "toBuy" },
      { label: "Läsk", status: "toBuy" },
      { label: "Vatten", status: "toBuy" },
      { label: "Is", status: "toBuy" },
      { label: "Nattmacka & snacks", status: "toBuy" },
      { label: "Snacks vid poolen", status: "toBuy" },
    ],
  },
  {
    title: "Lördagsfrukost",
    items: [
      { label: "Frukostmat", status: "toBuy" },
      { label: "Kaffe", status: "toBuy" },
      { label: "Juice", status: "toBuy" },
      { label: "Frukt", status: "toBuy" },
      { label: "Champagne / alkoholfritt", status: "toBuy" },
    ],
  },
  {
    title: "Söndagsfrukost",
    items: [
      { label: "Bröd", status: "toBuy" },
      { label: "Pålägg", status: "toBuy" },
      { label: "Ägg / frukostartiklar", status: "toBuy" },
      { label: "Frukt", status: "toBuy" },
      { label: "Juice", status: "toBuy" },
      { label: "Kaffe", status: "toBuy" },
    ],
  },
  {
    title: "Lekar",
    items: [
      { label: "Utskrivna foton på Diana", status: "toBuy" },
      { label: "Pennor", status: "toBuy" },
      { label: "Papper / kort", status: "toBuy" },
      { label: "Kuvert till hemliga uppdrag", status: "toBuy" },
      { label: "Aras videor", status: "tbc" },
      { label: "Bidrag till Gissa minnet", status: "tbc" },
      { label: "Laptop / HDMI / AirPlay", status: "tbc" },
    ],
  },
  {
    title: "Bruden",
    items: [
      { label: "Vit kvällsoutfit", status: "toBuy" },
      { label: "Brud-accessoarer", status: "toBuy" },
      { label: "Hemlig packlista för Diana", status: "tbc" },
    ],
  },
  {
    title: "Minnen",
    items: [
      { label: "Scrapbook", status: "toBuy" },
      { label: "Utskrivna fotografier", status: "toBuy" },
      { label: "Brev från alla", status: "tbc" },
      { label: "Material till Diana Museum", status: "idea" },
    ],
  },
  {
    title: "Möjlig gruppgåva",
    items: [{ label: "Spabehandling / massage till Diana", status: "idea" }],
  },
];
