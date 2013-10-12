(function() {

  describe('The interpolation method', function() {
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
      var result = log.error('Test String {}', '1234');
      expect(result).toEqual('Test String 1234');
    });

    // Ensure number are interpolated
    it('should interpolate a string when parsed number type', function() {
      var result = log.error('Test String {}', 1234);
      expect(result).toEqual('Test String 1234');
    });

    // Ensure objects are not valid interpolation arguments
    it('not error while interpolating unsupported types', function() {
      var result = log.error('Test String {}', {id: 1234});
      expect(result).toBe('Test String {}');
    });
  });

}).call(this);