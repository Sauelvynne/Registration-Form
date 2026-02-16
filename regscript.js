//firstname letters only
function isInputLetter(evt){
var ch = String.fromCharCode(evt.which);
                
if(!(/[a-zA-Z]/.test(ch) || ch === " " || evt.keyCode === 8)){
evt.preventDefault();
}
console.log(evt.keyCode);
                
}

//password
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;