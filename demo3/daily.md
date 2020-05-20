1. fs.stat(路径, options, (err, stats)=>{}) 
检测是文件还是目录
- err 处理错误信息
- stats 具有以下方法：
isFile(): boolean;
isDirectory(): boolean;
isBlockDevice(): boolean;
isCharacterDevice(): boolean;
isSymbolicLink(): boolean;
isFIFO(): boolean;
isSocket(): boolean;

2. fs.mkdir(创建目录路径, 可选的mode, (err)=>{}) 
创建目录

3. fs.writeFile(文件路径filename, 写入内容data, option(权限), (err)=>()) 
创建并写入文件
若目标文件已存在，则会把这个文件替换

4. fs.appendFile(文件路径filename, 写入内容data, option(权限), (err)=>()) 
追加文件，若已存在则将data追加到后面，
若不存在则创建文件再写入

5. fs.readFile 
读取文件
fs.readFile(文件路径, (err, data)=>{})
data为buffer，可以用toString()转换

6. fs.readdir(路径, (err, files)=>{}) 
读取目录，files为Stirng[]形式

7. fs.renamefs.rename("./list2.md", "./md/list2.md", (err)=>{});
重命名/ 移动文件
以上就是一个移动文件的实例，要注意目标目录必须存在。

8. fs.rmdir(目录, (err)=>{}); 删除目录
这个目录必须是空的，否则：
Error: ENOTEMPTY: directory not empty

9. fs.unlink('./md/list2.md',(err)=>{}) 删除文件

### 问题：工作目录与当前路径不相同
__dirname: 当前文件所在目录 绝对路径
__filename: 当前文件的绝对路径
process.cwd() : 返回当前脚本的工作目录
process.chdir() : 改变工作目录
解决方法就是改变程序的工作目录了