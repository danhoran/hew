module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['dist']
    },

    uglify: {
      dist: {
        options: {
          mangle: {
            except: ['Hew']
          }
        },
        files: {
          'dist/hew.min.js': ['src/hew.js'],
          'dist/hew-console.min.js': ['src/hew-console.js']
        }
      }
    },

    jshint: {
      options: {
        boss: true,
        browser: true,
        curly: false,
        devel: true,
        eqeqeq: false,
        eqnull: true,
        expr: true,
        evil: true,
        immed: false,
        laxcomma: true,
        newcap: false,
        noarg: true,
        node: true,
        smarttabs: true,
        sub: true,
        trailing: true,
        undef: true,
        globals: {
          Hew: true,
          define: true,
          require: true
        }
      },
      files: [
        'Gruntfile.js',
        'src/*.js'
      ]
    },

    jasmine: {
      src: 'dist/**/*.js',
      options: {
        specs: 'test/*.spec.js',
        helpers: 'test/*.helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('build', ['clean', 'uglify', 'jshint']);
  grunt.registerTask('default', ['build', 'jasmine']);
};