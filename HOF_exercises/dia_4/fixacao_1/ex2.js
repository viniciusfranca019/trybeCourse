const numbers = [18, 19, 23, 53, 4, 20, 76, 23, 54];

const evenSum = (arr) => {
  return arr.reduce( (sum, number) => (number % 2 === 0) ? sum += number:sum);
}
console.log(evenSum(numbers));