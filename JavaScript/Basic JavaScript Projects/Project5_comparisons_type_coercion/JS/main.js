document.write(typeof true); //displays the type of "true"
document.write("<br><br>"); //adds blank line between segments
document.write("Ten" + 10); //shows type coercion, forcing the number 10 to become a string
document.write("<br><br>"); //adds blank line between segments
document.write(0 / 0);  //demonstrates not a number or NaN

// FUNCTIONS
function testFunction() {
    document.getElementById("Test").innerHTML = isNaN('This is a string'); //Tests if the string is not a number
}

function testFunction2() {
    document.getElementById("Test2").innerHTML = isNaN('6'); //Tests if 6 is not a number 
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); //returns the opposite of the boolean expression
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20>100); //returns the opposite of the boolean expression
}
// END FUNCTIONS

document.write("<br><br>"); //adds blank line between segments
document.write(2E310);      //gets positive infinity

document.write("<br><br>"); //adds blank line between segments
document.write(-2E310);     //gets negative infinity

document.write("<br><br>"); //adds blank line between segments
document.write("True or False: 10 is greater than 2 - "); //writes to browser
document.write(10>2);       //displays true because 10 is greater than 2

document.write("<br><br>"); //adds blank line between segments
document.write("True or False: 2 greater than 10 - "); //writes to browser
document.write(2>10);       //displays false because 2 is not greater than 10

console.log(2 + 2); //displays 4 in the console

console.log(2 > 2); //displays false in the console

document.write("<br><br>"); //adds blank line between segments
document.write("Is 2 + 3 = 5? ");
document.write(2 + 3 == 5); //checks equality

document.write("<br><br>"); //adds blank line between segments
document.write("Is 2 + 2 = 5? ");
document.write(2 + 2 == 5); //checks equality

document.write("<br><br>"); //adds blank line between segments
document.write("Is 725 equal to 725 in both value and data type? ");
document.write(725 === 725); //checks equality of type and value

document.write("<br><br>"); //adds blank line between segments
document.write("Is 725 equal to \"725\" in both value and data type? ");
document.write(725 === '725');//checks equality of type and value

document.write("<br><br>"); //adds blank line between segments
document.write("Is 725 equal to \"Seven Hundred Twenty Five\" in both value and data type? ");
document.write(725 === 'seven hundred twenty five');//checks equality of type and value

document.write("<br><br>"); //adds blank line between segments
document.write("Is 725 equal to 726 in both value and data type? ");
document.write(725 === 726);//checks equality of type and value

document.write("<br><br>"); //adds blank line between segments
document.write("Is 456 < 654 AND 789 > 678? - ");
document.write(456 < 654 && 789 > 678); //checks if two expressions are both true

document.write("<br><br>"); //adds blank line between segments
document.write("Is 789 < 654 AND 789 > 678? - ");
document.write(789 < 654 && 789 > 678); //checks if two expressions are both true

document.write("<br><br>"); //adds blank line between segments
document.write("Is 456 < 654 OR 789 > 678? - ");
document.write(456 < 654 || 789 > 678); //checks if at least one of two expressions is true

document.write("<br><br>"); //adds blank line between segments
document.write("Is 789 < 654 OR 556 > 678? - ");
document.write(789 < 654 || 556 > 678); //checks if at least one of two expressions is true
