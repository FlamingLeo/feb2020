function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete all modified values? This cannot be undone.");
    if(userConfirm == true){
        localStorage.removeItem("modified9N");
        localStorage.removeItem("modified9NDay");
        localStorage.removeItem("modified9NHour");
        location.reload();
    }
}
