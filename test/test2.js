function intervalVerificator (phoneNumber) {
  let interval = 0;
  let isInCond = '';
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
  let trueOrNot = true;
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
}