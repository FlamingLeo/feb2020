// array.reverse() to reverse
// localStorage.entryCount = parseInt(localStorage.entryCount) + 1 || 0;
// console.log(localStorage.entryCount);
// was here ha

var textBox;
var date;
var entryText = JSON.parse(localStorage.getItem("entry")) || [];
var dateLocal = JSON.parse(localStorage.getItem("dateLocal")) || [];

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
        dateLocal.push(date);
        localStorage.setItem("dateLocal", JSON.stringify(dateLocal));
        console.log(localStorage.getItem("dateLocal"));
        // Hides the menu after completion
        document.getElementById("menu").style.display = "none";
        document.getElementById("manager").innerHTML = "Add New Entry";
        visible = false;
        location.reload();
    }
}

function load(){
    var entryText = JSON.parse(localStorage.getItem("entry"));
    var dateLocal = JSON.parse(localStorage.getItem("dateLocal"));
    var sorted = 0;
    var aux;
    console.log(dateLocal);
    console.log(entryText);
    //Debugging...
    while(sorted == 0){
        sorted = 1;
        for(let i = 0; i < dateLocal.length; i++){
            if(new Date(dateLocal[i]) < new Date(dateLocal[i+1])){
                aux = entryText[i];
                entryText[i] = entryText[i+1];
                entryText[i+1] = aux;
                aux = dateLocal[i];
                dateLocal[i]= dateLocal[i+1];
                dateLocal[i+1] = aux;
                localStorage.setItem("dateLocal", JSON.stringify(dateLocal));
                localStorage.setItem("entry",JSON.stringify(entryText));
                sorted = 0;
            }
        }   
    }
    for(let i = 0; i < entryText.length; i++){
        if(i==0){
            document.getElementById("entries").innerHTML = "";
        }
        document.getElementById("entries").innerHTML += entryText[i];
    }   
}
