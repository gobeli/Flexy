// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/grid.css': 'src/grid.scss'
        }
      }
    },
    
    autoprefixer:{
      build:{
        options: { 
          outputStyle: 'compressed'
        },
        files:{
          'dist/grid.css': 'dist/grid.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/grid.min.css': 'dist/grid.css'
        }
      }
    },
    
    watch: {
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass','autoprefixer','cssmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer','cssmin','watch']);

};
