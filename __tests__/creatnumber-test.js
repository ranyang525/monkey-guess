jest.dontMock("../js/creatnumber.js");
var CreatNumber = require('../js/creatnumber.js');

describe('CreatNumber',function() {

  it("should be four length ", function () {
    
    var number = CreatNumber().toString()

    expect(number.length).toEqual(4);
  });
});
