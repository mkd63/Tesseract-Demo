var http = require('http');
var tesseract = require('tesseract.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
       console.log(text);
       res.end(text);
  })
    res.end('Hello World!');
}).listen(8080);
