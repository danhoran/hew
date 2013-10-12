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
  });

}).call(this);