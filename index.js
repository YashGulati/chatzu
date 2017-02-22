var express = require('express')
var app = express()
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: false}))
var ejs = require('ejs')
var stylus = require('stylus')
var path = require('path')
var port = process.env.PORT || 80



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/pages'))

app.use(stylus.middleware({
  src: __dirname,
  dest: __dirname + '/public',
  compress: true
}))

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('index');
})

app.listen( port , function(){
    console.log("Server Listening on port %s...", port);
});
