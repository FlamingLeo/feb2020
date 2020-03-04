var visible = false;
var entryText;

function displayManager(){
    if(visible == false){
        document.getElementById("menu").style.display = "block";
        document.getElementById("manager").innerHTML = "Cancel";
        visible = true;
    } else {
        document.getElementById("menu").style.display = "none";
        document.getElementById("manager").innerHTML = "Add New Entry";
        visible = false;
    }
}
