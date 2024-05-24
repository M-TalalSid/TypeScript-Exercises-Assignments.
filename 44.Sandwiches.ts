// Sandwiches: Write A Function That Accepts A Array Of Items A Person Wants On A Sandwich. 

// The Function Should Have One Parameter That Collects As Many Items As The Function Call Provides, 

// And It Should Print A Summary Of The Sandwich That Is Being Ordered. 

// Call The Function Three Times, Using A Different Number Of Arguments Each Time.

function make_sandwich(Ingredients : string []){
    
    console.log("\nMaking Your Sandwich With :");

    Ingredients.forEach(element => console.log('- ' + element));

    console.log("\nEnjoy Your Sandwich !");

}

make_sandwich(["Turkey", "Bacon", "Cheese", "Lettuce", "Barbecue Sauce"]);

make_sandwich(["Ham", "Egg", "Cheese", "Mayo", "Lettuce"]);

make_sandwich(["Ham", "Turkey", "Parmesan Cheese", "Lettuce", "Barbecue Sauce"]);