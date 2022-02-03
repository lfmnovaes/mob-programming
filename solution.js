function pickingNumbers(a) {
  let sorted = a.sort((a, b) => { return a - b; });
  let range = sorted.length
  let ans = 0;
  for (let i = 0; i < range; i++) {
      for (let j = 0; j < range; j++) {
          if (Math.abs(sorted[j]-sorted[i]) <= 1) {
              ans = Math.max(ans, j-i+1)
          }
      }
  }
  return ans;
}
