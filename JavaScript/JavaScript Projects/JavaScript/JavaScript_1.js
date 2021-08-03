function Cuisine_Choice() {         //function illustrating a switch function
    var choice_out;                 //declare the function output variable
    var foods = document.getElementById("Cuisine").value;   //takes input from HTML input box
    var msg = " is amazing!";                               //string for friendly message

    switch(foods) {                 //switch function, compares the input to the cases and outputs the appropriate message
        case "Mexican":
            choice_out = "Mexican" + msg;
        break;

        case "Italian":
            choice_out = "Italian" + msg;
        break;

        case "Sushi":
            choice_out = "Sushi" + msg;
        break;

        case "BBQ":
            choice_out = "BBQ" + msg;
        break;

        case "Vegan":
            choice_out = "Vegan" + msg;
        break;
        default:                //in case the input is not exactly one of these
        choice_out = "That is not one of the choices, please enter the choice exactly as it is on the menu!";
    }
document.getElementById("Output").innerHTML = choice_out;  //displays the appropriate case to the browser
}

function Change_Text() {        //function to change text using document.getElementsByClass
    var text1 = document.getElementsByClassName("changeable");      
    text1[0].innerHTML = "What did I tell you, the text changed!";  //new text designated by the first(and only) place where there is data in the variable text
}

//Canvas JavaScript
var canv = document.getElementById("Canvas_1");
var ctext = canv.getContext("2d");

//Create a gradient
var grd = ctext.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

//Fill with gradient
ctext.fillStyle = grd;
ctext.fillRect(0, 0, 500, 500);
