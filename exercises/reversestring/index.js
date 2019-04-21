// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  let i = str.length - 1;
  for (i; i > -1; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = reverse;

function reverse1(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
  // return str.split('').reverse().join('');
}

function reverse2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
  // return str.split('').reduce((rev, char) => char + rev, '');
}
