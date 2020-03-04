// array.reverse() to reverse
// localStorage.entryCount = parseInt(localStorage.entryCount) + 1 || 0;
// console.log(localStorage.entryCount);

var textBox;
var date;
var entryText = JSON.parse(localStorage.getItem("entry")) || [];

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
        // Local Storage - Entries
        entryText.push(document.getElementById("entries").innerHTML);
        localStorage.setItem("entry",JSON.stringify(entryText));
        console.log(localStorage.getItem("entry"));
        // Hides the menu after completion
        document.getElementById("menu").style.display = "none";
        document.getElementById("manager").innerHTML = "Add New Entry";
        visible = false;
        location.reload();
    }
}

function load(){
    var entryText = JSON.parse(localStorage.getItem("entry"));
    entryText.reverse();
    //Debugging...
    console.log(entryText);
    for(let i = 0; i < entryText.length; i++){
        document.getElementById("entries").innerHTML += entryText[i];
    }   
}