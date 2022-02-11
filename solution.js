function alternatingCharacters(s) {
  let arr = s.split('');
  let char = arr[0];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
      if (char === arr[i]) {
          count++;
      } else {
          char = arr[i];
      }
  }
  return count;
}
