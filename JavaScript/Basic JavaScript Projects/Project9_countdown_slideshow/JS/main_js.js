//Countdown function
function countdown() {
    var seconds = document.getElementById("seconds").value; //declare seconds variable

    function tick() {                                       //tick function
            seconds = seconds - 1;                          //decrements seconds by one
            timer.innerHTML=seconds;                        //sets timer to seconds
            setTimeout(tick, 1000);                         //pause for 1 second
        if(seconds==-1) {                                   //checks if timer is finished
            alert("Time's up!");                            //displays the alert
        }    
    }
    tick();                                                 //calls tick function lowering seconds by 1
}

                        //Slideshow functions
var slideIndex = 1;                                         //declare global variable slideIndex and sets it to one         
showSlides(slideIndex);                                     //calls the showSlidesFuncion

                        //next/previous controls
function plusSlides(n) {                                    
    showSlides(slideIndex += n);                            //advances slideIndex by n or -n depending on which arrow was clicked.
}

                        // thumbnail image controls                 
function currentSlide(n) {
    showSlides(slideIndex = n);                             //sets current slide to number of dot clicked
}

                        //determines which slide should be shown and shows it
function showSlides (n) {                           
    var i;                                                      //declare counter variable i
    var myslides = document.getElementsByClassName("slides");   //declare myslides variable gets the element from the html
    var dots = document.getElementsByClassName("dot");          //declare and set a variable dots if a dot is clicked
    if (n > myslides.length) {slideIndex = 1}                   //sets slide to one if right arrow is clicked while last slide is displayed
    if (n < 1) {slideIndex = myslides.length}                   //sets slide to the last slide if left arrow is clicked while first slide is displayed
    for ( i = 0; i < myslides.length; i++) {                    //displays #i slide as long as it's above 0
        myslides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {                         //displays the #i dot that corresponds with #i slide
        dots[i].className = dots[i].className.replace(" active", ""); //sets any active dots to ""
    }
    myslides[slideIndex-1].style.display = "block";             //sets the current slide to be displayed
    dots[slideIndex-1].className += " active";                  //sets the dot of the current slide to active
}