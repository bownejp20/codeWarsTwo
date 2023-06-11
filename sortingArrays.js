// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.



function sortArray(a1, a2) {
  const indexMap = {};
  
  // Create a map of letters to their corresponding indices in a1
  for (let i = 0; i < a1.length; i++) {
    const letter = a1[i][0];
    indexMap[letter] = i;
  }
  
  // Sort a2 based on the index of the corresponding letter in a1
  a2.sort((a, b) => {
    const aLetter = a[0];
    const bLetter = b[0];
    return indexMap[aLetter] - indexMap[bLetter];
  });
  
  return a2;
}