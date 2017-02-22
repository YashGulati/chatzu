var express = require('express')
var app = express()
var ejs = require('ejs')
var stylus = require('stylus')
var path = require('path')
var port = process.env.PORT || 80

// body-parser Middleware
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// ejs Middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/pages'))

app.use(stylus.middleware({
  src: __dirname,
  dest: __dirname + '/public',
  compress: true
}))

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req,res) => {
  db.globalChat.find(function (err, docs) {
    // console.log(docs);
    res.render('index', {
      'messages': docs,
      'errors': 0
    })
})
})
var mongojs = require('mongojs')
var db = mongojs('chatzu', ['globalChat']);

app.post('/sendMessage', function(req, res){
  var msg = req.body.msg
  var data = {
    message: msg
  }
  if(msg == '')
    res.redirect('/')
  else {
    db.globalChat.insert(data, function(err, result){
      if(err){
        console.log(err)
      } else {
        res.redirect('/')
      }
    })
  }
})

app.listen( port , function(){
    console.log("Server Listening on port %s...", port);
});
