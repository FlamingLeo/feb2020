// var d = new Date();
// var n = d.getDay();
// Days are stored as numbers (0 - Sunday to 6 - Saturday)

visible = false;

function displayDate(){
    var d = new Date();
    var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    var n = d.getDay();
    if(visible == false){
        for(i=0;i<=6;i++){
            document.getElementsByClassName(n)[i].style.backgroundColor = "lightgreen"; // Preffered color is light green, change if necessary
        }
        document.getElementById("displayer").innerHTML = "Click to hide today's date."
        document.getElementById("datedisplay").innerHTML = "<b>Today is: </b>" + dayList[n] + ", " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
        visible = true;
    } else {
        for(i=0;i<=6;i++){
            document.getElementsByClassName(n)[i].style.backgroundColor = "white"; // Default color is white, change if necessary
        }
        document.getElementById("displayer").innerHTML = "Click to show today's date."
        document.getElementById("datedisplay").innerHTML = "";
        visible = false;
    }
    
}

