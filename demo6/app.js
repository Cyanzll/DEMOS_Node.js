// Generator


// var a;
// var b;

// function* gen() {
//     a = yield 'stage1'; //理解：每次执行到下一个yield
//     b = yield 'stage2';
//     return 'end';
// }

// function* f() {
//     for(var i = 0; true; i++) {
//         var reset = yield i;
//         if(reset) {
//             i = -1;
//         }
//     }
// }

// var fetch = require('node-fetch')

// function* gen() {
//     var url = "https://api.github.com/users/github";
//     var result = yield fetch(url);
//     console.log(result.bio);
// }
// var g = gen();
// var result = g.next(); //{value: Promise, done: false}

// result.value.then((data)=>{
//     return data.json();
// }).then(data => {
//     g.next(data);
// })

//generator的异步实践


process.chdir(__dirname);
var fs = require('fs');

var readFile = function(path) { //readFile的Promise包装
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
            if(err) {
                return reject(error);
            }
            resolve(data);
        })
    })
}

function* gen() {
    var f1 = yield readFile('./1.txt')
    var f2 = yield readFile('./2.txt')
    console.log(f1.toString());
    console.log(f2.toString())
}

//首先，不使用自动执行
// var g = gen();
// //   Promise                  f1赋值，并执行下一段
// g.next().value.then((data)=>(g.next(data).value)).then((data)=>{console.log(g.next(data).done)});
// //或者：
// g.next().value.then((data) => {
//     g.next(data).value.then((data)=>{
//         g.next(data);
//     })
// })

//接下来，试着封装一个自动执行器
// PS: 我发现我不会

//如果没有自动执行器，generator函数显得还是不够方便

//Async await
const asyncgen = async function() {
    const f1 = await readFile('./1.txt') //可以把这个赋值过程想象成取得.then((data)=>{})中的data的过程
    const f2 = await readFile('./2.txt')
    console.log(f1.toString());
    console.log(f2.toString())
}

asyncgen(); //直接执行，简单且舒适

//async：函数有异步操作
//await：等等我！说明该表达式需要等待结果

//async函数返回的是一个Promise对象
//await后面一般是Promise对象

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

//在async函数中封装异步操作
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint("Hello", 1000);

//写法2
async function timeout2(ms) {     //async函数会返回Promise对象
    await new Promise((resole)=>{
        setTimeout(resolve, ms);
    })
}

async function asyncPrint2(value, ms) {
    await timeout(ms);
    console.log()
}




