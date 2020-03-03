visible = false;

function toggleVisible(){
    if(visible == false){
        document.getElementById("menu").style.display = "block";
        document.getElementById("editor").innerHTML = "Click here once you're done.";
        visible = true;
    } else {
        document.getElementById("menu").style.display = "none";
        document.getElementById("editor").innerHTML = "Click here to edit a value.";
        visible = false;
        window.scrollTo(0,0);
    }
}