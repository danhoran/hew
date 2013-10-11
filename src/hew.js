// Hew.js 0.0.1

// Hew may be freely distributed under the MIT license.
// For all details and documentation:
// http://hew.io

(function() {
  'use strict';

  // Top-level class
  var Hew = Hew || function(userConfig) {

    // Root object
    var root = this;

    var config = {
      key: null,
      format: 'json',
      endpoint: 'http://hew.io/'
    }

    var utils = {
      // Extends destination object with source, overwriting values in source
      extend: function(destination, source) {
        var property;
        for (property in source) {
          if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            utils.extend(destination[property], source[property]);
          } else {
            destination[property] = source[property];
          }
        }
        return destination;
      }
    };

    // Fires up the engine
    // Calls extend on default config
    var initialize = function(options) {
      if (options) {
        utils.extend(config, options);
      }
    };

    // Public API
    this.VERSION = '0.0.1';

    // [ERROR]: Error-level logging
    this.error = function() {

    };

    // [WARN]: Warn-level logging
    this.warn = function() {

    };

    // [INFO]: Info-level logging
    this.info = function() {

    };

    // [DEBUG]: Debug-level logging
    this.debug = function() {

    };

    // [TRACE]: Trace-level logging
    this.trace = function() {

    };

    // Intialize application
    initialize(userConfig);
  };

  // Export for both the browser and the server, with Nodejs support
  if ((typeof module !== 'undefined') && module.exports) {
    module.exports = Hew;
  }
  if (typeof ender === 'undefined') {
    this.Hew = Hew;
  }
  if ((typeof define === "function") && define.amd) {
    define("Hew", [], function() {
        return Hew;
    });
  }

}).call(this);