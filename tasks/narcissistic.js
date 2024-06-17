function narcissistic(value) {
  const length = String(value).length;
  const arrayNumber = String(value).split('');
  const mapArray = arrayNumber
    .map(Number)
    .map((i) => Math.pow(i, length))
    .reduce((a, b) => a + b, 0);
  return value === mapArray;
}
