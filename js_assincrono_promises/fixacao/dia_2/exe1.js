const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);
  
  return number <= 5 ? reject(console.log(`Que fracasso =( Nosso número foi ${number}`))
    : resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
  });
  
//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));