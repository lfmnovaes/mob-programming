function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
      a.push(a.shift());
  }
  return a;
}
