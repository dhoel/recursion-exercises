
const triangularNumber = (num) => {
  if (num === 0) {
    return 0;
  }
  const currentNum = num

  return currentNum + triangularNumber(num - 1);
}

console.log(triangularNumber(12));

// * * * * * *
// 1 + 3 + 6 + 10 + 15 + 21;
