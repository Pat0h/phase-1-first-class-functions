function receivesAFunction(callback) {
    if (callback) {
      callback();
    } else {
      console.log('Invalid callback provided.');
    }
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      return 'I am a named function';
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
      return 'I am an anonymous function';
    };
  }