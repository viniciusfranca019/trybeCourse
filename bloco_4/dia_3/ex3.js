let number = 5;
let linha = '';
for(let i = 0;i < number;i+=1) {
  linha += ' '
}
for(let i = 0;i < number;i+=1) {
  linha[number-1-i]='*'
  console.log(linha)
}


