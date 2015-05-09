/**
 * Created by FernandoAguiar on 5/9/15.
 */

alert("Click Alt + Command + J in order to see responses.");

//Variables
var myFirstName = "Fernando";
var myLastName = "Aguiar";
var newFirstName = "";
var newLastName = "";

// prompt for user input
newFirstName = prompt("Please enter your first name.\nFor scientific purposes...");

// first conditional
if(newFirstName === myFirstName)
{
    //code that runs if the conditional is true
    newLastName = prompt("Can you also enter your last name?");
    if(newLastName === myLastName)
    {
        console.log("Greetings, " + newFirstName + " " + newLastName + ".");
    }

    else
    {
        console.log("Sorry you are in the wrong family tree.\nSucks to suck ;P");
    }
}
else if (newFirstName === "Optimus Prime")
{
    // code that runs if the conditional is false
    console.log("Greetings Autobot, how fare you?");
}

else if (newFirstName === "Megatron")
{
    console.log("Decepticon Detected!!!\nPrepare to annihilate!!!");
}

else
{
    console.log("Intruder Detected. Self-Destruct initiated.\n5... 4... 3... 2... 1... BANG!");
}

// new variables for data type tests
var myNumber = 0;
var secondNumber = 0;

myNumber = parseInt(prompt("Enter the number 5."));


if(myNumber === secondNumber)
{
    console.log("They match exactly!");
}
else
{
    console.log("The Data Types are wrong!");
}