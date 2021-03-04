function decode(word) {
  let changeWord = [];
  let decondeWord = '';
  for (let i = 0; i < word.length; i += 1) {
    changeWord.push(word[i]);
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    if (changeWord[i] === '1') {
      changeWord[i] = 'a';
    } else if (changeWord[i] === '2') {
      changeWord[i] = 'e';
    } else if (changeWord[i] === '3') {
      changeWord[i] = 'i';
    } else if (changeWord[i] === '4') {
      changeWord[i] = 'o';
    } else if (changeWord[i] === '5') {
      changeWord[i] = 'u';
    }
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    decondeWord += changeWord[i];
  }
  return decondeWord;
}
let test = '4l1 m5nd4';
let u = decode(test);
console.log(u);






