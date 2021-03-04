function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}
function concatName(name) {
  let signature = name[name.length - 1] + ', ' + name[0];
  return signature;
}
let u = 'vinicius frança sales';
let k = splitSentence(u);
let v = concatName(k);
console.log(v)