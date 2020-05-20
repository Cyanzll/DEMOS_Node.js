// Generator
var a;
var b;

function* gen() {
    a = yield 'stage1'; //理解：每次执行到下一个yield
    b = yield 'stage2';
    return 'end';
}

function* f() {
    for(var i = 0; true; i++) {
        var reset = yield i;
        if(reset) {
            i = -1;
        }
    }
}

var fetch = require('node-fetch')

function* gen() {
    var url = "https://api.github.com/users/github";
    var result = yield fetch(url);
    console.log(result.bio);
}
var g = gen();
var result = g.next(); //{value: Promise, done: false}

result.value.then((data)=>{
    return data.json();
}).then(data => {
    g.next(data);
})

var gen = function* () {
    var f1 = yield readFile('/1.txt');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

var co = require('co');

