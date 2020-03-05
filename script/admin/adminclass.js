// console.log(localStorage.getItem("isAdmin"))
// THIS SYSTEM IS FOR DEMONSTRATIONAL PURPOSES ONLY

if(localStorage.getItem("isAdmin") == 0){
    document.getElementById("editor").style.display = "none";
} else if(localStorage.getItem("isAdmin") == 1){
    document.getElementById("editor").style.display = "inline-block";
}