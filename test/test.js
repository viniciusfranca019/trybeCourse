function decode(word) {
  let changeWord = [];
  let encondeWord = '';
  for (let i = 0; i < word.length; i += 1) {
    changeWord.push(word[i]);
  }
  for (let i in changeWord) {
    if (changeWord[i] === 1) {
      changeWord[i] = 'a';
    } else if (changeWord[i] === 2) {
      changeWord[i] = 'e';
    } else if (changeWord[i] === 3) {
      changeWord[i] = 'i';
    } else if (changeWord[i] === 4) {
      changeWord[i] = 'o';
    } else if (changeWord[i] === 5) {
      changeWord[i] = 'u';
    }
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    encondeWord += changeWord[i];
  }
  return encondeWord;
}
let u = '11111'
let k = decode(u);
console.log(k)