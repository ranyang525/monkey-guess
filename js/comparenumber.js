var _ = require('../lib/lodash-2.4.1/lodash.js');

function GuessNumber() {
}

GuessNumber.prototype.CompareNumber = function(answer, guess) {

  var count_A = 0;
  for (var i = 0; i < 4; i++) {
    if (answer[i] == guess[i]) {
      count_A++;
    }
  }
  var count_total = _.intersection(answer, guess).length;
  var count_B = count_total - count_A;
  return count_A + "A" + count_B + "B";
};
module.exports = GuessNumber;
