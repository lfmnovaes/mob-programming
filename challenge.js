function catAndMouse(x, y, z) {
  const distance1 = Math.abs(x-z);
  const distance2 = Math.abs(y-z);
  if (distance1 < distance2) {
      return 'Cat A';
  } else if (distance2 < distance1) {
      return 'Cat B';
  } else {
      return 'Mouse C';
  }
}
