beforeEach(function() {
    log = new Hew({debug: false});

    utils = {
      returnStr: function() {
        return 'foo';
      },
      returnNum: function() {
        return 2;
      },
      returnObj: function() {
        var obj = {
          name: 'foo',
          key: 2
        };
        return obj;
      }
    }
});