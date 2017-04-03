const reverseString = (string) => {
  return string.split('').reverse().join('');
}

console.log(reverseString('hello'));

const reverseStringRecursive = (string) => {
  if (string === '') {
    return '';
  }
  const newChar = string[string.length - 1];

  return newChar + reverseStringRecursive(string.slice(0, string.length - 1));
}

console.log(reverseStringRecursive('hello'));


// 5 iterations // functions remain unresolved until finaly base case.
//
// 1 iteration newChar = 'o' + return value of reverseStringRecursive('hell'); 'o' + 'lleh' = 'olleh'
// 2 iteration newChar = 'l' + return value of reverseStringRecursive('hel'); 'l' + 'leh' = 'lleh'
// 3 iteration newChar = 'l' + return value of reverseStringRecursive('he'); 'l' + 'eh' = 'leh'
// 4 iteration newChar = 'e' + return value of reverseStringRecursive('h'); 'e' + 'h' = 'eh'
// 5 iteration newChar = 'h' + return value of reverseStringRecursive(''); 'h' + '' = 'h'
// 6 iteration base case is met, so return '', without calling anymore functions;
