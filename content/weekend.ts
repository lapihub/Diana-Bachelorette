/**
 * ============================================================
 *  DIANAS BRIDAL WEEKEND — ALL INNEHÅLL PÅ ETT STÄLLE
 * ============================================================
 *
 *  Allt som kan ändras ligger i den här filen: tider, adresser,
 *  priser, status, lekar och inköpen.
 *
 *  STATUS — använd något av dessa ord (inom citattecken):
 *    "confirmed"  → bekräftat   (visas inte, det är standard)
 *    "booked"     → BOKAT       (visas bara på boendesidan)
 *    "toBook"     → ATT BOKA
 *    "tbc"        → TBC
 *    "idea"       → IDÉ
 *
 *  Ändra, spara, pusha till GitHub, så uppdateras sidan automatiskt.
 * ============================================================
 */

import type { StaticImageData } from "next/image";
import type { Status } from "@/lib/status";

import livingRoom from "@/app/bilder/vardagsrum.avif";
import livingRoomDetail from "@/app/bilder/vardagsrum-2.avif";
import kitchen from "@/app/bilder/kök.avif";
import bedroom from "@/app/bilder/sovrum.avif";
import balcony from "@/app/bilder/balkong.avif";
import residence from "@/app/bilder/lägenhet.webp";
import kitchenHero from "@/public/villa/kitchen-hero.png";

/* ------------------------------------------------------------
 *  GRUNDINFO
 * ---------------------------------------------------------- */

export const event = {
  bride: "Diana",
  title: "Bridal Weekend",
  dateLabel: "21–22 november 2026",
  locationLabel: "Huvudsta, Solna",
  intro:
    "Allt du behöver veta inför Dianas bridal weekend finns samlat här. Läs igenom, förbered dig och håll länken hemlig för bruden.",
};

/* ------------------------------------------------------------
 *  LÄNKAR
 *  Lämna tomt ("") om länken inte finns än – då visas en
 *  reservtext istället för en knapp.
 * ---------------------------------------------------------- */

export const links = {
  airbnb: "https://www.airbnb.se/rooms/574282927737091311",
  map: "https://www.google.com/maps/search/?api=1&query=Karlbergs+strand+15%2C+171+73+Solna",
  /**
   * Nyckel till minnesformuläret (Web3Forms). Varje inskickat minne
   * kommer som ett mejl. Ny nyckel skapas gratis på web3forms.com.
   * Nyckeln är gjord för att ligga publikt på sajten.
   */
  web3formsKey: "8f02526f-5df1-4305-90e4-e7cac70e911b",
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
 *  BETALNING  (visas på sidan Budget)
 * ---------------------------------------------------------- */

export const paymentDeadline = {
  day: "11",
  month: "november",
  title: "Sista dag för betalning",
  description: "Alla betalningar för Airbnb ska vara inne senast den här dagen.",
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
        status: "booked",
      },
      {
        time: "15:00",
        title: "Escape room",
        description: "Vi löser kluriga gåtor och försöker ta oss ut tillsammans.",
        location: "Amazing Escape",
        address: "Markvardsgatan 10",
        status: "booked",
      },
      {
        time: "från 16:00",
        title: "Incheckning i lägenheten",
        description: "Vi checkar in i Huvudsta och gör i ordning dekorationerna innan kvällen.",
        location: "Karlbergs strand 15, 171 73 Solna",
        status: "confirmed",
      },
      {
        time: "ca 16:30",
        title: "Bubbel & förberedelser",
        description: "Lite häng, bubbel och förberedelser för kvällen. Diana byter om till sin vita kvällsoutfit.",
        status: "tbc",
      },
      {
        time: "ca 19:00",
        title: "Libanesisk catering",
        description: "Vi beställer in libanesisk catering som levereras till lägenheten och äter middag tillsammans där.",
        status: "toBook",
      },
      {
        time: "sent",
        title: "Kvällsaktiviteter",
        description: "Efter middagen fortsätter kvällen i lägenheten med lekar, presentationer, musik, snacks och häng tillsammans.",
        status: "confirmed",
      },
    ],
  },
  {
    label: "Söndag",
    date: "22 november",
    items: [
      {
        time: "09:00",
        title: "Söndagsfrukost",
        description: "Frukost tillsammans i lägenheten innan vi packar ihop.",
        status: "confirmed",
      },
      {
        time: "10:00",
        title: "Utcheckning",
        description: "Vi packar, städar av och lämnar lägenheten.",
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
    text: "Bolt/Uber eller samåkning mellan frukosten, keramikmålningen, Escape room och lägenheten. Vi delar på kostnaden och bestämmer upplägget tillsammans.",
    status: "tbc",
  },
  {
    title: "Till vårt boende",
    text: "Vi bor på Karlbergs strand 15, 171 73 Solna, i Huvudsta vid vattnet. Incheckning lördag från 16:00. Öppna kartlänken för att se adressen.",
    status: "confirmed",
  },
  {
    title: "Hem på söndag",
    text: "Utcheckning 10:00 från lägenheten i Huvudsta. Samåkning, Bolt/Uber eller kollektivtrafik. Vi bestämmer hemresan tillsammans.",
    status: "tbc",
  },
];

/* ------------------------------------------------------------
 *  VÅRT HEM
 * ---------------------------------------------------------- */

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
  /** Hur stor bilden ska vara i galleriet. */
  size: "large" | "tall" | "wide" | "small";
};

