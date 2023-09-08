// Login , Signup Page

function login()
{
 var log= document.getElementById("login");
log.style.color="grey";
var register=document.getElementById("register");
register.style.color="black";
var loginbox=document.getElementById("loginbox");
var registerbox=document.getElementById("registerbox");
if(loginbox.style.display==="none")
{
   loginbox.style.display="flex";
   registerbox.style.display="none";
}
}
function register()
{
 var loginbox=document.getElementById("loginbox");
var registerbox=document.getElementById("registerbox");
 var register=document.getElementById("register");
 register.style.color="grey";
 var log= document.getElementById("login");
log.style.color="black";
if(registerbox.style.display==="none")
   {
      registerbox.style.display="flex";
      loginbox.style.display="none";
   }
}
let users=[];
let passwords=[];
function Register()
{
   var user1=document.getElementById("user1").value;
   var password1=document.getElementById("password1").value;
   if(users.includes(user1))
   {
      alert("user is taken");
   }
   else{
      alert("Successfully Registered");
      users.push(user1);
      passwords.push(password1);
   }
}
function Login()
{
   var reg=document.getElementById("reg");
   var user1=document.getElementById("user").value;
   var password1=document.getElementById("password").value;
   if(users.includes(user1))
   {
      for(let i=0;i<users.length;i++)
      {
        if(users[i]===user1 && passwords[i]===password1)
        {
         reg.href="file:///C:/Users/vijay/OneDrive/Desktop/Arduino/redstore%20ecom/ecom.html";
        }
        else
        {
         alert("password incorrect");
        }
      }
   }
   else{
      alert("user does not exist");
   }
}
