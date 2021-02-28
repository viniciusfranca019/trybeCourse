let number = 5;
let linha = [];
for(let i = 0;i < number;i+=1) {
  linha.push(' ');
}
for(let i = 0;i < number;i+=1) {
  linha[number-1-i] = '*';
  let linhaP = '';
  for(let i = 0;i < number;i+=1) {
    linhaP += linha[i];
  }
  console.log(linhaP);
}

