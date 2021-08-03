function validate_Form() {
    let x1 = document.forms["form_1"]["phone"].value;
    if (x1 == "Enter a number to see if it is a valid phone number" || x1 == "") {
        alert("You did not enter a phone number!");
        return false;
    }
    else { alert("Thank you!") };
}