function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete entries? This cannot be undone.");
    if(userConfirm == true){
        localStorage.removeItem("entry");
        location.reload();
    }
}
