function enemy() {      //creates function for the enemy dictionary
    var Humanoid = {    //sets a dictionary called Humanoid
        Race:"Orc",     //Establishes the race of the character
        Class:"Cleric", //Character class
        Strength:4,     //Character Strength
        Speed:3,        //Character Speed
        Level:1,        //Character Level
        Name:"Mortec",  //Character Name
        Name:"Gronkorg" //Duplicate name
    };
    delete Humanoid.Name;   //Deletes all name keys and values
    document.getElementById("Dictionary").innerHTML = "Level " + Humanoid.Level + " | Name: " + Humanoid.Name; //Displays to the browser
}
