(function() {

  describe('The interpolation method', function() {
    var log;

    beforeEach(function() {
      log = new Hew({debug: false});
    });

    // Ensure a string is returned
    it('should return a string', function() {
      var result = log.error('Test String');
      expect(typeof(result)).toBe('string');
    });

    // Ensure the message contains a timestamp
    it('should contain a timestamp', function() {
      var result = log.error('Test string'),
            substring = result.substring(1, 10),
            date = new Date( substring );

      expect(date).not.toBe('Invalid Date');
    });
  });

}).call(this);