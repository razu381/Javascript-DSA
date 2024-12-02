function isPallindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.length == 0) return true;
    if (str[start] != str[end]) return false;
    else {
      start++, end--;
    }
  }
  return true;
}

console.log(isPallindrome("noyon")); // true
console.log(isPallindrome("razu")); // false
console.log(isPallindrome("racecar")); // true
console.log(isPallindrome("madam")); // true
console.log(isPallindrome("apple")); // false
console.log(isPallindrome("A man a plan a canal Panama")); // false (spaces)
console.log(isPallindrome("Able was I saw elbA")); // true
console.log(isPallindrome("")); // true (empty string is a palindrome)
console.log(isPallindrome("a")); // true (single character is always a palindrome)
console.log(isPallindrome("Was it a car or a cat I saw")); // false (spaces)
console.log(isPallindrome("level")); // true
console.log(isPallindrome("radar")); // true
console.log(isPallindrome("Step on no pets")); // false (spaces)
console.log(isPallindrome("Redder")); // true
