# grunt-jest-enforcer

## Getting Started:


This plugin is to find all files matching a list of patterns and create a new file, which will be executed by test framework (eg. jest). The new file requires all matched files from the list above.

```shell
npm install grunt-jest-enforcer --save-dev
```


## Examples:

### Sample grunt file :

src: the list of patterens that file will match.

dest: the output file requires all matched files.

```js
	jest_enforcer: {
            options: {
            },
            files: {
                src: [ './sample_source/**/test*.js*' ],
                dest: './sample_output/requireFiles.js',
            }
        }
```


### Sample output:

The test framework (eg. jest) can run this file and you will get test coverage report for all required files.

```js
var __sample_source_test_1_js = require('./../sample_source/test_1.js');
var __sample_source_test_3_jsx = require('./../sample_source/test_3.jsx');
var __sample_source_test_4_js = require('./../sample_source/test_4.js');
```