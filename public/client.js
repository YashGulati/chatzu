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
  var socket = io.connect();
})