function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete all modified values? This cannot be undone.");
    if(userConfirm == true){
        localStorage.removeItem("modified9SW");
        localStorage.removeItem("modified9SWDay");
        localStorage.removeItem("modified9SWHour");
        location.reload();
    }
}
