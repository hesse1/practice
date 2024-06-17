export const subYears = (date: Date, subNumber: number): Date => {
  let dateNow: Date = new Date(date);
  let curDate: number = dateNow.setFullYear(dateNow.getFullYear() - subNumber);
  return new Date(curDate);
};
