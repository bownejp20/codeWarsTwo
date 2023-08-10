// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(arr) {
 
  const uniqueArray = [];
  const seen = new Set();

  for (let num of arr) {
      if (!seen.has(num)) {
          uniqueArray.push(num);
          seen.add(num);
      }
  }

  return uniqueArray;
}