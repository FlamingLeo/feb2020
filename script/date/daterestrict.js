function restrictSpace() {
    if (event.keyCode == 32) {
        event.returnValue = false;
        return false;
    }
}