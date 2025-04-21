function printNum(num) {
  if (num == 0) return;
  printNum(num - 1);
  console.log(num);
}

printNum(10);
