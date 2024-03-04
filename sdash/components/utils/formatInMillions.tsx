export function formatNumberInMillions(number: number) {
  if (typeof number !== "number") return;

  const million = 1000000;
  const result = number / million;

  const roundedResult = Math.round(result);
  return `${roundedResult}`;
}
