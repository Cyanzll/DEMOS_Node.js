const http = require('http');
const fs = require('fs');
process.chdir(__dirname);

http.createServer(function (req, res) {
	let pathname = req.url;
	console.log(pathname);
	pathname = pathname === '/' ? "/index.html" : pathname;
	if(pathname !== "/favicon.ico") { //屏蔽 /favicon.ico
		fs.readFile('./wwwroot' + pathname, (err, data) => {
			if(err) {
				console.log(err);
				res.writeHead(404, {'Content-Type': 'text/html;charser="utf-8"'});
				res.end('<head><meta charset="utf-8"></head><h1>404 Not Found</h1><h2>我他妈当场没找到</h2>');
			}
			console.log("正常请求 " + pathname);
			res.writeHead(200, {'Content-Type': 'text/html;charser="utf-8"'});
			res.end(data);
		})
	}
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');