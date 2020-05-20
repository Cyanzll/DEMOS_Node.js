//检测当前目录下是否存在upload目录，有则不作操作，没有则新建目录

const fs = require('fs');
let path = './upload/';

process.chdir(__dirname); //纠正工作目录为当前程序的路径

fs.stat(path, (err, stats)=>{
    if(err) {
        mkdir();
        return;
    }
    if(stats.isFile()) {
        fs.unlink(path, (err)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log("删除upload文件");
        })
        mkdir();
    }
    if(stats.isDirectory()) {
        console.log("目录已存在");
    }
});

function mkdir() {
    fs.mkdir(path, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("创建成功");
    });
}