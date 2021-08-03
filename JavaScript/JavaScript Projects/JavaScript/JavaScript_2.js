function validate_Form() {
    let x1 = document.forms["form_1"]["first_name"].value;
    if (x1 == "Enter your first name here:" || x1 == "") {
        alert("Please enter your first name!");
        return false;
    }

    let x2 = document.forms["form_1"]["last_name"].value;
    if (x2 == "Enter your last name here:" || x2 == "") {
        alert("Please enter your last name!");
        return false;
    }

    let x3 = document.forms["form_1"]["email_1"].value;
    if (x3 == "Enter your email address here:" || x3 == "") {
        alert("Please enter your email address!");
        return false;
    }

    let x4 = document.forms["form_1"]["question"].value;
    if (x4 == "Enter your question here:" || x4 == "") {
        alert("Please submit a question!");
        return false;
    }

}