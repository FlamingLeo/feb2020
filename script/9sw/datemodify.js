// document.getElementById("mySelect").value = "banana";
// document.getElementsByClassName("className")[i].innerHTML to change "i"-th element of class.
// Values are stored as strings.

// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

var day;
var hour;
var newClass;
var modified9SW = JSON.parse(localStorage.getItem("modified9SW")) || [];
var modified9SWDay = JSON.parse(localStorage.getItem("modified9SWDay")) || [];
var modified9SWHour = JSON.parse(localStorage.getItem("modified9SWHour")) || [];

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
        modified9SW.push(newClass);
        localStorage.setItem("modified9SW",JSON.stringify(modified9SW));
        // Local Storage - Day
        modified9SWDay.push(day);
        localStorage.setItem("modified9SWDay",JSON.stringify(modified9SWDay));
        // Local Storage - Hour
        modified9SWHour.push(hour);
        localStorage.setItem("modified9SWHour",JSON.stringify(modified9SWHour));
        document.getElementById("confirm").innerHTML = "Changes have been made."
    }
}

function removeValue(){
    // Gets values
    day = document.getElementById("dayDropdown").value;
    hour = document.getElementById("hourDropdown").value;
    for(let i=0;i<modified9SW.length;i++){
        if(modified9SWDay[i] == day && modified9SWHour[i] == hour){
            modified9SWDay.splice(i,1);
            localStorage.setItem("modified9SWDay",JSON.stringify(modified9SWDay));
            modified9SWHour.splice(i,1);
            localStorage.setItem("modified9SWHour",JSON.stringify(modified9SWHour));
            modified9SW.splice(i,1);
            localStorage.setItem("modified9SW",JSON.stringify(modified9SW));
        }
    }
    location.reload();
}

function load(){
    // Debugging...
    console.log(modified9SWDay);
    console.log(modified9SWHour);
    console.log(modified9SW);
    // Loads each value
    for(i = 0; i < modified9SWDay.length; i++){
        document.getElementsByClassName(modified9SWDay[i])[modified9SWHour[i]].innerHTML = modified9SW[i];
    }
    admin();
}
