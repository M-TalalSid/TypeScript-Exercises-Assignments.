// Magicians: Make A Array Of Magician’s Names. Pass The Array To A Function Called show_magicians(), 
// Which Prints The Name Of Each Magician In The Array.

let Magicians : string [] = ["Albus Dumbledore", "Harry Potter", "Hermione Granger", "Lord Voldemort", "Sirius Black", "Minerva McGonagall"];

function show_magicians(magicians : string[]){

    magicians.forEach(element => {
        console.log(element);
    })
}

show_magicians(Magicians);