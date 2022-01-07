function sockMerchant(n, ar) {
  let pairs = 0;
  let socks = new Set();
  socks.add(ar[0]);
  for (let i = 1; i < n; i++) {
      if (socks.has(ar[i])) {
          socks.delete(ar[i]);
          pairs++;
      } else {
          socks.add(ar[i]);
      }
  }
  return pairs;
}
