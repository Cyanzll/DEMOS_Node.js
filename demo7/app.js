process.chdir(__dirname);

const fs = require('fs');

// var arr = [];
// function itr(path) {
//     fs.readdir(path, (err, files) => {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         files.map((inpath) => {
//             fs.stat(path+'/'+inpath, (err, stats)=>{
//                 if(err) {
//                     return;
//                 }
//                 if(stats.isFile()) {
//                     console.log(path+'/'+inpath + "是个文件");
//                     arr.push(inpath);
//                 }
//                 if(stats.isDirectory()) {
//                     console.log(path+'/'+inpath + "深入中");
//                     itr(path+'/'+inpath);
//                 }
//             })
//         })
//     });
// }

//打印出wwwroot下所有目录名组成的数组
function isDir(path) {
    return new Promise((resolve, reject)=>{
        fs.stat(path, (err, stats)=>{
            if(err) {
                reject(err);
            }
            if(stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
}

function itr() {
    var path = "./wwwroot";
    var dirArr = [];
    fs.readdir(path, async (err, file)=>{
        if(err) {
            console.log(err);
            return;
        }
        for(let i = 0; i < file.length; i++) {
            if(await isDir(path + '/' + file[i])) {
                dirArr.push(file[i]);
            }
        }
        console.log(dirArr);
    })
}

itr();