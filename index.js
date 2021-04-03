var http = require('http');
var tesseract = require('tesseract.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var textDat = "";
  tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
       console.log(text);
       textDat = text; 
       res.write('image data \n');
       res.write(textDat);
        res.end();
  })
    res.write(textDat)
    
    
}).listen(8080);
