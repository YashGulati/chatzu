var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var users = []
var connections = []
var ejs = require('ejs')
var stylus = require('stylus')
var path = require('path')
var port = process.env.PORT || 80
var getNamePage = '/'
var homepage = getNamePage
var globalChatPath = '/chat'
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

// mongo
var mongojs = require('mongojs')
var db = mongojs('chatzu', ['globalChat']);

app.get(globalChatPath, (req,res) => {
  console.log('In global chat: '+req.query.userName);
  io.sockets.emit('userCame',req.query.userName);
  db.globalChat.find(function (err, docs) {
    res.render('index', {
      'userName': req.query.userName,
      'messages': docs,
      'errors': 0
    })
  })
})

app.get(getNamePage, (req, res) => {
  res.render('getName')
})

app.post('/userNameSubmit', function(req,res){
  var userName = req.body.userName
  console.log('New User: ' + userName);
  res.redirect(globalChatPath + '?userName=' + userName)
})

app.post('/sendMessage', function(req, res){
  var msg = req.body.msg
  var userName = req.body.userName
  var data = {
    userName: userName,
    message: msg
  }
  if(msg == '')
    res.redirect(globalChatPath + '?userName=' + userName)
  else {
    db.globalChat.insert(data, function(err, result){
      if(err){
        console.log(err)
      } else {
        res.redirect(globalChatPath + '?userName=' + userName)
      }
    })
  }
  io.sockets.emit('refreshAll');
})

server.listen( port , function(){
    console.log("Server Listening on port %s...", port);
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length);
  })

  socket.on('messageSent', function(data){


  })

})
