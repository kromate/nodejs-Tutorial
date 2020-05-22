var express = require('express');

var app = express();

app.set('view engine', ejs)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Rant/index.html')
})
app.get('/display', function(req, res){
  res.sendFile(__dirname + '/Rant/display.html')
})

app.get('/profile/:id',  function(req,res){
  res.send('you request to profile id  of ' + req.params.id)
})

app.listen(3000);
console.log('yo, now listening to port 3000'); 
