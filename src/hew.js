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

    // Default config
    var config = {
      key: null,
      format: 'json',
      debug: true,
      endpoint: 'http://hew.io'
    };

    // Private utility methods
    var utils = {
      // Test for native console API
      nativeConsole: function(type) {
        if(console[type]) {
          return true;
        }
        return false;
      },
      // Returns timestamp object
      timestamp: function() {
        var date = new Date(),
            stamp = {
              day: date.getUTCDate(),
              month: date.getUTCMonth() + 1,
              year: date.getUTCFullYear(),
              time: date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds(),
              unix: Math.floor(date.getTime() / 1000)
            };
            return '[' + stamp.day + '/' + stamp.month + '/' + stamp.year + ' ' + stamp.time + '] ';
      },
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
            return typeof arr[i-1] === 'string' || typeof arr[i-1] === 'number' ? arr[i-1] : JSON.stringify(arr[i-1]);
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
    var log = root.custom = function() {
      var argArr = Array.prototype.slice.call(arguments[1], 1),
          interpolated = utils.interpolate(arguments[1][0], argArr),
          timestamp = utils.timestamp(),
          message = timestamp + interpolated;

      // Log to native console API if available else use console.log() as default
      if (config.debug === true) {
        if (utils.nativeConsole(arguments[0])) {
          console[arguments[0]](message);
        } else if (console.log) {
          console.log(message);
        }
      }
      return message;
    };

    // [ERROR]: Error-level logging
    root.error = function() { return log('error', arguments); };

    // [WARN]: Warn-level logging
    root.warn = function() { return log('warn', arguments); };

    // [INFO]: Info-level logging
    root.info = function() { return log('info', arguments); };

    // [DEBUG]: Debug-level logging
    root.debug = function() { return log('debug', arguments); };

    // [TRACE]: Trace-level logging
    root.trace = function() { return log('trace', arguments); };

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