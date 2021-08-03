function assignColor() { //Function that sets the font color to blue.
    var string = "Hello there, how are you today? This text is blue, can you believe it!"; //assigns string to variable
    var str_color = string.fontcolor("blue"); //Assigns the color blue to the string
    document.getElementById("Blue_Text").innerHTML = str_color; //creates the "Blue_Text" id for the p element
}

function functionTwo() { //Function that concatenates two lines
    var line1 = "This is the first part of the sentence, "; //sets the variable to the string
    line1 += "this is the second part, which as been concatenated!"; //uses += to concatenate the new string to the original
    document.getElementById("Concat").innerHTML = line1; //creates the "Concat" id for the p element
}