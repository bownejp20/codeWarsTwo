// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  const newText = text.toLowerCase().split('').sort()
  const arr = []
  for(let i = 0; i <newText.length; i++){
    if(newText[i] === newText[i +1] && !arr.includes(newText[i])){
      arr.push(newText[i])
    }
  }
  return arr.length
}

// function countDuplicateCharsAndDigits(input) {
//   const charCount = {};
//   const lowerInput = input.toLowerCase();
  
//   for (let i = 0; i < lowerInput.length; i++) {
//       const char = lowerInput[i];
//       if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//           charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//       }
//   }

//   let count = 0;
//   for (let char in charCount) {
//       if (charCount[char] > 1) {
//           count++;
//       }
//   }

//   return count;
// }