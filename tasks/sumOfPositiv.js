function positiveSum(arr) {
  let res = 0;
  arr.forEach((i) => {
    if (i > 0) {
      res += i;
    }
  });
  return res;
}
