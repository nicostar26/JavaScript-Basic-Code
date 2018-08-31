function passwordValidation(){
  var pw1 = prompt("Please create a password");
  var pw2 = prompt("Please re-type password");
  
  if(pw1===pw2 && pw1 != null && pw2 != null){
    document.getElementById("result").innerHTML = "Password Validated!";
  } else if(pw1 == null){document.getElementById("result").innerHTML = "Please enter two passwords!";
  }else if(pw2 == null){document.getElementById("result").innerHTML = "Please enter two passwords!";
  }
    else{document.getElementById("result").innerHTML = "Passwords do not match!";}
}
