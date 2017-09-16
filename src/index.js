const express     = require('express');
const bodyParser  = require('body-parser');
const crypto      = require('crypto');
const Users       = require('./db/users');
const app         = express();

const users   = new Users();

app.use(bodyParser.urlencoded());

app.post('/register', function(req, res){
    var password = crypto.createHash('md5').update(req.body.password).digest("hex");
    users.register(req.body.username, password);
    res.send("Data successfully registered");
});

app.post('/login', function(req, res){

});

app.get('/transaction', function(req, res){
    var result = dbWrapper.getTransaction(req.param('user_id'));
    res.send("Selesai");
    // res.send(result);
    // res.send(req.param('user_id'));
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});
