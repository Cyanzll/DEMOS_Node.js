### Generator 和 Async await

#### Generator
Generator函数的异步实践：用Generator函数来实现一个先后读取文件的操作
```js
process.chdir(__dirname);
var fs = require('fs');

var readFile = function(path) {            //readFile的Promise包装
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

var g = gen();
//   Promise                  f1赋值，并执行下一段
g.next().value.then((data)=>(g.next(data).value)).then((data)=>{console.log(g.next(data).done)});
//或者：
g.next().value.then((data) => {
    g.next(data).value.then((data)=>{
        g.next(data);
    })
})

```
看得出来，如果没有自动执行器，Generator函数显得还是不够方便

#### Async await
Async函数与Generator函数都是异步操作的包装，它让这些操作写起来像同步操作一样。
最重要的是，它不需要什么自动执行器，因为它是内置自动执行器的。

```js
const asyncgen = async function() {
    const f1 = await readFile('./1.txt') //可以把这个赋值过程想象成取得.then((data)=>{})中的data的过程
    const f2 = await readFile('./2.txt')
    console.log(f1.toString());
    console.log(f2.toString())
}
asyncgen(); //直接执行，简单且舒适
```

async：说明函数有异步操作
await：“等等我！” 说明该表达式需要等待结果

async函数返回的是一个Promise对象
await后面一般是Promise对象
后面将详解。

```js
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
async function timeout2(ms) {     //async函数会返回Promise对象，所以可以这样改写
    await new Promise((resole)=>{
        setTimeout(resolve, ms);
    })
}

async function asyncPrint2(value, ms) {
    await timeout2(ms);
    console.log()
}
```

##### async
- （重要）Async函数内部**return**的值，会成为then方法回调函数的参数
- （重要）Async函数内部抛出错误，会导致返回的Promise对象编程reject状态，抛出错误对象由.catch()回调捕捉
- Async函数返回了一个Promise对象，该Promise对象只有等到函数体内所有的await后面的Promise执行完成，
  才会发生状态改变（然后才能执行.then()中的回调函数）

##### await
- 正常情况下，await后面接一个Promise对象；否则直接返回对应的值
- await后面的Promise对象如果变为reject状态，则会被.catch()接收到。（重要）reject的参数将被.catch()回
  调函数接收，甚至不需要return

asnyc await 极大简化了异步操作的编写，难点主要在于错误处理，我会在之后继续学习。





