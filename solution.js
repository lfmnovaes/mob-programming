function twoStrings(s1, s2) {
  let chars = new Set(s1.split(''));
  let chars2 = s2.split('');
  for (let i = 0; i < chars2.length; i++) {
      if (chars.has(chars2[i])) {
          return 'YES'
      }        
  }
  return 'NO'
}
