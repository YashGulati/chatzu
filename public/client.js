function gotoBottom(id){
   var element = document.getElementById(id);
   element.scrollTop = element.scrollHeight - element.clientHeight;
}

function setFocusToMessageBox(){
    document.getElementById("msg").focus();
}

gotoBottom('messages');
setFocusToMessageBox();
