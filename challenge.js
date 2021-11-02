function breakingRecords(scores) {
  let highest = scores[0];
  let countHighest = 0;
  let lowest = scores[0];
  let countLowest = 0;
  for (let i = 1; i < scores.length; i++) {
      if (scores[i] > highest) {
          highest = scores[i];
          countHighest += 1;
      }
      if (scores[i] < lowest) {
          lowest = scores[i];
          countLowest += 1;
      }
  }
  return [countHighest, countLowest];
}
