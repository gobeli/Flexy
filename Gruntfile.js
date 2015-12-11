// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'demo/dist/js/main.min.js': 
          [
            'bower_components/jquery/dist/jquery.js',
            'demo/src/js/*.js'
          ]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/screen.css': 'src/screen.scss',
          'demo/dist/css/screen.css': 'demo/src/sass/screen.scss'
        }
      }
    },
    
    autoprefixer:{
      build:{
        options: { 
          outputStyle: 'compressed'
        },
        files:{
          'dist/screen.css': 'dist/screen.css',
          'demo/dist/css/screen.css': 'demo/dist/css/screen.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/screen.min.css': 'dist/screen.css',
          'demo/dist/css/screen.min.css': ['demo/dist/css/prism-okaidia.css','demo/dist/css/screen.css']
        }
      }
    },
    
    watch: {
      css: {
        files: ['**/screen.scss'],
        tasks: ['sass','autoprefixer','cssmin']
      },
      js: {
        files: ['demo/src/js/main.js'],
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','autoprefixer','cssmin','uglify','watch']);

};
