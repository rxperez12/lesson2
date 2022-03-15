// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
function findPalindromeAtIndexes(string, index1, index2) {
  let palindromes = [];
  while (index1 >= 0 && index2 < string.length) {
    if (string[index1] !== string[index2]) break;
    palindromes.push(string.slice(index1, index2 + 1));
    index1--;
    index2++;
  }
  return palindromes;
}

// console.log(findPalindromeAtIndexes("abcddcbA", 3, 4));

function palindromeSubstrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let check1 = findPalindromeAtIndexes(string, i, i + 1);
    if (check1.length > 0) {
      result = result.concat(check1);
    }
    let check2 = findPalindromeAtIndexes(string, i - 1, i + 1);
    if (check2.length > 0) {
      result = result.concat(check2);
    }
  }
  return result;
}

console.log(palindromeSubstrings("abcddcbA"));
console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
