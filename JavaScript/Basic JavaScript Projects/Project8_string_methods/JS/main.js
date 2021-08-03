function tell_Story() {                                         //function to concatenate strings
    var beginning = "Once upon a time...";                      //first string
    var middle = " a bunch of crazy stuff happened, ";          //second string
    var end = "and they all lived happily ever after!";         //third string
    var story = beginning.concat(middle, end);                  //full story
    document.getElementById("Concatenate").innerHTML = story;   //displays story
}

function slice_Method() {                                   //functino using slice
    var Sentence_bad = "The quick, ugly, brown fox jumped over the lazy dumb dog!";
    var Sentence_good1 = Sentence_bad.slice(0,11);      //slices out the nice parts
    var Sentence_good2 = Sentence_bad.slice(16, 48);    //slices out the nice parts
    var Sentence_good3 = Sentence_bad.slice(52, 57);    //slices out the nice parts
    var Sentence_good_final = Sentence_good1.concat(Sentence_good2, Sentence_good3);    //concatenates the story
    var Sentence_good_final_upper = Sentence_good_final.toUpperCase();                  //changes it to upper case
    document.getElementById("Slice").innerHTML = Sentence_good_final_upper;
    var n = Sentence_good_final_upper.search("FOX");        //searches for the word FOX
    document.getElementById("Position").innerHTML = "The word FOX is located at character position: " + n; //Lets us know where the word FOX is
}

function num_To_string() {      //function utilizing string methods
  var num = 12.487652347;       //sets num to a number with a long decimal 
  var num_str = num.toString(); //sets the type of the data to string
  var num2 = num.toFixed(1);    //sets fixed decimal place to 1
  document.getElementById("Number_to_str").innerHTML = num_str; //displays the number as a string
  document.getElementById("Number_to_str2").innerHTML = num_str.valueOf();  //shows the primitive value of the string
  document.getElementById("Precision").innerHTML = num.toPrecision(4);      //shows only four places of the number
  document.getElementById("Precision2").innerHTML = num2;                   //shows the number with decimal place fixed at 1
}