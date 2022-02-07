localStorage.clear();
localStorage.setItem('usher1', JSON.stringify({ name: 'Bob' }));
localStorage.setItem('name', JSON.stringify('Violine'));
localStorage.setItem('number', JSON.stringify(23));

// console.log(JSON.parse(localStorage.getItem('number')));

function getLocalStorageDate() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: JSON.parse(value),
    };
  }, {});
}

console.log(getLocalStorageDate());
