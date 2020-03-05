// document.getElementById("mySelect").value = "banana";
// document.getElementsByClassName("className")[i].innerHTML to change "i"-th element of class.
// Values are stored as strings.

// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

var day;
var hour;
var newClass;
var modified9MI = JSON.parse(localStorage.getItem("modified9MI")) || [];
var modified9MIDay = JSON.parse(localStorage.getItem("modified9MIDay")) || [];
var modified9MIHour = JSON.parse(localStorage.getItem("modified9MIHour")) || [];

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
        modified9MI.push(newClass);
        localStorage.setItem("modified9MI",JSON.stringify(modified9MI));
        // Local Storage - Day
        modified9MIDay.push(day);
        localStorage.setItem("modified9MIDay",JSON.stringify(modified9MIDay));
        // Local Storage - Hour
        modified9MIHour.push(hour);
        localStorage.setItem("modified9MIHour",JSON.stringify(modified9MIHour));
        document.getElementById("confirm").innerHTML = "Changes have been made."
    }
}

function removeValue(){
    // Gets values
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    for(let i=0;i<modified9MI.length;i++){
        if(modified9MIDay[i] == day && modified9MIHour[i] == hour){
            modified9MIDay.splice(i,1);
            localStorage.setItem("modified9MIDay",JSON.stringify(modified9MIDay));
            modified9MIHour.splice(i,1);
            localStorage.setItem("modified9MIHour",JSON.stringify(modified9MIHour));
            modified9MI.splice(i,1);
            localStorage.setItem("modified9MI",JSON.stringify(modified9MI));
        }
    }
    location.reload();
}

function load(){
    // Debugging...
    console.log(modified9MIDay);
    console.log(modified9MIHour);
    console.log(modified9MI);
    // Loads each value
    for(i = 0; i < modified9MIDay.length; i++){
        document.getElementsByClassName(modified9MIDay[i])[modified9MIHour[i]].innerHTML = modified9MI[i];
    }
    admin();
}

