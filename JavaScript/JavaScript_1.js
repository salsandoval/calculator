function character_function() {//Made star wars switch statement function
    var Character_Output;
    var Character = document.getElementById("Starwars_Input").value;
    var Character_String = " is a great character choice!";
    switch(Character) {
        case "Darth Vader":
            Character_Output = "Darth Vader" + Character_String;
        break;
        case "Yoda":
            Character_Output = "Yoda" + Character_String;
        break;
        case "Obi_wan Kenobi":
            Character_Output = "Obi_wan Kenobi" + Character_String;
        break;
        case "Princess leia":
            Character_Output = "Princess leia" + Character_String;
        break;
        case "Chewbacca":
            Character_Output = "Chewbacca" + Character_String;
        break;
        case "Jabba the Hutt":
            Character_Output = "Jabba the Hutt" + Character_String;
        break;
        case "Luke Skywalker":
            Character_Output = "Luke Skywalker" + Character_String;
        break;
        default:
        Character_Output = "Please enter a character exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Character_Output;
}

//class name method 
function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}
//i added text to canvas
var c = document.getElementById("Best_Movie");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.strokeText("StarWars!",50,50);


//added linear gradient color to canvas 
var c = document.getElementById("gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(20, 0, 170, 30);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 150);