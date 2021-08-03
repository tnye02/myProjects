//Voting Age Function
function Vote_Function() {
    var Age, Can_vote;  //declare variables
    Age = document.getElementById("Age").value; //sets Age to value input by user
    Can_vote = (Age>17) ? "You can ":"You can not "; //utilze ternary operator to check age and output message
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";
}

function Vehicle(Make, Model, Year, Color) { //constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creates an instance of vehicle

function myFunction() {     //Displays the data from the object
    document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

function My_Nested_Function () {  //function with another function nested within
    var score = 0;
        function First_Nested_Function(){score = score + 50;} //nested function
    First_Nested_Function(); //call the nested function
    document.getElementById("Nested_Function").innerHTML = "Your score is now: " + score; //display data as altered by the inner function
    
}