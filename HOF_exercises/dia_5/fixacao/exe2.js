const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian
// se rodar o person, perceberar que o nationality n foi atribuido para dentro do obj