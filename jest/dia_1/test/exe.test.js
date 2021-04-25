const fromExe = require('../exe');

describe('verificando Sum', () => {
  test('4 + 5 é 9', () => {
    expect(fromExe.sum(4,5)).toBe(9);
  });
  test('teste se 0 + 0 é 0', () => {
    expect(fromExe.sum(0,0)).toBe(0);
  });
  test('se sum lança erro se passado uma string', () => {
    expect(() => { fromExe.sum(4, '5') }).toThrow();
  });
  test('se a msg do erro é parameters must be numbers', () => {
    expect(() => { fromExe.sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});
