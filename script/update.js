var textBox;
var date;
var entryText;

function addEntry(){
    textBox = document.getElementById("manager-text").value;
    date = document.getElementById("manager-date").value;
    // Debugging...
    // console.log(textBox);
    // console.log(date)
    // Checks if values aren't empty
    if(textBox == "" || date == ""){
        alert("Input a valid entry.")
    } else {
        // Adds the update to the page
        document.getElementById("entries").innerHTML = "<h2> Update for " + date + "</h2><p>" + textBox + "</p><br>";
        localStorage.setItem("latestEntry",document.getElementById("entries").innerHTML);
        // Hides the menu after completion
        document.getElementById("menu").style.display = "none";
        document.getElementById("manager").innerHTML = "Add New Entry";
        visible = false;
    }
}

function load(){
    console.log(localStorage.getItem("latestEntry"));
    document.getElementById("entries").innerHTML = localStorage.getItem("latestEntry");
}