/** All pages, in order. Used by the menu, the start page and the "next page" link. */
export const pages = [
  { href: "/", label: "Hem", description: "" },
  { href: "/helgen", label: "Helgen", description: "Schemat och hur vi tar oss dit" },
  { href: "/villan", label: "Villan", description: "Vårt hem för natten" },
  { href: "/budget", label: "Budget", description: "Vad det kostar och när du betalar" },
  { href: "/packa", label: "Packlista", description: "Dresscode och vad du tar med dig" },
  { href: "/lekar", label: "Lekar", description: "Hemligheter & lite kaos" },
  { href: "/till-diana", label: "Till Diana", description: "Scrapbooken och Diana Museum" },
  { href: "/bilder", label: "Skicka bilder", description: "Ladda upp bilder med eller på Diana" },
  { href: "/inkop", label: "Inköp", description: "Det vi behöver köpa" },
] as const;

export type PageHref = (typeof pages)[number]["href"];
