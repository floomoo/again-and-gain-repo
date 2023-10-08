// Write your code here
module.exports = function (grunt) {

    grunt.initConfig({
      // Configure Jest
      jest: {
        options: {
          coverage: true,
          testPathPattern: "**/*.test.js"
        }
      },
  
      // Configure watch task
      watch: {
        js: {
          files: ["**/*.test.js"],
          tasks: ["jest"]
        }
      }
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("jest", "Run Jest", function () {
      const done = this.async();
      const exec = require("child_process").exec;
      exec("npx jest --config=jest.config.js", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err ? false : true);
      });
    });
  
    // Register Grunt tasks
    grunt.registerTask("default", ["jest", "watch"]);
    grunt.registerTask("test", ["jest"]);
  };