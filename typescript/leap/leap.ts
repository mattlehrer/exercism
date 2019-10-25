function isLeapYear(year: number) {
  if (!(year % 400)) return true;
  if (!(year % 100)) return false;
  return !(year % 4)
}

export default isLeapYear