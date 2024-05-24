// Unchanged Magicians: Start With Your Work From Exercise 42. 

// Call The Function make_great() With A Copy Of The Array Of Magicians’ Names. 

// Because The Original Array Will Be UnChanged, Return The New Array And Store It In A Separate Array. 

// Call show_magicians() With Each Array To Show That You Have One Array Of The Original Names 

// And One Array With The Great Added To Each Magician’s Name.

let Magicians : string [] = ["Albus Dumbledore", "Harry Potter", "Hermione Granger", "Sirius Black", "Minerva McGonagall"];

function CopyMagiciansList(List : string [] ){
    return [...List]
}

function make_great (MagiciansList : string[]){

    for(let i=0; i<MagiciansList.length; i++){

        MagiciansList[i] = "The Great " + MagiciansList[i]
    }
}

function show_magicians(magicians : string[]){

    magicians.forEach(element => {
        console.log(element);
    })
}

const CopyMagicianList = CopyMagiciansList(Magicians);
 

make_great(CopyMagicianList);

console.log("\n\nThis Is My Original Magicians List :");
show_magicians(Magicians); 

console.log("\n\nThis Is My Modified Magicians List :");
show_magicians(CopyMagicianList);