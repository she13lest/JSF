export function getGreenwichTime(date) {
  const formatter = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formatter.format(date);
}

console.log(getGreenwichTime(new Date()));
