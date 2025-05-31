export function htmlSafeId(label: string): string {
  const rand = Math.random().toString(36).slice(2, 8); // 6-char random suffix
  if (!label) return `id-${rand}`;

  let base = label
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');

  if (/^[^a-z]/.test(base)) base = `id-${base}`;

  return `${base}-${rand}`;
}
