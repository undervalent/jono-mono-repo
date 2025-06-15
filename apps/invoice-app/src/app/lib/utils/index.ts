import Dinero from 'dinero.js';
import { Invoices } from '@lib/types';
import { add, formatDate, isValid } from 'date-fns';
import currency from 'currency.js';

export function htmlSafeId(label?: string): string {
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

export function toCssSize(
  value: string | number | undefined | null,
): string | undefined {
  if (value == null) return undefined;
  if (typeof value === 'number') return `${value}px`;

  const validUnits =
    /^(?:-?\d*\.?\d+)(px|em|rem|vh|vw|vmin|vmax|ch|ex|%|cm|mm|in|pt|pc)$/i;
  return validUnits.test(value) ? value : undefined;
}

export const convertToDollars = (amount: number | string) => {
  return currency(amount).format();
};

export const convertItemsToDollars = (items: Invoices[]): any =>
  items.map((el) => ({
    ...el,
    price: convertToDollars(el.price),
    total: convertToDollars(el.total),
  }));

export function convertInvoices(invoices: any) {
  return invoices.map((el: any) => ({
    ...el,
    items: convertItemsToDollars(el.items),
    total: convertToDollars(el.total),
  }));
}

export function generateItemTotal({
  price,
  quantity,
}: {
  price: number | string;
  quantity: number | string;
}) {
  return currency(+price).multiply(+quantity);
}

export function generateInvoiceItemTotal({
  price,
  quantity,
}: {
  price: number | string;
  quantity: number | string;
}) {
  const calculated = generateItemTotal({ price, quantity });
  return calculated.format();
}
