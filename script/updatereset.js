function clearValues(){
    var userConfirm = confirm("Are you sure you want to delete entries? This cannot be undone.");
    if(userConfirm == true){
        alert("Entries have been erased.")
        localStorage.clear();
        location.reload();
    }else{
        alert("Entries have not been erased.");
    }
}
