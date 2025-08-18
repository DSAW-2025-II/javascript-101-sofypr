// Sum of Two Numbers
function sum(a, b) {
   if (typeof a !== "number" || typeof b !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}



// Factorial of a Number
function factorial(n) {
   if (typeof n !== "number" || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) return 1;
   return n * factorial(n - 1);
}


// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some((e) => typeof e !== "number")) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
}


// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;  }
  return count;
  
}


// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || n <= 1) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  let raiz = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= raiz; i++) {
    if (n % i === 0) return false;
  }
  return true;
}


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
