localStorage.clear();

localStorage.setItem('usher1', JSON.stringify({ name: 'Bob' }));
localStorage.setItem('name', JSON.stringify('Violine'));
localStorage.setItem('number', JSON.stringify(23));
localStorage.setItem('again', JSON.stringify(true));

// console.log(JSON.parse(localStorage.getItem('number')));

export function getLocalStorageDate() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: JSON.parse(value),
    };
  }, {});
}

console.log(getLocalStorageDate());
