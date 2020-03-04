// document.getElementById("mySelect").value = "banana";
// document.getElementsByClassName("className")[i].innerHTML to change "i"-th element of class.
// Values are stored as strings.

// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

var day;
var hour;
var newClass;
var modified = JSON.parse(localStorage.getItem("modified")) || [];
var modifiedDay = JSON.parse(localStorage.getItem("modifiedDay")) || [];
var modifiedHour = JSON.parse(localStorage.getItem("modifiedHour")) || [];

function changeValue(){    
    // Gets values
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

function removeValue(){
    // Gets values
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    // Gets indexes of day & hour
    var indexDay;
    var indexHour;
    indexDay = modifiedDay.indexOf(day);
    // console.log(indexDay);
    indexHour = modifiedHour.indexOf(hour);
    // console.log(indexHour);
    // Removes valid value (index of day and hour must be the same, and must exist) + Local Storage
    if(indexDay != -1 && indexHour != -1 && indexDay == indexHour){
        modifiedDay.splice(indexDay,1);
        localStorage.setItem("modifiedDay",JSON.stringify(modifiedDay));
        modifiedHour.splice(indexHour,1);
        localStorage.setItem("modifiedHour",JSON.stringify(modifiedHour));
        modified.splice(indexDay,1);
        localStorage.setItem("modified",JSON.stringify(modified));
        location.reload(); // Refreshes page to see changes
    }
}

function load(){
    // Debugging...
    console.log(modifiedDay);
    console.log(modifiedHour);
    console.log(modified);
    // Loads each value
    for(i = 0; i < modifiedDay.length; i++){
        document.getElementsByClassName(modifiedDay[i])[modifiedHour[i]].innerHTML = modified[i];
    }
}
