const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const DbWrapper = require('./db');
const dbWrapper = new DbWrapper();

app.use(bodyParser.urlencoded());

app.get('/', function(req,res){
    res.send('Hello world');
});

app.post('/register', function(req,res){
    console.log(req.body);
    dbWrapper.register(req.body.username, req.body.password);
    res.send("OK");
});

app.listen(3000, function(){
    console.log('Example');
});
