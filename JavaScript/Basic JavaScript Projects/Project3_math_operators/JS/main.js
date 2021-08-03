function mathFunctionAdd() {        //function for addtion
    var addition = 2 + 2;
    document.getElementById("Math_Add").innerHTML = "Two + Two = " + addition;
}

function mathFunctionSubtract() {   //function for subtraction
    var subtraction = 17 - 7;
    document.getElementById("Math_Subtract").innerHTML = "Seventeen - Seven = " + subtraction;
}

function mathFunctionMultiply() {   //function for multiplication
    var multiply = 25 * 75;
    document.getElementById("Math_Multiply").innerHTML = "Twenty-Five x Seventy-Five = " + multiply;
}

function mathFunctionDivide() {     //function for division
    var divide = 43 / 3;
    document.getElementById("Math_Divide").innerHTML = "Forty-Three / Three = " + divide;
}

function mathFunctionMany() {       //function for multiple operators
    var many = 12 + 3 * 7 / 7 * 3;
    document.getElementById("Math_Many").innerHTML = "Twelve + Three x Seven / Seven x Three = " + many;
}

function mathFunctionMod() {        //function utilizing modular operator
    var mod = 55 % 10;
    document.getElementById("Math_Mod").innerHTML = "The Modulus of Fifty-Five / Ten = " + mod;
}

function mathFunctionNegate() {     //negation function
    var x = 12;
    document.getElementById("Math_Negative").innerHTML = "The Negation of Twelve = " + -x;
}

function mathFunctionIncrement() {  //Incrementation function
    var x = 1;  
    x++;
    document.getElementById("Math_Increment").innerHTML = "One incremented once = " + x;
}

function mathFunctionDecrement() {  //Decrementation function
    var x = 1;
    x--;
    document.getElementById("Math_Decrement").innerHTML = "One decremented once = " + x;
}

function getRandom() {      //random number generation
    document.getElementById("randomNumber").innerHTML = "Your random number between Zero and One-Hundred = " + (Math.random() * 100);
}

function circleArea() {     //function using math opertor to get PI and calculate the area of a circle
    var rad = 3;
    var area = rad * rad * Math.PI;
    document.getElementById("areaOfCircle").innerHTML = "The area of a circle with radius 3 = " + area;
}