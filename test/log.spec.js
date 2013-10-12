(function() {

  describe('The public log methods', function() {
    var log;

    beforeEach(function() {
      log = new Hew();
    });

    // Ensure a simple string is returned successfully
    it('should return a log string', function() {
      var result = log.error('Test String');
      expect(result).toEqual('Test String');
    });

    // Ensure strings are interpolated
    it('should interpolate a string when parsed string type', function() {
      var result = log.error('Test String #{}', '2');
      expect(result).toEqual('Test String #2');
    });

    // Ensure number are interpolated
    it('should interpolate a string when parsed number type', function() {
      var result = log.error('Test String #{}', 2);
      expect(result).toEqual('Test String #2');
    });

    // Ensure objects are not valid interpolation arguments
    it('should throw an error when attempting to interpolate objects', function() {
      var result = log.error('Test String #{}', {number: 3});
      expect(result).toThrow();
    });
  });

}).call(this);