const express = require('express')
const bodyParser= require('body-parser')
const PORT = 5000

//CREATE EXPRESS APP
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html'); 
});

app.use(require('./routes/verify'))
 
app.listen(PORT, () => console.log('Server started on port ', PORT));