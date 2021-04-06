const numbers = [32, 15, 3, 2, -5, 56, 10, 112];

// const biggerNumber = (arr) => {
//   let biggerNumb = -100000000;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > biggerNumb) {
//       biggerNumb = arr[i];
//     }
//   }
//   return biggerNumb
// }

const biggerNumber = (arr) => {
  return arr.reduce((biggerNumb, number) => (biggerNumb > number) ? biggerNumb:number);
}
const xablau = biggerNumber(numbers);
console.log(xablau);