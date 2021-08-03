var x = 1000;  //declare global variable x

function y_is_local() { //function with a local variable y declared within
    var y = 1000;
    y = y * x;
    document.getElementById("Local_Variable").innerHTML = y;
    console.log(y * x);
}

function x_is_global() {    //function utilizing the global variable x, and a console.log -->
    x = x + x;              //statement attempting to utilize local variable y from the previous function
    document.getElementById("Global_Variable").innerHTML = x + " " + y;
    console.log(x + y);
}

function get_hours() {
    var today = new Date().getHours();
    document.getElementById("Get_Date").innerHTML = "The " + today + " hour in military time";
}

function greeting() {  //needlessly complicated time greeting function
    var hour_check = new Date().getHours(); //gets current hour
    var minute_check = new Date().getMinutes(); //gets current minute
    //var hour_check = 13;    //for testing purposes
    //var minute_check  = 1;  //for testing purposes
    var name = document.getElementById("User_Name").value;

    if (hour_check < 12 && minute_check <= 59 ) { //Checks for AM times
        if (hour_check == 0 || hour_check==24) {hour_check = 12;} //formats 0 hour and 24 hours to 12 for civilian use
        
        if (minute_check < 10) { //checks minutes for single digit minutes and adds a zero if necessary
            document.getElementById("Salutation").innerHTML = "Good Morning, " + name + "! The time is " + hour_check + ":0" + minute_check + " AM."; //outputs a good morning message
        }
        else {
            document.getElementById("Salutation").innerHTML = "Good Morning, " + name + "! The time is " + hour_check + ":" + minute_check + " AM.";//outputs a good morning message
        }
    }
    else if  (hour_check == 12) {   //checks for 12 o'clock hour exactly
        if (minute_check < 10) {
            document.getElementById("Salutation").innerHTML = "Good Afternoon, " + name + "! The time is " + hour_check + ":0" + minute_check + " PM."; //outputs afternoon message
            }
        else {
            document.getElementById("Salutation").innerHTML = "Good Afternoon, " + name + "! The time is " + hour_check + ":" + minute_check + " PM."; //outputs afternoon message
        }
    }
    else if  (hour_check > 12 && hour_check < 17) { //checks for afternoon time
        hour_check = hour_check - 12;
        if (minute_check < 10) {
            document.getElementById("Salutation").innerHTML = "Good Afternoon, " + name + "! The time is " + hour_check + ":0" + minute_check + " PM."; //outputs afternoon message
        }
        else {
            document.getElementById("Salutation").innerHTML = "Good Afternoon, " + name + "! The time is " + hour_check + ":" + minute_check + " PM."; //outputs afternoon message
        }
    }
    else {
        hour_check = hour_check - 12;   //everything else must be evening
        if (minute_check < 10) {
            document.getElementById("Salutation").innerHTML = "Good Evening, " + name + "! The time is " + hour_check + ":0" + minute_check + " PM."; //outputs evening message
        }
        else {
            document.getElementById("Salutation").innerHTML = "Good Evening, " + name + "! The time is " + hour_check + ":" + minute_check + " PM."; //outputs evening message

        }
    }

}