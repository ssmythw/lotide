const countLetters = (str) => {
  const result = {};

  for (const letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

console.log(countLetters("lighthouse in the house"));
