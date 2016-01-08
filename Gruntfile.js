// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/flexy.css': 'src/default.scss'
        }
      }
    },
    
    // autoprefixer:{
    //   build:{
    //     options: { 
    //       outputStyle: 'compressed'
    //     },
    //     files:{
    //       'dist/flexy.css': 'dist/flexy.css'
    //     }
    //   }
    // },

    cssmin: {
      build: {
        files: {
          'dist/flexy.min.css': 'dist/flexy.css'
        }
      }
    },
    
    watch: {
      css: {
        files: ['src/*.scss'],
        tasks: ['sass','cssmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','cssmin','watch']);

};
