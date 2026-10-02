export type Status =
  | "confirmed"
  | "booked"
  | "toBook"
  | "tbc"
  | "idea"
  | "toBuy"
  | "done";

export const statusLabel: Record<Status, string> = {
  confirmed: "Bekräftat",
  booked: "Bokat",
  toBook: "Att boka",
  tbc: "TBC",
  idea: "Idé",
  toBuy: "Att köpa",
  done: "Klart",
};

/**
 * Settled statuses are not shown as a label, so the page only marks
 * what is still open (TBC, IDÉ, ATT BOKA).
 */
export const quietStatuses: Status[] = ["confirmed", "booked", "toBuy", "done"];

/** Subtle colour treatment per status, all within the ivory/champagne palette. */
export const statusStyle: Record<Status, string> = {
  confirmed: "border-sage/60 text-sage-deep",
  booked: "border-sage/60 text-sage-deep bg-sage/10",
  toBook: "border-gold/60 text-gold-deep",
  tbc: "border-champagne text-ink-soft",
  idea: "border-blush text-rose-deep italic",
  toBuy: "border-gold/50 text-gold-deep",
  done: "border-ink/20 text-ink-soft bg-ink/5",
};
