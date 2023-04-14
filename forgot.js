
function validation(){
    var username = document.getElementById("user").value; 
    var op= document.getElementById("oldpass").value;
    var np= document.getElementById("newpass").value;
    var renter= document.getElementById("repass").value;
    if(op!=""&& np!="" &&renter!=""){  
       if( op != np ){
        if( np == renter){
           alert("password changed successfully");
           window.open = "login.html";        
        }
        else if(np.length > 15 || np.length < 6){
         alert("The min and max length of password should be between 6 &15");
        }
        else{
            alert("Confirm password does not match with new password");
               
        }
    }
       else{
        alert("this is your old password, please provide a new password");
       }
} 
    
}

