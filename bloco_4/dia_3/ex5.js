let number = 8;
let linha = [];
let resetLinha = [];
for(let i = 0;i < number;i+=1) {
  linha.push(' ');
resetLinha.push(' ');
}
if(number % 2 !== 0) {
  for(let i = 0;i < ((number+1)/2)-1;i+=1) {
		let linhaP = '';
    linha[((number+1)/2)-1+i] = '*';
    linha[((number+1)/2)-1-i] = '*';
		// criando o string
    for(let i = 0;i < number;i+=1) {
			linhaP += linha[i];
    }
		// resetar o array linha
    console.log(linhaP);
		console.log('');
		for(let i = 0;i < number;i+=1) {
			linha[i] = ' '
		}
  }
	let linhaP = '';
	for(let i = 0;i < number;i+=1){
		linhaP += '*'
	}
	console.log(linhaP)
} else {
  for(let i = 0;i < ((number)/2)-1;i+=1) {
    let linhaP = '';
    linha[((number)/2)-1-i] = '*';
    linha[((number)/2)+i] = '*';
		// criando a string a ser impressa
    for(let i = 0;i < number;i+=1) {
      linhaP += linha[i];
    }
    console.log(linhaP);
		// resetando para ' '
		for(let i = 0;i < number;i+=1) {
			linha[i] = ' ';
		}
  }
	let linhaP = '';
	for(let i = 0;i < number;i+=1) {
    linhaP += '*'
	}
	console.log(linhaP)
}
