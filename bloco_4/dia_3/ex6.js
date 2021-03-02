let number = 9 ;
let numberD = 1;
for(let i = 2;i <= number;i += 1) {
  if((number%i == 0)) {
    numberD += 1;
  }
}
if(numberD == 2) {
  console.log(number+' é primo');
} else {
  console.log(number+' não é primo');
}