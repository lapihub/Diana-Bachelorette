const formatter = new Intl.NumberFormat("sv-SE");

export function formatKr(value: number): string {
  return `${formatter.format(value)} kr`;
}

export function formatRange(min: number, max?: number): string {
  if (max === undefined || max === min) return formatKr(min);
  return `${formatter.format(min)}–${formatKr(max)}`;
}
