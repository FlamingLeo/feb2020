function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete all modified values? This cannot be undone.");
    if(userConfirm == true){
        localStorage.removeItem("modified9MI");
        localStorage.removeItem("modified9MIDay");
        localStorage.removeItem("modified9MIHour");
        location.reload();
    }
}
