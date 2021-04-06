
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const countAupper = names.reduce((acc, name) => acc += name.split('A').length - 1, 0);
  const countAlower = names.reduce((acc, name) => acc += name.split('a').length - 1, 0);
  return countAlower + countAupper;
}

assert.deepStrictEqual(containsA(), 20);