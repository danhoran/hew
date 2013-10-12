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
      debug: true,
      endpoint: 'http://hew.io'
    };

    // Private utility methods
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
      },
      // Interpolates a string with string and number types from an array
      interpolate: function(str, arr) {
        if (str.indexOf('{') !== -1 && str.indexOf('}') !== -1) {
          var i = 0;
          return str.replace(/{([^{}]*)}/g, function (a) {
            i++;
            return typeof arr[i-1] === 'string' || typeof arr[i-1] === 'number' ? arr[i-1] : a;
          });
        }
        return str;
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
    root.VERSION = '0.0.1';

    // Is Hew running in a browser?
    root.browser = true;
    if ((typeof module !== 'undefined') && module.exports) {
      root.browser = false;
    }

    // Default log method, returns log string
    // To call this method directly use: Hew.custom('event', ['<message>', arg1, arg2]);
    root.custom = function() {
      var argArr = Array.prototype.slice.call(arguments[1], 1),
          message = utils.interpolate(arguments[1][0], argArr);

      return message;
    };

    // [ERROR]: Error-level logging
    root.error = function() { return root.custom('error', arguments); };

    // [WARN]: Warn-level logging
    root.warn = function() { return root.custom('warn', arguments); };

    // [INFO]: Info-level logging
    root.info = function() { return root.custom('info', arguments); };

    // [DEBUG]: Debug-level logging
    root.debug = function() { return root.custom('debug', arguments); };

    // [TRACE]: Trace-level logging
    root.trace = function() { return root.custom('trace', arguments); };

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