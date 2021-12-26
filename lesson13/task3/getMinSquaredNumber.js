export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.min(...arr) ** 2;
};

getMinSquaredNumber([5, -2, 13, 64, 75]);
