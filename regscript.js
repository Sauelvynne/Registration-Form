//names letters only
function isInputLetter(evt){
var ch = String.fromCharCode(evt.which);
                
if(!(/[a-zA-Z]/.test(ch) || ch === " " || evt.keyCode === 8)){
evt.preventDefault();
}
console.log(evt.keyCode);
                
}

function isInputNumber(evt){
var ch = String.fromCharCode(evt.which);
                
if(!(/[0-9]/.test(ch) || ch === " " || evt.keyCode === 8)){
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

function submitForm() {
  // Manually trigger form validation
  var form = document.querySelector('.container');
  if (form.checkValidity()) {
    alert("Registration Successful!"); 
  } else {
    form.reportValidity(); 
  }
}
