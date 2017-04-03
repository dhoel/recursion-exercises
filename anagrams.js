const anagrams = (string) => {
  // if (string === string[string.length - 1]) {
  //   return;
  // }

  letters = string.split(''); // [e, a, s, t]
  firstLetter = letters[0]; // e
  letters = string.substr(1)
  currentWords = [];

  letters.forEach((letter) => {
    currentWords.push(firstLetter)
  })

  console.log(currentWords);

  // return [...currentWords, ...anagrams(string)]
}

anagrams('east');

// base case =

// basic algorithm =
