function getReceipt() {
    //This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";    //variable for the running receipt
    var runningTotal = 0;       //declare running total variable and sets to 0
    var sizeTotal = 0;          //declare size total and sets to 0
    var sizeArray = document.getElementsByClassName("size");    //declare variable to store the size of the pizza ordered
    for (var i = 0; i < sizeArray.length; i++) {                //for statement checking which size is selected, and adds the size to the order string
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {            //this section sents the size total depending on which choice was made
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal=14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;                                       //sets the running total to the size total 
    console.log(selectedSize + " = $" + sizeTotal + ".00");         //concatenates the current price to the receipt string
    console.log("size text1: " + text1);                            
    console.log("subtotal: $:" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);                                 //sends the running total to the toppings function with the text string for the recipt
};

function getTopping(runningTotal,text1) {                           
    var toppingTotal = 0;                                           //declare a variable to store the total charge for toppings
    var selectedTopping = [];                                       //declare topping choice array
    var toppingArray = document.getElementsByClassName("toppings"); //retreive all toppings from the HTML
    for (var j = 0; j < toppingArray.length; j++) {                 //Checks which toppings are checked and adds the names to the receipt string
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;                      //checks number of toppings chosen to calculate the cost of toppings
    if (toppingCount > 1) {                                         //If more than one topping is chosen, subtract the free one from the total
        toppingTotal = (toppingCount -1 );                            
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);                   //adds the cost of all toppings to the running total
    console.log("total selected topping items: " + toppingCount);   //outputs to the console the receipt
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;          //displays the order receipt text to the browser.
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};