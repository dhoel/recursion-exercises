
const triangularNumber = (num) => {
  if (num === 0) {
    return 0;
  }
  const currentNum = num

  return currentNum + triangularNumber(num - 1);
}

console.log(triangularNumber(6));

// * * * * * *
// 1 + 2 + 3 + 4 + 5 + 6 = 21;
