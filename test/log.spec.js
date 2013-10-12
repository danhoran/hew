(function() {

  describe('The interpolation method', function() {
    var log;

    beforeEach(function() {
      log = new Hew({debug: false});
    });

    // Ensure a string is returned
    it('should return a string', function() {
      var result = log.error('Test String');
      
    });

    // Ensure the message contains a timestamp
    it('should contain a timestamp', function() {

    });
  });

}).call(this);