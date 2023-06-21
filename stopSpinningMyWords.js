// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Iterate through each word
  const reversedWords = words.map(word => {
    // Reverse the word if it has five or more letters
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    // Otherwise, return the original word
    return word;
  });

  // Join the modified words back into a string
  const result = reversedWords.join(' ');

  return result;
}