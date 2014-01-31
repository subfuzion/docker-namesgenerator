var assert = require('assert')
  , namesgenerator = require('../namesgenerator')
  ;


// name exists
var trueChecker = function(name) {
  return true;
}

// name doesn't exist
var falseChecker = function(name) {
  return false;
}

describe('namesgenerator', function() {

  it('should generate a valid name using falseChecker', function() {
    var name = namesgenerator(falseChecker);
    assert(name);
  });

  it('should return null when using trueChecker', function() {
    var name = namesgenerator(trueChecker);
    assert(null == name);
  });

  it('should be awesome!', function() {
    var name = namesgenerator(falseChecker);
    assert(name);
    assert(isAwesome(name));
  });

});


function isAwesome(name) { 
  var coolInventorNames = true
    , easyToRemember = true
    , mildlyFunnyOnOccasion = true
    , politicallyCorrect = true;
  return coolInventorNames && easyToRemember && mildlyFunnyOnOccasion && politicallyCorrect;
};
