export default function toLocalDate(date: string) {
  return new Date(date).toLocaleDateString("fa-IR");
}
