// Large Shirts: Modify The make_shirt() Function So That Shirts Are Large By Default With A Message That Reads I Love TypeScript.

// Make A Large Shirt And A Medium Shirt With The Default Message, And A Shirt Of Any Size With A Different Message.

function make_shirt(size : string = "Large", text : string = "I Love TypeScript"){

    console.log(`Creating A ${size} Shirt With The Message : ${text}`);

}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "I love Learning New Things");

make_shirt("Extra Large", "Big Dawg Things");