// MIT License - Modul Perhitungan Siklus Modulo-12 Tahun 2026 (Kuda Api)
export const SIMBOL_2026 = [
  "Kuda", "Kambing", "Monyet", "Ayam", "Anjing", "Babi",
  "Tikus", "Kerbau", "Macan", "Kelinci", "Naga", "Ular"
];
export function getModulo12Series(orderIndex) {
  const out = [];
  for (let n = orderIndex + 1; n <= 100; n += 12) {
    out.push(String(n % 100).padStart(2, "0"));
  }
  return out;
}
