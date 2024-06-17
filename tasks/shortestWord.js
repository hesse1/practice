function findShort(s) {
  const arrOfString = s.split(' ');
  return arrOfString.sort((a, b) => a.length - b.length)[0].length;
}
