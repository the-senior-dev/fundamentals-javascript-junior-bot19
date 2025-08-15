/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
  // Your code here

  // stop condition
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    console.log("1 need objects to compare");
    return false;
  }

  // get array of object keys
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // if objects have diff number of keys, not equal
  if (obj1Keys.length !== obj2Keys.length) {
    console.log("2 number of keys in both objects don't match");
    return false;
  }

  // loop through object keys & compare
  let i = 0;
  while (i < obj1Keys.length) {
    // FIX-1: get keys to compare values, vs comparing keys (lol)
    const key1 = obj1Keys[i];
    const key2 = obj2Keys[i];

    // check if keys are same; assumes same keys in same order by default
    if (key1 !== key2) {
      console.log("3 loop through keys - keys don't match");
      return false;
    }

    if (typeof obj1[key1] === typeof obj2[key2]) {
      if (typeof obj1[key1] === "object") {
        // deal with value as object
        // recursive call
        if (!compareObjects(obj1[key1], obj2[key2])) {
          console.log(
            "4 loop through keys - recursive object value isn't equal"
          );
          return false;
        }
      } else {
        // deal with value as non-object (primitives)
        // FIX-2: was ===, return true too early
        if (obj1[key1] !== obj2[key2]) {
          console.log("5 loop through keys - values don't match");
          return false;
        }
      }
    } else {
      // diff types for value of object key
      console.log(
        "6 loop through keys - value types for 2 objects don't match"
      );
      return false;
    }

    // next key in object
    i++;
  }

  console.log("7 objects are equalled");
  return true;
}

/*
 * NOTES
 *
 * stringify and compare for easy mode
 * not dealing with nulls
 * not dealing with arrays
 * not dealing with Date
 *
 * due to simple tests, only deals with primitives + nested objects
 */

// console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));

module.exports = compareObjects;
