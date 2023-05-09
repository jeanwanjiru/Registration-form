const  reg_form = document.getElementById("Registration form");

reg_form.addEventListener("submit", (e) => {
 e.preventDefault();
 const Email = document.getElementById("Email").value;
 const  Password = document.getElementById("Password").value;
 const Repeat = document.getElementById("Repeat").value;
 if (Email.length > 25){
    alert("Email should be   less than 25  digits")
 }
 else if(Password == Repeat){
return 
 }
 else{
    alert("password must be same")
 }
 console.log(
    "Email : ",
    Email,
    "Password : ",
    Password,
    "Repeat: ",
    Repeat
    
  );
})
  