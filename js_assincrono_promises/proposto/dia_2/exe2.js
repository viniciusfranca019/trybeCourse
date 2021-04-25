const creatSum = () => {
  const prome = new Promise((resolve, reject) => {
    const arr = [];
    const randomNum = () => Math.round(Math.random() * 50) ** 2;
    for (let i = 0; i < 10; i += 1) {
      arr.push(randomNum());
    }
    const sum = arr.reduce((acc, curr) => acc += curr, 0);
    (sum < 8000) ? resolve(sum) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
  })
  prome
  .then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])
  .then((arr) => arr.reduce((acc, curr) => acc += curr, 0))
  .then((result) => console.log(`a soma é ${result}`))
  .catch((msg) => console.log(msg));
}
creatSum();