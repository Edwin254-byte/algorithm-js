/*Design a greedy algorithm that counts the number of substrings that start with letter and end with a different letter. For example . For example, there are four substrings in CABAAXBYA that start with A and ends with B  */

function greedySubstring(string, startLetter, endLetter) {
  let substrings = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === startLetter) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[j] === endLetter) {
          substrings++;
        }
      }
    }
  }

  return substrings;
}

console.log(greedySubstring("CABAAXBYA", "A", "B"));
//Best case input
console.log(greedySubstring("AB", "A", "B"));
//worse case input
console.log(greedySubstring("AAAAAAAB", "A", "B"));
