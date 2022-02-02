const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']

export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();

  const dayInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dayInFuture).getDay()];
}

const result = dayOfWeek(new Date(2022, 0, 7), 7);
console.log(result);
