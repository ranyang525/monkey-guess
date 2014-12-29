jest.dontMock("../js/comparenumber.js");
var GuessNumber = require('../js/comparenumber.js');

describe('GuessNumber',function() {
  describe('#CompareNumber', function() {

    var compare = new GuessNumber();

    it('should get the right compare', function() {
      expect(compare.CompareNumber([1,2,3,4],[1,2,3,4])).toEqual('4A0B');
      expect(compare.CompareNumber([1,2,3,4],[4,3,2,1])).toEqual('0A4B');
      expect(compare.CompareNumber([1,2,3,4],[5,6,7,8])).toEqual('0A0B');
      expect(compare.CompareNumber([1,2,3,4],[1,2,4,3])).toEqual('2A2B');
    });
  });
});
