jest.dontMock("../js/creatnumber.js");
var CreatNumber = require('../js/creatnumber.js');
var _ = require('../lib/lodash-2.4.1/lodash.js');

describe('CreatNumber',function() {

  it('should be four length', function () {

    var number = CreatNumber().toString().length;

    expect(number).toEqual(4);
  });
  it('should be not repeat',function() {

    var array = _.toArray(CreatNumber().toString());
    var arrays = _.uniq(array);

    expect(array).toEqual(arrays);

  });
});
