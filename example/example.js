var namesgenerator = require('../namesgenerator')
  , names = {}
  , i
  , name
  ;

var checker = function(name) {
  return names.hasOwnProperty(name);
};

for (i = 0; i < 10; i++) {
  name = namesgenerator(checker);
  if (name) {
    console.log(name);
  } else {
    console.log('ruhroh!!!');
  }
}

