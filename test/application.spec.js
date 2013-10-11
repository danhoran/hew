(function() {

  describe('The core application', function() {
    var log;

    beforeEach(function() {
      log = new Hew();
    });

    // Ensure Hew class is exported from library
    it('should export the Hew constructor', function() {
      expect(log).toBeDefined();
    });

    // Ensure semantic version is set (defined)
    it('should return a semantic version', function() {
      var version = log.VERSION,
          length = version.split('.').length;

      expect(version).toBeDefined();
      expect(length).toBe(3);
    });

  });

}).call(this);