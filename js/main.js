var CreatNumber = require('../js/creatnumber.js');
var GuessNumber = require('../js/comparenumber.js');
var readline = require('readline');
var _ = require('../lib/lodash-2.4.1/lodash.js');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('_ _ _ _');
console.log('Welcome!Please input your number(6)');
var creatnumber = CreatNumber();
var guessnumber = new GuessNumber(6);

rl.on('line', function (number) {

  if (_.toArray(creatnumber.toString()).toString() === _.toArray(number).toString()) {
    var start = 'Congratulations';
    rl.close();
  } else {
    var start = guessnumber.CompareNumber(_.toArray(creatnumber.toString()), _.toArray(number),number)
    + 'Please input your number('+ guessnumber.times + ')';
  }
  if (guessnumber.times === 0) {
    console.log('right answers :' + creatnumber.toString());
    rl.close();
  }

  console.log(start);
});
