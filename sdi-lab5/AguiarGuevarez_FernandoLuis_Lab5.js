/*
    Fernando Luis Aguiar Guevarez
    Lab 5 Functions
    05/14/15
    SDI
 */

//alert("JavaScript works!");

// Global Variables

var operationResult;

// Functions

function addingFunction()
{
    //Addition Function
    operationResult = (userNumber1 + userNumber2);
    return operationResult;
}

function subtractingFunction()
{
    //Subtraction Function
    operationResult = (userNumber1 - userNumber2);
    return operationResult;
}

function multiplicationFunction()
{
    //Multiplication Function
    operationResult = (userNumber1 * userNumber2);
    return operationResult;
}

function divisionFunction()
{
    //Division Function
    operationResult = (userNumber1 / userNumber2);
    return operationResult;
}

// Prompts

var userNumber1 = parseFloat(prompt("Please enter the first number for the equation:", "Enter your number here"));
var userNumber2 = parseFloat(prompt("Enter the second number of the equation:", "Enter your number here"));
var operationPick = prompt("Choose which operation you want to do: Add, Subtract, Multiply or Divide.", "Add, Sub, Multi or Div");

if(operationPick === "Add" || operationPick === "+")
{
    addingFunction(userNumber1 && userNumber2);
    operationResult = addingFunction();
    console.log("You decided to add the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 +" + " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Sub" || operationPick === "-")
{
    subtractingFunction(userNumber1 && userNumber2);
    operationResult = subtractingFunction();
    console.log("You decided to subtract the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 + " - " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Multi" || operationPick === "*")
{
    multiplicationFunction(userNumber1 && userNumber2);
    operationResult = multiplicationFunction();
    console.log("You decided to multiply the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 + " * " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Div" || operationPick === "/")
{
    divisionFunction(userNumber1 && userNumber2);
    operationResult = divisionFunction();
    console.log("You decided to divide the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 + " / " + userNumber2 + " = " + operationResult + ".");
}

