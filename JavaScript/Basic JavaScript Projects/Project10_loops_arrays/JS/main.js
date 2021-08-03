function Call_Loop() {      //Function using while loop
    var Count = "";         //declare empty Count string variable
    var X = 0;              //declare incrementation variable
    while (X <= 100) {      //loop start
        Count += X + ", ";  //count is incremented defined
        X++;                //x is incremented
    }
    document.getElementById("Loop").innerHTML = Count; //count string displayed to browser
}

//Function that extracts the length of a string
function Get_Length() {     
    var Sentance = "Click here to find the length of this specific string." //declare the string
    var S_Length = Sentance.length; //declare and set the variable to the string length
    document.getElementById("strLength").innerHTML = S_Length;  //display the string length
}

//Array Function with for loop
var Instruments = ["Sitar", "Keytar", "Cello", "Lazer Theramin", "Elven Harp"]; //declare and initialize array
var Content = "";   //declare empty string variable
var Y;              //declare counter variable
function For_Loop() {                   //for loop that concatenates each instrument in turn to Content
    for ( Y = 0; Y < Instruments.length; Y++) {
        if (Instruments[Y] === "Elven Harp") { break; } //breaks before displaying Elven Harp
        if (Instruments[Y] === "Cello") { continue; }   //breaks when the instrument is Cello then continues
        Content += Instruments[Y] + ", ";
    }
document.getElementById("List_of_Instruments").innerHTML = Content;  //displays Content in the browser
}

//Function to fill an array
function array_Function() {                 
    var Random_Words = [];
    Random_Words[0] = "bring";      //declare array data
    Random_Words[1] = "loud";
    Random_Words[2] = "applesauce";
    Random_Words[3] = "never";
    Random_Words[4] = "mortified";
    Random_Words[5] = "upstairs";
    document.getElementById("Array0").innerHTML = "\"" + Random_Words[0] + "\", is a random word. <br>";  //display array data
    document.getElementById("Array1").innerHTML = "\"" + Random_Words[2] + "\", is a random word. <br>";
    document.getElementById("Array2").innerHTML = "\"" + Random_Words[3] + "\", is a random word. <br>";
    document.getElementById("Array3").innerHTML = "\"" + Random_Words[4] + "\", is a random word. <br>";
    document.getElementById("Array4").innerHTML = "\"" + Random_Words[5] + "\", is a random word. <br>";
    document.getElementById("Array5").innerHTML = "\"" + Random_Words[6] + "\", is a random word. <br>";
}

//Function to demonstrate constants
function constant_Function() {
    const greeting = {beginning:"Hello ", honorific:"Sir", end:", how are you today? "};    //sets up greeting constant with 3 parts
    greeting.honorific = "Friend";                                                          //changes the honorific of greeting
    greeting.next_line = "What are you up to?"                                              //adds another line to the constant
    document.getElementById("Constant").innerHTML = greeting.beginning + greeting.honorific + greeting.end + greeting.next_line; //displays the sentance using the constant strings
}

//Let demonstration function
function use_Let() {        
    var test = {first_num:10, sec_num:20};      //declare variable local to use_Let
    {
        let add_this = 15;      //declare block variable with let
        test.first_num += add_this;       //adds test to add_this
        document.getElementById("Show_Let").innerHTML = test.first_num; //displays test.first_num to browser
    }
    test.sec_num += add_this;           //does not work as add_this is a block variable and the outter function cannot access it
    document.getElementById("Show_Let2").innerHTML = test.sec_num;    //attempts to display test.sec_num, but cannot due to block variable add_this being inaccessible 
}

//Function to demonstrate return
function get_Something(x) {
    return x;
}
    document.getElementById("return_Something").innerHTML = get_Something("Something"); //calls the function get_Something with the parameter "Something"


