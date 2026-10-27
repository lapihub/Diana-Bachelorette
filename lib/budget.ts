const formatter = new Intl.NumberFormat("sv-SE");

export function calculateBudgetTotal(items: readonly { min: number; max?: number }[]) {
  return items.reduce<{ min: number; max: number }>(
    (total, item) => ({ min: total.min + item.min, max: total.max + (item.max ?? item.min) }),
    { min: 0, max: 0 },
  );
}

export function formatKr(value: number): string {
  return `${formatter.format(value)} kr`;
}

export function formatRange(min: number, max?: number): string {
  if (max === undefined || max === min) return formatKr(min);
  return `${formatter.format(min)}–${formatKr(max)}`;
}
