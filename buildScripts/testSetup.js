// This file isn't transpiled, so must use commonJS and ES5

//Register babel to transpile before test run
require('babel-register');

//Disable webpack feature that Mocha doesn't understand
require.extensions['.css'] = function(){};
