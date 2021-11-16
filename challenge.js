function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          aPoints++;
      } else if (a[i] < b[i]) {
          bPoints++;
      }
  }
  return [aPoints, bPoints];
}
