const express     = require('express');
const bodyParser  = require('body-parser');
const crypto      = require('crypto');
const Users       = require('./db/users');
const app         = express();

const users   = new Users();

app.use(bodyParser.urlencoded());

app.post('/register', function(req, res){
    var password = crypto.createHash('md5').update(req.body.password).digest("hex");
    users.register(req.body.username, password)
        .done( (result) => {
            res.send("Data successfully registered");            
        })
});

app.post('/login', function(req, res){

});

app.get('/lalala', function(req, res) {
    res.send("Hallo lalala");
});

app.get('/get-transaction', function(req, res){
    dbWrapper.getTransaction(req.param('user_id'), function(error, data){
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            console.log(row);
}
    });
    res.send("Done");
});

app.post('/add-transaction', function(req, res){
    dbWrapper.addTransaction(req.body);
    res.send("Done");
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});
