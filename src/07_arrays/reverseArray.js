/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
  // Your code here

  // get length of array
  // const arrLength = arr.length;

  // make another array
  const revArr = [];

  // count down & push items into new array
  let i = arr.length - 1;

  while (i >= 0) {
    const item = arr[i];

    revArr.push(item);

    // finish, next i down
    i--;
  }

  return revArr;
}

module.exports = reverseArray;
