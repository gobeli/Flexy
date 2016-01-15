// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/flexy.css': 'src/default.scss',
          'dist/demo.css': 'src/demo.scss'
        }
      }
    },
    
    autoprefixer:{
       build:{
         options: { 
           outputStyle: 'compressed'
         },
         files:{
             'dist/demo.css': 'dist/demo.css'
         }
       }
     },

    cssmin: {
      build: {
        files: {
         'dist/flexy.min.css': 'dist/flexy.css',
         'dist/demo.min.css': 'dist/demo.css'
        }
      }
    },
    
    watch: {
      css: {
        files: ['src/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer','cssmin','watch']);

};
