const myFilter = (items, callback) => {
  const result = [];
  for (i = 0; i < items.length; i++) {
    const item = items[i];

    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredResult = myFilter(arr, (element, i, arr) => {
  if (element > 4) {
    return true;
  }
});

console.log(filteredResult);
