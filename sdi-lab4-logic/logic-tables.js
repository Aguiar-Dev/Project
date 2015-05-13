 /*
 NAME:  Fernando Luis Aguiar Guevarez
 DATE:  05/12/15
 Scalable Data Infrastructures
 Day 4 Lab
 Assignment 1
 Using logical operators
*/

 // Truth Table Problems
//var p;
//var q;
//var r;
//
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value: Click OK for true or Cancel for false.");
//
//if (p && q)
//{
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//}
//else
//{
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}
//
//if (p || q)
//{
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//}
//else
//{
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}
//
//for(var runs = 0; runs < 8; runs++)
//{
//    if (p === true && (q === true || r === true))
//    {
//        console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//    }
//    else
//    {
//        console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//    }
//}
//
//if ((p === true && !q === true) || r === true)
//{
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//}
//else
//{
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}
//
//if (p === true || (q === true || r === true))
//{
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//}
//else
//{
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}


// Problem 1
//Variables
//
//var userAge;
//var ticketDiscount = 7.00;
//var ticketPrice = 12.00;
//
//// Prompts
//
//userAge = parseInt(prompt("What is your age?", "Enter your Age here."));
//if(userAge < 11 || userAge > 54)
//{
//    console.log("Welcome to the cinema due to your age of " + userAge + " you can buy tickets at the discount price of $" + ticketDiscount + ".");
//}
//else
//{
//    console.log("Welcome to the cinema due to your age of " + userAge + " you have to pay the full ticket price of $" + ticketPrice + ".");
//}


// Problem 2
//Variables

//var userLeftFT;
//var userLeftRT;
//var userRightFT;
//var userRightRT;

// prompts

//    userLeftFT = parseInt(prompt("How much air pressure does the front left tire have?\nAverage air pressure for most tires would be 32.", "Enter the amount in here"));
//    userRightFT = parseInt(prompt("How much air pressure does the rear left tire have?\nAverage air pressure for most tires would be 32.", "Enter the amount in here"));
//    userLeftRT = parseInt(prompt("How much air pressure does the front right tire have?", "Enter the amount in here"));
//    userRightRT = parseInt(prompt("How much air pressure does the rear right tire have?", "Enter the amount in here"));
//
//if(userLeftFT > 0 && userRightFT > 0 && userRightRT > 0 && userLeftRT > 0)
//{
//    if (userLeftFT === 32 && userRightFT === 32)
//    {
//        if (userLeftRT < 32 && userRightRT < 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. This is the average for most front tires so you should be good. But you should try filling your rear tires a bit more.");
//        }
//        else if (userLeftRT > 32 && userRightRT > 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Your front tires are good, but I think that your rear tires are too full, this could be dangerous. Try emptying them.");
//        }
//        else if (userLeftRT === 32 && userRightRT === 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Your car seems to be in perfect shape. All your tires are full and ready to go.")
//        }
//    }
//    else if (userLeftFT < 32 || userRightFT < 32)
//    {
//        if (userLeftRT < 32 && userRightRT < 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Some of your front and rear tires seem to be below the average PSI for tires which should be 32. I suggest you fill them up.");
//        }
//        else if (userLeftRT > 32 && userRightRT > 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Your front tires seem to be below the average, but what worries me most is that your rear tires are too full. Try emptying them down to 32 PSI.");
//        }
//        else if (userLeftRT === 32 && userRightRT === 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. It seems that your rear tires are good, but your front tires are below the average. Try filling them up.");
//        }
//
//    }
//    else if (userLeftFT > 32 || userRightFT > 32)
//    {
//        if (userLeftRT < 32 && userRightRT < 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Some of your front tires seem to be above the average PSI for tires which should be 32. I suggest you empty them a bit. Also your rear tires are under the average try filling these up a bit.");
//        }
//        else if (userLeftRT > 32 && userRightRT > 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. Your front and rear tires seem to be above the average, but what worries me most is that your front tires are too full. Try emptying them down to 32 PSI.");
//        }
//        else if (userLeftRT === 32 && userRightRT === 32)
//        {
//            console.log("You said that the front right and left tires had " + userLeftFT + " and " + userRightFT + " PSI. While the rear left and right tires had " + userLeftRT + " and " + userRightRT + " PSI. It seems that your rear tires are good, but your front tires are above the average. Try emptying them down to the average.");
//        }
//    }
//}
//
// console.log("Hope that you had a good time and please come again.");
