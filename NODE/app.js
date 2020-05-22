var http = require('http');
var fs = require('fs')

// var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf-8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// myReadStream.pipe(myWriteStream);




//*read and writing streams*
// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:-');
//     myWriteStream.write(chunk)
// });



//*creating a server*
var server = http.createServer(function(req, res){
    console.log('request was made ' + req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        fs.createReadStream(__dirname + '/Urban Planning _ Data Hackathon.html').pipe(res);
        
    }
});

server.listen(3000, '127.0.0.1')
console.log ('yo, now listening to port 3000'); 