'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
            pkg: {
      name: 'grunt-jest-enforcer'
    },

         jest_enforcer: {
            options: {
            },
            files: {
                src: [ './sample_source/**/test*.js*' ],
                dest: './sample_output/requireFiles.js',
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['jest_enforcer']);

};

