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
          'dist/hew.min.js': ['src/hew.js', 'src/hew-utils.js', 'src/hew-console.js']  
        }
      }
    },

    jasmine: {
      src: 'dist/**/*.js',
      options: {
        specs: 'test/*.spec.js',
        helpers: 'test/helper/*.helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('build', ['clean', 'uglify']);
  grunt.registerTask('default', ['build', 'jasmine']);
}