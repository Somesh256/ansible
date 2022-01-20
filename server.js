var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.send("Hello World!");
});
app.get('/3000', function(req, res){
   res.send("Hello World!");
});

app.listen(5000, '172.31.44.199');
app.listen(3000, '172.31.44.199');
