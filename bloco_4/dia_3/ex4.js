let number = 6;
let linha = [];
for(let i = 0;i < number;i+=1) {
  linha.push(' ');
}
if(number % 2 !== 0) {
  for(let i = 0;i < ((number+1)/2);i+=1) {
    let linhaP = '';
    linha[((number+1)/2)-1+i] = '*';
    linha[((number+1)/2)-1-i] = '*';
    for(let i = 0;i < number;i+=1) {
      linhaP += linha[i];
    }
    console.log(linhaP);
    linhaP = '';
    console.log(linhaP);
  }
} else {
  for(let i = 0;i < ((number)/2);i+=1) {
    let linhaP = '';
    linha[((number)/2)-1-i] = '*';
    linha[((number)/2)+i] = '*';
    for(let i = 0;i < number;i+=1) {
      linhaP += linha[i];
    }
    console.log(linhaP);
    linhaP = '';
    console.log(linhaP);
  }
}

