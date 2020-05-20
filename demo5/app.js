const fs = require('fs');

process.chdir(__dirname);

// //假如我要按顺序连续读取文件
// fs.readFile('./1.txt', (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     fs.readFile('./2.txt', (err)=>{
//         if(err) {
//             console.log("error");
//             return;
//         }
//         fs...
//     });
// })

//Promise形式
function handleFile(path) {
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

function todo(data) {
    console.log(data);
}

//return Promise                return Promise
handleFile("./1.txt")
.then((data) => {todo(data.toString()); return handleFile("./2.txt")})
.then((data) => {todo(data.toString()); return handleFile("./3.txt")})
.then((data) => {todo(data.toString()); return handleFile("./4.txt")})
.catch((ex) => {console.log("Error 如上述所示")});