// Sum of Two Numbers
function sum(a, b) {
  let number1 = a;
  let number2 = b;
  return number1 + number2;
}


// Factorial of a Number
function factorial(n) {
  if ( n<0) {
    return undefined;
  }
  else if (n == 0){
    return 1;
  } else{
    return n*factorial(n-1);
  }
}


// Find the Largest Number
function findLargest(arr) {
  arr.sort((a, b) => a - b); 
  findLargest = arr[arr.length - 1];
  return findLargest;
}


// Count Vowels in a String
function countVowels(str) {
  let count =0;
  let vowels= "aeiouAEIOU";
  for (let char of str){
    if (vowels.includes(char)){
      count++;
    }
    else{
      continue;
    }
  }
  return count;
  
}


// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) return false;
  let raiz = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= raiz; i++){
    if(n%i === 0){
      return false;
    }
    return true;
  }
}


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
