function isPalindrome(word) {
    for(i = 0 ; i < word.length *.2; i++) {      
      if(word[i] === word[word.length - 1 -i]){
        return true
      } else{
        return false
      }
  } 
}

/* 
  Add your pseudocode here
  take in a word
  look at the length of the word
  if the length is even
    compare the first letter to the last letter.
      if same, compare the second letter to second from last letter
      if different, return false 
        if same, continue until the Nth letter = .5 word length
  if the length is odd
      compare the first letter to the last letter.
      if same, compare the second letter to second from last letter
      if different, return false 
        if same, continue until the Nth letter = .5 (word length - 1), then stop

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
