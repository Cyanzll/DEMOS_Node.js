### Promise 和 异步编程
实现异步最简单的方式是回调函数, 假如我要按顺序连续读取文件：
```js
fs.readFile('./1.txt', (err)=>{
    if(err) {
        console.log("error");
        return;
    }
    fs.readFile('./2.txt', (err)=>{
        if(err) {
            console.log("error");
            return;
        }
        // fs...
    });
})
```
如果要继续读取更多文件，将以这样的形式连环嵌套下去，因此在形式上并不简单

下面用Promise改写这个任务，
要理解以下的代码，首先要知道：
- Promise对象一旦创建就立即执行，封装在函数中比较常见
- Promise.then() 中传入的也是回调函数，then()方法返回的也是一个Promise实例，因此可以继续.then()下去。但这里要注意：
 - 如果该回调函数返回一个值，则下一个then()的回调函数将把这个值作为参数；
 - 如果该回调函数返回了一个Promise对象，则下一个then()的处理方式与第一个是类似的

延伸知识（涉及到Event Loop，以后再了解）
```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
```
首先，上述代码的console.log(2)会正常执行，这是因为resolve()会改变Promise对象的状态，但却不会终结这个函数的执行；
然后，console.log(2)将先于console.log(r)执行，这是因为这里的Promise是立即resolve的（没有实际异步的过程，理论上一旦创建就会
理解执行resolve(), 根据Event Loop规则，这样的Promise将在末尾执行，晚于本轮循环的同步任务）

```js
//Promise形式
function todo(path) {
    const promise = new Promise((resolve, reject)=>{ 
        fs.readFile(path, (err, data)=>{
            if(err) {
                console.log(err);
                reject(err);
            }
            resolve(data);
        })
    })
    return promise;
}

//return Promise                return Promise
todo('./1.txt').then( result => todo('./2.txt')).then( result => {console.log(result)} );
```

理解上述大部分内容后，这个应该就能看懂了
```js
handleFile("./1.txt")
.then((data) => {todo(data.toString()); return handleFile("./2.txt")})
.then((data) => {todo(data.toString()); return handleFile("./3.txt")})
.then((data) => {todo(data.toString()); return handleFile("./4.txt")})
.catch((ex) => {console.log("Error 如上述所示")});
```