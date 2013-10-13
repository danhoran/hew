// Hew-console.js 0.0.1
// Hew plugin

// Hew may be freely distributed under the MIT license.
// For all details and documentation:
// http://hew.io

(function() {
  'use strict';

  // Top-level class
  var HewConsole = HewConsole || function() {

    // Root object
    var root = this;

    // Public API
    root.VERSION = '0.0.1';


  };

  // Export for both the browser and the server, with Nodejs support
  if ((typeof module !== 'undefined') && module.exports) {
    module.exports = HewConsole;
  }
  if (typeof ender === 'undefined') {
    this.HewConsole = HewConsole;
  }
  if ((typeof define === "function") && define.amd) {
    define("HewConsole", [], function() {
        return HewConsole;
    });
  }

}).call(this);