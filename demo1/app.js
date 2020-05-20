const http = require('http');
const url = require('url');
//使用http模块创建服务器，用url模块解析url

http.createServer((req, res) => {

  res.writeHead(200, {"Content-type":"text/html;charset='UTF-8'"}) //设置响应头

  res.write("<head><meta charset='UTF-8'></head>");

  res.write("node服务器正常运行");

  if(req.url !== "/favicon.ico") { //屏蔽/favicon.ico
    console.log(url.parse(req.url, true)); //获取请求的URL
  }

  res.end(); //结束响应

}).listen(3000);

console.log("服务器开始工作");