/*
first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth
*/
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const isLeap = (year) => {
  if (year % 400 === 0) {
    return true;
  } if (year % 100 === 0) {
    return false;
  } if (year % 4 === 0) {
    return true;
  }
  return false;
};

export const meetupDay = (year, month, dayName, descriptor) =>  {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayNameOfMonth = firstOfMonth.getDay() > DAYS.indexOf(dayName) ? 8 - firstOfMonth.getDay() + DAYS.indexOf(dayName) : 1 + DAYS.indexOf(dayName) - firstOfMonth.getDay();

  let day;
  // parse descriptor
  switch (descriptor) {
    case '1st':
      day = firstDayNameOfMonth;
      break;
    case '2nd':
      day = firstDayNameOfMonth + 7;
      break;
    case '3rd':
      day = firstDayNameOfMonth + 14;
      break;
    case '4th':
      day = firstDayNameOfMonth + 21;
      break;
    case '5th':
      day = firstDayNameOfMonth + 28;
      break;
    case 'last':
      if (month === 1) { // month is February
        // is it a leap year?
        if (isLeap(year)) {
          day = firstDayNameOfMonth + (firstDayNameOfMonth > 1 ? 21 : 28);
        } else {
          day = firstDayNameOfMonth + 21;
        }
      } else if ([3, 5, 8, 10].includes(month)) { // month has 30 days
        day = firstDayNameOfMonth + (firstDayNameOfMonth > 2 ? 21 : 28);
      } else { // month has 31 days
        day = firstDayNameOfMonth + (firstDayNameOfMonth > 3 ? 21 : 28);
      }
      break;
    case 'teenth':
      day = firstDayNameOfMonth + (firstDayNameOfMonth > 2 ? 7 : 14);
  }
  const trial = new Date(year, month, day);
  if (trial.getMonth() === month && trial.getFullYear() === year) {
    return trial;
  } else {
    throw new Error();
  }
}
