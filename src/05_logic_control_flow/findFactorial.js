// Write a function that takes in a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0 is 1.
// The factorial of 1 is 1.
// The factorial of 2 is 2 * 1 = 2.
// The factorial of 3 is 3 * 2 * 1 = 6.
// Recommended: use a while of for loop to solve the problem
function findFactorial(n) {
  // Your code here
  if (typeof n !== "number") {
    return "Please enter a number";
  }

  // NOTE: much easier with recursive

  // if (n === 0 || n === 1) {
  //   return 1;
  // }
  // return n * findFactorial(n - 1);

  if (n === 0) return 1;

  let num = n;
  let total = 1;

  // 3 > 1 * 3; total = 3
  // 2 > 3 * 2; total = 6
  // 1 > 6 * 1; total = 6
  while (num > 0) {
    total = total * num;
    num--;
  }

  return total;
}

module.exports = findFactorial;
