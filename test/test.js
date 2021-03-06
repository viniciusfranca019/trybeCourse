function techList(testArray, name) {
  testArray.sort();
  let userArray = [];
  if (testArray.length === 0) {
    userArray = 'Vazio!';
  } else {
    for (let i = 0; i < testArray.length; i += 1) {
      userArray[i] = {
        name: name,
        tech: testArray[i],
      };
    }
  }
  return userArray;
}
let test = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let u = techList(test,'Lucas');
console.log(u)
