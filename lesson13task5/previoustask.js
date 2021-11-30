export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reversedArr = arr.slice();
  return reversedArr.reverse();
};
const price = [1, 5, 6, 3, 12];
console.log(reverseArray(price));

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  if (balances[index] >= amount) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
};
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 950);

export const getAdults = obj => {
  if (obj.length === 0) {
    return obj;
  }
  const overEighteen = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      overEighteen[key] = obj[key];
    }
  }
  return overEighteen;
};

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
