## NPM

### www.npmjs.com
### npm install package
### --save: write in package.json //自动写入package.json
有了--save, 依赖包信息会写入到dependencies(package.json), 在其他环境下，直接在目录下运行npm i即可。
### node_modules entry:index.js
### npm list //查看安装的包
### npm info axios //查看版本信息
### npm install axios@2.1.0 //指定版本安装(重要)

## package.json

- 创建package.json : npm init 
### 字段解释：
1. dependencies:
"axios": "^2.2.1"
^ : 后两位取最新
~ : 最后一位取最新
* : 三位都取最新
不加标识符 : 指定版本安装
这些标识符会影响npm i命令安装的包版本

2. devDenpendencies
使用 npm install node_modules --save-dev 就会写入到devDenpendencies中