export const villa = {
  host: "Patrik",
  location: "Huvudsta, Solna",
  address: "Karlbergs strand 15, 171 73 Solna",
  checkIn: "Lördag från 16:00",
  checkOut: "Söndag 10:00",
  status: "booked" as Status,
  description:
    "Vårt hem för natten är en nyrenoverad, historisk lägenhet i en villa från 1878 vid vattnet i Huvudsta. Här möts 1800-talets charm och ljusa rum, med kök och balkong med sjöutsikt – vår samlingspunkt för libanesisk catering, lekar och kvällshäng.",
  heroImage: kitchenHero,
  amenities: ["Balkong med sjöutsikt", "Två sovrum", "Vardagsrum", "Kök & matplats", "Wifi", "Badrum"],
  area: "Karlbergs strand ligger vid vattnet i Huvudsta, Solna. Här möts äldre hus, grönska och strandpromenader nära Stockholm. Efter middagen samlas vi i lägenheten för lekar och en mysig kväll tillsammans.",
  gallery: [
    {
      src: livingRoom,
      alt: "Vardagsrummet i lägenheten vid Karlbergs strand",
      caption: "Vårt vardagsrum",
      size: "large",
    },
    {
      src: residence,
      alt: "Gul trävilla med gröna detaljer och grönska vid Karlbergs strand",
      caption: "Huset vid Karlbergs strand",
      size: "tall",
    },
    {
      src: balcony,
      alt: "Lägenhetens balkong med utsikt mot vattnet",
      caption: "Balkongen & utsikten",
      size: "wide",
    },
    {
      src: kitchen,
      alt: "Köket i lägenheten",
      caption: "Kök & frukosthäng",
      size: "wide",
    },
    {
      src: bedroom,
      alt: "Sovrummet i lägenheten",
      caption: "God natt i Huvudsta",
      size: "wide",
    },
    {
      src: livingRoomDetail,
      alt: "En annan vy av lägenhetens vardagsrum",
      caption: "Plats för kvällens lekar",
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
  approximate?: boolean;
  status: Status;
};

export const budget = {
  items: [
    { label: "Frukost hos Dianas föräldrar", min: 100, status: "confirmed" },
    { label: "Keramikmålning", min: 220, max: 500, status: "booked" },
    { label: "Escape room", min: 385, status: "booked" },
    { label: "Boende", min: 615, status: "booked" },
    { label: "Libanesisk catering", min: 500, approximate: true, status: "toBook" },
    { label: "Dekorationer", min: 100, max: 200, status: "confirmed" },
    { label: "Kvällssnacks + Söndagsfrukost", min: 100, status: "confirmed" },
  ] as BudgetItem[],
  extras: ["transport", "Dianas outfit"],
  dianaNote: "Diana betalar ingenting. Hennes andel delas av oss andra.",
};

/* ------------------------------------------------------------
 *  DRESSCODE & PACKLISTA
 * ---------------------------------------------------------- */

/** Visas som en stämpel i hörnet: "Dresscode: SVART". */
export const dressCodeColor = "Svart";

export const dressCode: { title: string; text: string; status?: Status }[] = [
  { title: "Dagtid", text: "Bekvämt och snyggt i svart. Keramikfärg kan stänka, så ta inte ditt finaste plagg." },
  { title: "Kvällen", text: "Elegant middag i svart, tänk black tie." },
  { title: "Bruden", text: "Diana bär vitt hela dagen. Vi står för outfiten och packar den i hemlighet." },
];

export const packingList: string[] = [
  "Kvällsoutfit",
  "Bekväma kläder för dagen",
  "Mjukiskläder & nattkläder",
  "Sovmask & öronproppar",
  "Hår- & kroppsprodukter",
  "Smink & hudvård",
  "Mediciner",
  "Mobilladdare / Elektronik",
  "Varm jacka",
];

/* ------------------------------------------------------------
 *  BILDER & MINNEN  (sidan /bilder)
 * ---------------------------------------------------------- */

export const photos = {
  /** T.ex. "1 november". Tomt = visas inte. */
  deadline: "",
  intro:
    "Det finns ingen gräns. Skicka allt ni har med Diana: gamla, nya, fina, kaos, screenshots.",
  wanted: [
    { title: "Gamla & nya", text: "Från barndomen till förra helgen." },
    { title: "Fina & kaos", text: "De snygga bilderna och de som aldrig borde ha tagits." },
    { title: "Screenshots & inside jokes", text: "Konversationer, memes, biljetter, allt som är typiskt Diana." },
  ],
  memory: {
    title: "Ditt minne",
    text: "Till leken Gissa minnet. Skriv ett specifikt och gärna roligt minne med Diana. Vi ser ditt namn, men Diana får gissa vem som skrev vad.",
  },
};

/* ------------------------------------------------------------
 *  LEKAR
 *  submit: "memory" visar en knapp till minnesformuläret.
 * ---------------------------------------------------------- */

export type Game = {
  number: string;
  title: string;
  /** När leken körs under dagen. */
  when: string;
  intro: string;
  listTitle?: string;
  list?: string[];
  submit?: "memory";
};

export const games: Game[] = [
  {
    number: "I",
    title: "Hemliga uppdrag",
    when: "Hela dagen",
    intro:
      "Alla får ett hemligt uppdrag på morgonen som ska genomföras utan att Diana märker något. Efter middagen avslöjar alla sina uppdrag, och Diana gissar vad var och en försökte göra.",
  },
  {
    number: "II",
    title: "Låt-leken",
    when: "Under kvällen",
    intro:
      "Vi spelar i lag eller alla mot alla. Skriv lappar med låttitlar, artistnamn eller personnamn, till exempel förnamn som sjungs i kända låtar, och lägg dem mitt på bordet. En person sköter musiken och spelar en låt. När ordet eller namnet hörs gäller det att snabbt gripa rätt lapp från bordet.",
  },
  {
    number: "III",
    title: "The Ara Tapes",
    when: "Under kvällen",
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
  },
  {
    number: "IV",
    title: "Gissa minnet",
    when: "Under kvällen",
    intro:
      "Innan helgen skriver alla ett minne med Diana. Under kvällen läser Diana upp dem ett i taget och gissar vem som skrev vilket. Var specifik och gärna rolig, och gör det klurigt att gissa.",
    submit: "memory",
  },
  {
    number: "V",
    title: "Vem är mest trolig - Men Edition",
    when: "Efter middagen",
    intro: "Vi genererar AI-bilder av oss alla som män och ger varje man ett eget namn. Bilderna visas i en presentation tillsammans med frågor. På tre pekar alla på den man som är mest trolig att passa in på frågan.",
    listTitle: "Exempel på frågor",
    list: [
      "Vem skulle vara en fuckboy?",
      "Vem skulle vara en simp?",
    ],
  },
  {
    number: "VI",
    title: "Kahoot om Diana",
    when: "Efter middagen, hemma",
    intro: "Hur väl känner vi Diana? Vi kör ett Kahoot-spel med frågor om henne i en presentation. Alla svarar på sina mobiler och tävlar om vem som kan mest om bruden.",
  },
];

/* ------------------------------------------------------------
 *  TILL DIANA, MED KÄRLEK
 * ---------------------------------------------------------- */

export const forDiana = {
  scrapbook: {
    title: "Scrapbooken",
    status: "tbc" as Status,
    text: "En scrapbook av Dianas liv och minnen genom åren: ett collage med stora och små bilder, utklipp, inside jokes och era brev blandat. Skicka in allt ni har, så väljer vi ut.",
  },
  museum: {
    title: "Diana Museum",
    status: "idea" as Status,
    text: "En hörna i lägenheten med bitar ur Dianas liv, som en liten utställning hon går runt i: foton, skärmdumpar, gamla meddelanden, biljetter, citat och handskrivna minnen.",
    rooms: ["De tidiga åren", "Tonårsarkivet", "Vänskapsåren", "Diana & Ara", "Brud-eran"],
  },
};

/* ------------------------------------------------------------
 *  DET VI KÖPER IN  (sidan /inkop)
 *  Lägg till eller ta bort rader i listorna nedan.
 * ---------------------------------------------------------- */

export const shopping = {
  note: "Allt det här ingår i budgeten. Solin, Dene & Lara köper in allt, så kommer alla redo som de är!",
  categories: [
    {
      title: "Dekoration",
      items: ["Ljus / LED-ljus", "Blommor", "Bordsdekoration", "Utskrivna foton", "Brud-dekorationer", "Serveringsartiklar vid behov"],
    },
    {
      title: "Bubbel & kvällshäng hemma",
      items: ["Bubbel + alkoholfritt", "Vin", "Ingredienser till drinkar", "Läsk", "Nattmacka & snacks"],
    },
    {
      title: "Lördagsfrukost",
      items: ["Frukostmat", "Fikabröd", "Våfflor / pannkakor", "Kaffe", "Juice", "Frukt"],
    },
    {
      title: "Söndagsfrukost",
      items: ["Bröd", "Pålägg", "Ägg / frukostartiklar", "Frukt", "Juice", "Kaffe"],
    },
    {
      title: "Lekar",
      items: ["Aras videor", "Bidrag till Gissa minnet", "Laptop / HDMI"],
    },
    {
      title: "Bruden",
      items: ["Vit kvällsoutfit", "Brud-accessoarer", "Hemlig packlista för Diana"],
    },
    {
      title: "Minnen",
      items: ["Scrapbook", "Utskrivna fotografier", "Brev från alla", "Material till Diana Museum"],
    },
  ],
};
