(function() {

  describe('The interpolation method', function() {
    var log;

    beforeEach(function() {
      log = new Hew({debug: false});
    });

    // Ensure a simple string is returned successfully
    it('should return a simple string', function() {
      var result = log.error('Test String');
      expect(result).toContain('Test String');
    });

    // Ensure strings are interpolated
    it('should interpolate a string when parsed string type', function() {
      var result = log.error('Test String {}', '1234');
      expect(result).toContain('Test String 1234');
    });

    // Ensure number are interpolated
    it('should interpolate a string when parsed number type', function() {
      var result = log.error('Test String {}', 1234);
      expect(result).toContain('Test String 1234');
    });

    // Ensure objects are not valid interpolation arguments
    it('to interpolate a string when parse objects', function() {
      var result = log.error('Test String {}', {id: 1234});
      expect(result).toContain('"id": 1234');
    });

    // Test for custom log support
    it('should interpolate custom log levels', function() {
      var result = log.custom('event', ['Test string {}', 1234]);
      expect(result).toContain('Test string 1234');
    })
  });

}).call(this);