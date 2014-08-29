module.exports = function(grunt) {

grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9001,
        hostname: 'localhost',
        keepalive: true,
        base: '.'
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);

};