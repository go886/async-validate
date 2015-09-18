var expect = require('chai').expect
  , Schema = require('../../index')
  , descriptor = require('../fixtures/schema/assigned-rule');

describe('async-validate:', function() {

  it('should access rule property from validator function', function(done) {
    var schema = new Schema(descriptor);
    schema.validate({id: 'mock'}, function(err, res) {
      done();
    });
  });

});
