
let h1 = document.querySelector('h1');


let palindromeArray = [];

let palindrome = String(prompt('Put your Palindrome word'))
console.log(palindrome)
palindromeArray.push(`${palindrome.toLowerCase()}`)


let palindromeWord0 = palindromeArray[0].split('').join('')
let palindromeWord1 = palindromeArray[0].split('').reverse().join('')



if (palindromeWord0 === palindromeWord1){
    h1.textContent = `Your word is ${palindromeWord0} and Congratulations! ${palindromeWord0} is a PALINDROME`
} else{
    h1.textContent = `Your word is ${palindromeWord0} and ${palindromeWord0} is not a PALINDROME... Sorry Bro...`
}




