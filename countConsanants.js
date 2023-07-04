// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

const consonantCount = (str) => {
  const newStr = str.toLowerCase()
  let consonants = 0
  const isNonVowels = (char) => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i].match(/[a-z]/) && isNonVowels(newStr[i])){
      consonants ++ 
    }
  }
  return consonants
}
