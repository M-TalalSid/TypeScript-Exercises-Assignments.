// Great Magicians: Start With A Copy Of Your Program From Exercise 39.

// Write A Function Called make_great() That Modifies The Array Of Magicians By Adding The Phrase 'The Great' To Each Magician’s Name.

// Call show_magicians() To See That The List Has Actually Been Modified.

let Magicians : string [] = ["Albus Dumbledore", "Harry Potter", "Hermione Granger", "Sirius Black", "Minerva McGonagall"];

function make_great (MagiciansList : string[]){

    for(let i=0; i<MagiciansList.length; i++){

        Magicians[i] = "The Great " + MagiciansList[i]
    }
}

function show_magicians(magicians : string[]){

    magicians.forEach(element => {
        console.log(element);
    })
}

make_great(Magicians);
show_magicians(Magicians);