function printDigits(number) {
  console.log(number % 10);
  if (number < 10) return;

  printDigits(Math.floor(number / 10));
}

printDigits(1234);
