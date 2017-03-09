var corsConfig = require('../../src/cors');

test('request origin is nategay.me', done => {
  var req = {
    header: (type) => {
      if (type === 'Origin') {
        return 'https://nategay.me/'
      }
    }
  }

  function callback(nullVar, config) {
    expect(config.origin).toBe(true);
    done();
  }

  corsConfig(req, callback);
});

test('request origin is localhost', done => {
  var req = {
    header: (type) => {
      if (type === 'Origin') {
        return 'http://localhost/'
      }
    }
  }

  function callback(nullVar, config) {
    expect(config.origin).toBe(true);
    done();
  }

  corsConfig(req, callback);
});

test('request origin is example.com', done => {
  var req = {
    header: (type) => {
      if (type === 'Origin') {
        return 'https://example.com/'
      }
    }
  }

  function callback(nullVar, config) {
    expect(config.origin).toBe(false);
    done();
  }

  corsConfig(req, callback);
});
