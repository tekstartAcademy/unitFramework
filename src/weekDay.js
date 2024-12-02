export const weekDay = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return 'Monday';

    case 2:
      return 'Tuesday';

    case 3:
      return 'Wednesday';

    case 4:
      return 'Thursday';

    case 5:
      return 'Friday';

    case 6:
      return 'Saturday';

    case 7:
      return 'sunday';
    default:
      return 'Please enter a number between 1 and 7';
  }
};
