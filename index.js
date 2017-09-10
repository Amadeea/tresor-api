const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.get('/', function(req,res){
    res.send('Hello world');
});

app.post('/login', function(req,res){
    console.log(req.body);
    res.send("OK");
});

app.listen(3000, function(){
    console.log('Example');
});
