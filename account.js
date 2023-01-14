
function login()
{
 var log= document.getElementById("login");
log.style.color="grey";
var reg=document.getElementById("register");
reg.style.color="black";
document.getElementById("email").style.display="none";
document.getElementById("reg").innerHTML="Login";
}
function register()
{
 var link=document.getElementById("reg");
 if(document.getElementById("user").value=="vijay")
 {
    link.href="file:///C:/Users/vijay/OneDrive/Desktop/RESUME%20WEBSITE/Ecommerce%20Website/ecom.html";
 }
 var reg=document.getElementById("register");
 reg.style.color="grey";
 var log= document.getElementById("login");
log.style.color="black";
document.getElementById("email").style.display="block";
document.getElementById("reg").innerHTML="Register";
}
