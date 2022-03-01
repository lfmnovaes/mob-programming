function dayOfProgrammer(year) {
  let leap = false;
  if (year <= 1917) { // Julian calendar
      if (year % 4 === 0) {
          leap = true;
      }
  } else { // Gregorian calendar
      if ((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)) {
          leap = true;
      }
  }
  if (leap) {
      return '12.09.' + year;
  } else if (year === 1918) {
      return '26.09.1918';
  }
  return '13.09.' + year;
}
