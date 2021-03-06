localStorage.clear();

localStorage.setItem('usher1', JSON.stringify({ name: 'Bob' }));
localStorage.setItem('name', JSON.stringify('Violine'));
localStorage.setItem('number', JSON.stringify(23));
localStorage.setItem('again', JSON.stringify(true));

export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch(e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
}

console.log(getLocalStorageData());
