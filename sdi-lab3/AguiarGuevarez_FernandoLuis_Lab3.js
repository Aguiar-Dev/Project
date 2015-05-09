/*
    Fernando Luis Aguiar Guevarez
    05/09/2015
    Deliverable 2
 */

//alert("JavaScript works!");

//Variables
var storyString = "to eat at Crisper's.";
var storyEscape = "\"Holy Sandwich\""
var realAmountPaid = 7.65;
var serviceQuality = true;


//Output

console.log("We had decided " + storyString + " Even after we had started walking to Wendy's.");
console.log("What I ordered at Crisper's was the East Coast Chicken Sandwich, which I consider to be the " + storyEscape + ".");
console.log("The price for my sandwich ended up being $" + realAmountPaid + ". Which was well worth it. ");
console.log("I think that my food was good, but it is also " + serviceQuality + " that the service was good.");

//Confirm

serviceQuality = confirm("Do you think service quality was good?\nClick OK for True, Click Cancel for False.");

if (serviceQuality === true)
{
    console.log("You said that it is true that service was good. Cool that we agree on service quality being good.");
    var realAmountTip = 2.15;
    var amountTip = parseFloat(prompt("Now tell me how much do you think I left for the tip.\nHint: Between $2.10 and $2.20. Numbers only please."));
    if (amountTip === realAmountTip) {
        console.log("You said I left $" + amountTip + ". Wow you got the price spot on . The total price for my visit to Crisper's was $" + ((realAmountPaid) + ((realAmountTip) + (amountTip))) + ".");
    }
    else {
        console.log("You said I left $" + amountTip+ " but that doesn't seem right. The actual tip I left was $" + realAmountTip + ".");
    }
}
else if (serviceQuality === false)
{
    console.log("You told me that you think service was bad. Well I think the service was very good. Sorry that you don't see it that way.");
    var waiterName = prompt("My waiter was very nice and helpful.\nTry and guess his name why don't you.");
    if (waiterName === "Bob")
    {
        console.log("You said his name was " + waiterName + "? Wow you actually got it right! I think that all " + waiterName + " are really nice but " + waiterName + " was the nicest of them all.");
    }
    else
    {
        console.log("So his name was " + waiterName + "? Yeah, see I knew that you wouldn't guess his name. My waiters name was Bob");
    }
}

//Final Output

console.log("In the end my trip to the Crisper's was very interesting and tasty.");