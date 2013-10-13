(function() {

  describe('The interpolation method', function() {
    
    // Ensure a string is returned
    it('should return a string', function() {
      var result = log.error('Test String');
      expect(typeof result).toBe('string');
    });

    // Ensure the message contains a timestamp
    it('should contain a timestamp', function() {
      var result = log.error('Test String'),
          substring = result.substring(1, 10),
          date = new Date(substring);
      expect(date).not.toBe('Invalid Date');
    });

    // Ensure the correct log level is present in the message
    it('should define the correct log level in message', function() {
      var error = log.error('Test String'),
          warn = log.warn('Test String');
      expect(error).toContain('ERROR');
      expect(warn).toContain('WARN');
    });
    
  });

}).call(this);