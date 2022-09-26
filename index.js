function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex
    if (word[startIndex] !== word[endIndex]) {
      return false
    }
  }

  return true
}

/* 
  Add your pseudocode here
  get the input word 
  loop from start of string to middle of string
  compare the latters we are looping with the coresponding letter at the end of the string
  if a letter doesnt match stop and return false
  if we reach the middle and the all match return true
*/

/*
  Add written explanation of your solution here

  this solution lets of cut the time in half by only needing to check half of the word
  by using a loop to itterate we can compare the latters we are looping with the coresponding letter at the end of the string
  when we hit the middle of the string which will be our stopping point we would be able to know if it is a palindrome or not

  startIndex < word.length / 2
  usring this when length of word is odd we still are able to check for example
  mom we check the first and last char since startIndex is = 0 word.leght/2 = 1.5 
  while endIndex is 3-1-0 = 2
  we still check if m !== m since this is false we continue 
  startIndex is now = 1 which still is less than 1.5
  next we will startIndex will = 1 while endIndex will be 3 - 1 - 1 = 1
  so we end up checking if o!==o which is faluse we continue the loop
  startIndex is now = 2 we end loop because it is greater than 1.5

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
