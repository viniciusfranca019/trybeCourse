let phoneNumber = [1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]
function intervalVerificator (phoneNumber) {
  let interval = 0;
  let isInCond = true;
  for (let i = 0; i < phoneNumber.length ;i += 1) {
    if ((phoneNumber[i] > 9) || (phoneNumber[i] < 0)) {
      interval += 1
    }
  }
  if (interval > 0) {
    isInCond = false;
  } else {
    isInCond = true
  }
  return isInCond
}
function repeatVerificator (phoneNumber) {
  let reapt = 0;
  let trueOrNot = '';
  for(let i = 0; i < phoneNumber.length; i += 1) {
    for (let j = 0; j < phoneNumber.length; j += 1) {
      if (phoneNumber[i] === phoneNumber[j]) {
        reapt += 1;
      }
    }
    if (reapt > 2) {
      trueOrNot = false;
    }
    reapt = 0;
  }
  return trueOrNot
}
function generatePhoneNumber(phoneNumber) {
  let numberExt = '';
  let interval = intervalVerificator(phoneNumber);
  let moreThan3 = repeatVerificator(phoneNumber);
  if (phoneNumber.length !== 11) {
    numberExt = 'Array com tamanho incorreto.'
  } else if (interval && moreThan3) {
    numberExt = 'não é possível gerar um número de telefone com esses valores'
  } else {
    for(let i = 0; i < phoneNumber.length; i += 1) {
      numberExt += phoneNumber[i];
    }
  }
  return numberExt
}

let u = intervalVerificator(phoneNumber)
console.log(u)


