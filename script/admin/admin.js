// THIS SYSTEM IS FOR DEMONSTRATIONAL PURPOSES ONLY

var isAdmin = localStorage.getItem("isAdmin");

function log(){
    if(isAdmin == 0){
        localStorage.setItem("isAdmin",1);
        isAdmin = 1;
        alert("You are now an admin.");
        localStorage.setItem("login-text","Logout");
        location.reload();
    } else if(isAdmin == 1){
        localStorage.setItem("isAdmin",0);
        isAdmin = 0;
        alert("You are no longer an admin.");
        localStorage.setItem("login-text","Login");
        location.reload();
    }
}

function admin(){
    if(isAdmin == null){
        isAdmin = 1;
        console.log(isAdmin);
    } else {
        localStorage.setItem("isAdmin",isAdmin);
        console.log(isAdmin);
        document.getElementById("login").innerHTML = localStorage.getItem("login-text");
    }
}