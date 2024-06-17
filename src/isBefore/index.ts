export const isBefore = (date: Date, dateToCompare: Date): boolean =>
  date.getTime() < dateToCompare.getTime();
