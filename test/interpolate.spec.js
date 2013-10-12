(function() {

  describe('The interpolation method', function() {

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
    it('should interpolate a string when parse objects', function() {
      var result = log.error('Test String {}', {id: 1234});
      expect(result).toContain('"id": 1234');
    });

    // Ensure a function, which returns a string, can be interpolated
    it('should accept a function, which returns a string, in place of an interpolation string', function() {
      var result = log.error(utils.returnStr());
      expect(result).toContain('foo');
    });

    // Ensure a function, which returns a number, can be interpolated
    it('should accept a function, which returns a number, in place of an interpolation string', function() {
      var result = log.error(utils.returnNum());
      expect(result).toContain(2);
    });

    // Ensure a function, which returns an object, can be interpolated
    it('should accept a function, which returns a object, in place of an interpolation string', function() {
      var result = log.error(utils.returnObj());
      expect(result).toContain('"name": "foo"');
      expect(result).toContain('"key": 2');
    });

    // Test for custom log support
    it('should interpolate custom log levels', function() {
      var result = log.custom('event', ['Test string {}', 1234]);
      expect(result).toContain('Test string 1234');
    });
  });

}).call(this);