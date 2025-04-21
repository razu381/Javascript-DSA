//iterative

// function factorialI(n) {
//   let total = n;

//   for (let i = n - 1; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

// console.log(factorialI(4));

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
