const BinaryRep = (num) => {
    if (num === 0) return '';

    let binNum = ''
    if (num % 2 === 0) {
        binNum += '0'
    }
    if (Math.floor(num % 2) === 1) {
        binNum += '1'
    }
    return BinaryRep(Math.floor(num / 2)) + binNum
}

BinaryRep(7)

// base case = num === 0

// recursive case 1 = num % 2 === 0, append 0
// recursive case 2 = num % 2 === 1, append 1

13 = 2^3 + 2^2 + 1;
13 = 8 + 4 + 0 + 1;

  1       1      0      1
eights, fours, twos, ones

12 = 2^3 + 2^2;
12 = 8 + 4 + 0 + 0;
  1       1     0     0
eights, fours, twos, ones


13 => 1101 => 10110
7 => 111 => 1110
5 => 101 => 1010
4 => 100 => 0010

// %2
// /2
// floor
1 => 1
0 => 0
2 => 10
6 => 110


currentNum = 0
binaryNum = 0

currentNum++
if (binaryNum === 0)
if (binaryNum === 1)
