function diagonalDifference(arr) {
  let ltr_sum = 0;
  let rtl_sum = 0;
  let i = 0;
  while (i < arr.length) {
      ltr_sum += arr[i][i];
      rtl_sum += arr[i][arr.length-i-1];
      i++;
  }
  return Math.abs(ltr_sum - rtl_sum);
}
