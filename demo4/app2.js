const mkdir = require('mkdirp');

process.chdir(__dirname);

mkdir('./a/b/c').then((made)=>{console.log(made)});