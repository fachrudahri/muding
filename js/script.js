var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "kelompok1imk" && password == "sesuatukita123"){
alert ("Login successfully");
window.location.href = 'home.html'; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Password Anda Salah, Sesi login tinggal "+attempt+"x lagi");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
