function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete all modified values? This cannot be undone.");
    if(userConfirm == true){
        alert("Values have been erased.")
        localStorage.removeItem("modified");
        localStorage.removeItem("modifiedDay");
        localStorage.removeItem("modifiedHour");
        location.reload();
    }else{
        alert("Values have not been erased.");
    }
}
