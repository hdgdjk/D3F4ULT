let browser = navigator.userAgent.toString()
if(browser.indexOf("Tor browser")==-1){
    alert("You need a tor browser to view this page");
    window.close()
}
var password = document.getElementById("password");
var pass2 = document.getElementById("pass2");

function checkPasscode(){
    if(password.value != pass2.value){
        alert("Password mismatch")
        return false;
    }

}
pass2.addEventListener("blur", checkPasscode, false)