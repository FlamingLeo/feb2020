// document.getElementById("mySelect").value = "banana";
// document.getElementsByClassName("className")[i].innerHTML to change "i"-th element of class.
// Values are stored as strings.

// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

var day;
var hour;
var newClass;
var modified = [];
var modifiedDay = [];
var modifiedHour = [];

function changeValue(){    
    // Replaces Text
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    newClass = document.getElementById("newClass").value;
    // Prevents empty space or default value
    if(newClass == "" || newClass == "Hour" || newClass == "-"){
        document.getElementById("confirm").innerHTML = "Changes have <b>not</b> been made.";
    } else {
        document.getElementsByClassName(day)[hour].innerHTML = newClass;
        // Local Storage - Class Name
        modified.push(newClass);
        localStorage.setItem("modified",JSON.stringify(modified));
        // Local Storage - Day
        modifiedDay.push(day);
        localStorage.setItem("modifiedDay",JSON.stringify(modifiedDay));
        // Local Storage - Hour
        modifiedHour.push(hour);
        localStorage.setItem("modifiedHour",JSON.stringify(modifiedHour));
        document.getElementById("confirm").innerHTML = "Changes have been made."
    }
}

function load(){
    var storedClass = JSON.parse(localStorage.getItem("modified"));
    var storedDay = JSON.parse(localStorage.getItem("modifiedDay"));
    var storedHour = JSON.parse(localStorage.getItem("modifiedHour"));
    // Debugging...
    console.log(storedDay);
    console.log(storedHour);
    console.log(storedClass);
    // Loads each value
    for(i = 0; i < storedDay.length; i++){
        document.getElementsByClassName(storedDay[i])[storedHour[i]].innerHTML = storedClass[i];
    }
}
