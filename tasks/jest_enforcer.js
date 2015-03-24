'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('jest_enforcer', 'Create files for jest testing', function() {

        function getRelativePath(source, target) {
            var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
                targetArr = target.split(sep),
                sourceArr = source.split(sep),
                filename = targetArr.pop(),
                targetPath = targetArr.join(sep),
                relativePath = "";

            while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
                sourceArr.pop();
                relativePath += ".." + sep;
            }

            var relPathArr = targetArr.slice(sourceArr.length);
            relPathArr.length && (relativePath += relPathArr.join(sep) + sep);

            return relativePath.replace('..', '.') + filename;
        }

        this.files.forEach(function(file) {

            var fileContent = '';
            var matchedFilesList = [];

            file.src.forEach(function(f) {
                var fileName = f.replace(/\//g, '_').replace(/\./g, '_').replace(/@/g, '_').replace(/-/g, '_');
                var relativePath = getRelativePath(file.dest, f);
                matchedFilesList.push('var ' + fileName + ' = require(\'' + relativePath + '\');');
            })

            matchedFilesList.forEach(function(f) {
                fileContent = fileContent.concat(f + '\n');
            })

            grunt.file.write(file.dest, fileContent);
            grunt.log.writeln('File "' + file.dest + '" created.');
        })
    });
};