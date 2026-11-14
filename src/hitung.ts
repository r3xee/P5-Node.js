// src/hitung.ts
export function rataRata(angka: number[]): number {
  if (angka.length === 0) return 0;
  const total = angka.reduce((jumlah, nilai) => jumlah + nilai, 0);
  return total / angka.length;
}