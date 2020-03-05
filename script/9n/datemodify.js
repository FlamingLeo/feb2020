// document.getElementById("mySelect").value = "banana";
// document.getElementsByClassName("className")[i].innerHTML to change "i"-th element of class.
// Values are stored as strings.

// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

var day;
var hour;
var newClass;
var modified9N = JSON.parse(localStorage.getItem("modified9N")) || [];
var modified9NDay = JSON.parse(localStorage.getItem("modified9NDay")) || [];
var modified9NHour = JSON.parse(localStorage.getItem("modified9NHour")) || [];

function changeValue(){    
    // Gets values
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    newClass = document.getElementById("newClass").value;
    // Prevents empty space or default value
    if(newClass == "" || newClass == "-"){
        document.getElementById("confirm").innerHTML = "<b>Please enter a valid value.</b>";
    } else {
        document.getElementsByClassName(day)[hour].innerHTML = newClass;
        // Local Storage - Class Name
        modified9N.push(newClass);
        localStorage.setItem("modified9N",JSON.stringify(modified9N));
        // Local Storage - Day
        modified9NDay.push(day);
        localStorage.setItem("modified9NDay",JSON.stringify(modified9NDay));
        // Local Storage - Hour
        modified9NHour.push(hour);
        localStorage.setItem("modified9NHour",JSON.stringify(modified9NHour));
        document.getElementById("confirm").innerHTML = "Changes have been made."
    }
}

function removeValue(){
    // Gets values
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    for(let i=0;i<modified9N.length;i++){
        if(modified9NDay[i] == day && modified9NHour[i] == hour){
            modified9NDay.splice(i,1);
            localStorage.setItem("modified9NDay",JSON.stringify(modified9NDay));
            modified9NHour.splice(i,1);
            localStorage.setItem("modified9NHour",JSON.stringify(modified9NHour));
            modified9N.splice(i,1);
            localStorage.setItem("modified9N",JSON.stringify(modified9N));
        }
    }
    location.reload();
}

function load(){
    // Debugging...
    console.log(modified9NDay);
    console.log(modified9NHour);
    console.log(modified9N);
    // Loads each value
    for(i = 0; i < modified9NDay.length; i++){
        document.getElementsByClassName(modified9NDay[i])[modified9NHour[i]].innerHTML = modified9N[i];
    }
    admin();
}
