export function getDiff(startDate, endDate) {
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.trunc(diff / (1000 * 3600 * 24));
  const hours = Math.trunc((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.trunc((diff / (1000 * 60)) % 60);
  const seconds = Math.trunc((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const startDate = new Date(2014, 10, 2, 4, 5);
const endDate = new Date(2021, 0, 3, 2, 1);

const case1 = getDiff(startDate, endDate);
console.log(case1)

const case2 = getDiff(new Date(2021, 10, 1, 4, 1), new Date(2020, 0, 2))
console.log(case2);
