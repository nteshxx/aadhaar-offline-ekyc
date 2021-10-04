const express = require('express')
const bodyParser= require('body-parser')

//CREATE EXPRESS APP
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html'); 
});

app.get('/getip', (req, res) => {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    console.log(ip);
    res.status(200).json(ip)
})

app.use(require('./routes/verify'))
 
app.listen(process.env.PORT, () => console.log('Server started on port ', PORT));
