const fs = require('fs');

process.chdir(__dirname); //纠正工作目录为当前程序的路径

// fs.stat('./html/index.html', (err, info) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(info.isFile());
//     console.log(info.isDirectory());
// })

// fs.mkdir('./css', (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("yes");
// })

// fs.writeFile('./list.md','### good night', (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("yes");
// })

// fs.appendFile('./list.md', "\n### goodmorning", (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("yes");
// })

// fs.readFile('./list.md', (err, data)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// fs.readdir('../', (err, files)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);
// })

// fs.rename("./list2.md", "./md/list2.md", (err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("ok");
// });

// fs.rmdir('./md', (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("ok");
// });

// fs.unlink('./md/list2.md',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("ok");
// })