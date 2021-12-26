export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + Math.pow(elem, 2);
  }, 0);
}

sumOfSquares(1, 2, 3, 4);
