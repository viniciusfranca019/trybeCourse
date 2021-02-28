// ex 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length ;i+=1){
  console.log(numbers[i]);
}

// ex2
let sum = 0;
for(let i = 0; i < numbers.length ;i+=1){
  sum += numbers[i];
}
console.log('a soma é '+sum)

// ex 3

let mediaArit = sum/numbers.length;
console.log('a média aritmetica é '+mediaArit);

// ex 4

if(mediaArit > 20) {
  console.log('valor é maior que 20');
} else {
  console.log('valor é menor que 20');
}

// ex 5

let maiorNumber = numbers[0];

for(let i = 0; i < numbers.length ;i += 1) {
  if(numbers[i] > maiorNumber) {
    maiorNumber = numbers[i];
  }
}
console.log('o maior numero é '+maiorNumber)

// ex 6

let oddNumber = [];

for(let i = 0; i < numbers.length ;i += 1) {
  if(numbers[i] % 2 !== 0) {
    oddNumber.push(numbers[i]);
  }
}
if(oddNumber.length == 0){
  console.log('não há número impar');
} else {
  console.log('os numeros impares são '+oddNumber)
}

// ex 7

let menorNumber = numbers[0]

for(let i = 0; i < numbers.length ;i += 1) {
  if(numbers[i] < menorNumber) {
    menorNumber = numbers[i];
  }
}
console.log('o menor numero é '+menorNumber);