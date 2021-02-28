let number = 6;
let linha = [];
for(let i = 0;i < number;i+=1) {
  linha.push(' ');
}
if(number%2 ==0) {
    for(let i = 0;i < (number+1)/2;i+=1) {
      linha[(number+1)/2] = '*';
      let linhaP = '';
      for(let i = 0;i < number;i+=1) {
        linhaP += linha[i];
      }
      console.log(linhaP);
    }
}
