const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n: number) {
  const numWithCommas = numberWithCommas(n); // "1,000,234"
  return toPersianNumbers(numWithCommas);
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n: number | string) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}