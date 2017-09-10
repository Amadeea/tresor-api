const express     = require('express');
const bodyParser  = require('body-parser');
const crypto      = require('crypto');
const DbWrapper   = require('./db');
const app         = express();

const dbWrapper   = new DbWrapper();

app.use(bodyParser.urlencoded());

app.post('/register', function(req,res){
    var password = crypto.createHash('md5').update(req.body.password).digest("hex");
    dbWrapper.register(req.body.username, password);
    res.send("Data successfully registered");
});

app.listen(3000, function(){
    console.log('Connected');
});
