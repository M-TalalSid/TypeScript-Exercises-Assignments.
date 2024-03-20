// Alien Colors #3: Turn Your If-Else Chain From Exercise 25-26 Into An Else-If Chain.

// • Write Three Versions Of This Program, Making Sure Each Message Is Printed For The Appropriate Color Alien.

let alienColor : string = " Green ";

// • If The Alien Is Green, Print A Message That The Player Earned 5 Points.
// • If The Alien Is Yellow, Print A Message That The Player Earned 10 Points.
// • If The Alien Is Red, Print A Message That The Player Earned 15 Points.

// Version 1 Of The Program

if(alienColor === " Green "){
    console.log(" The Player Just Earned 5 Points !! ");
}
else if(alienColor === " Yellow "){
    console.log(" The Player Just Earned 10 Points !! ");
}
else if(alienColor === " Red "){
    console.log(" The Player Just Earned 15 Points !! ");
}
else{
    console.log(" Please Select The Right Color ");
}

// Version 2 Of The Program 

alienColor = " Yellow ";
if(alienColor === " Green "){
    console.log(" The Player Just Earned 5 Points !! ");
}
else if(alienColor === " Yellow "){
    console.log(" The Player Just Earned 10 Points !! ");
}
else if(alienColor === " Red "){
    console.log(" The Player Just Earned 15 Points !! ");
}
else{
    console.log(" Please Select The Right Color ");
}

// Version 3 Of The Program 

alienColor = " Red ";
if(alienColor === " Green "){
    console.log(" The Player Just Earned 5 Points !! ");
}
else if(alienColor === " Yellow "){
    console.log(" The Player Just Earned 10 Points !! ");
}
else if(alienColor === " Red "){
    console.log(" The Player Just Earned 15 Points !! ");
}
else{
    console.log(" Please Select The Right Color ");
}



