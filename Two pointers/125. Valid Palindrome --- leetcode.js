//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

//comment: we surely can use string. revese and if it's same but for the sake of learning we will use two pointer technique

var isPalindrome = function(s) {

    if(s === "") return true

    let newString = s.toLowerCase()
    let alphaNStr = ""

    //remove any symbol or space
    for(let char of newString){
        let ascii = char.charCodeAt(0)

        if(( ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)){
            alphaNStr += char
        }
    }

    //using two pointer method to check for pallindrome
    let start = 0
    let end = alphaNStr.length - 1

    while(start !== end){
        if(alphaNStr[start] != alphaNStr[end]) return false
        else{
            start++
            end--
        }
    }
    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(""))