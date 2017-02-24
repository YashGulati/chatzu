function gotoBottom(id){
   var element = document.getElementById(id);
   element.scrollTop = element.scrollHeight - element.clientHeight;
}

function setFocusToMessageBox(){
    document.getElementById("mainBox").focus();
}
if(document.getElementById('messages'))
  gotoBottom('messages');
setFocusToMessageBox();

$(function(){
  var socket = io.connect({ 'sync disconnect on unload': true });

  socket.on('connect', function () {
    console.log(this.id);
  });

  $('#sendMessageForm').submit(function(e){
    socket.emit('messageSent');
  });

  socket.on('refreshAll', function(){
    location.reload();
  })

  socket.on('userCame', function(){
    console.log('A user came');
  })

})
