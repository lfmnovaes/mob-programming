function kangaroo(x1, v1, x2, v2) {
  let destination1 = x1;
  let destination2 = x2;
  if (v1>v2) {
      while (destination1 < destination2) {
          destination1 += v1;
          destination2 += v2;
      }
      if (destination1 === destination2) {
          return 'YES';
      }
      return 'NO';
  } else {
      return 'NO';
  }
}
