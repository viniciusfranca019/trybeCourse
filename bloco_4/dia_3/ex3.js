let number = 5;
let linha = [];
for(let i = 0;i < number;i+=1) {
  linha.push(' ');
}
for(let i = 0;i < number;i+=1) {
  let linhaP = '';
  linha[number-1-i] = '*';
  for(let i = 0;i < number;i+=1) {
    linhaP += linha[i];
  }
  console.log(linhaP);
}

