// Write An If-Else Chain That Determines A Person’s Stage Of Life.

// Set A Value For The Variable Age, And Then :

let age : number = 25;

// • If The Person Is Less Than 2 Years Old, Print A Message That The Person Is A Baby.
if(age < 2){
    console.log(" The Person Is A Baby. ");
}

// • If The Person Is At Least 2 Years Old But Less Than 4, Print A Message That The Person Is A Toddler.
else if(age >= 2 && age < 4){
    console.log(" The Person Is A Toddler. ");
}

// • If The Person Is At Least 4 Years Old But Less Than 13, Print A Message That The Person Is A Kid.
else if(age >= 4 && age < 13){
    console.log(" The Person Is A Kid. ");
}

// • If The Person Is At Least 13 Yyears Old But Less Than 20, Print A Message That The Person Is A Teenager.
else if(age >= 13 && age < 20){
    console.log(" The Person Is A Teenager. ");
}

// • If The Person Is At Least 20 Years Old But Less Than 65, Print A Message that The Person Is An Adult.
else if(age >= 20 && age < 65){
    console.log(" The Person Is An Adult. ");
}

// • If The Person Is Age 65 Or Older, Print A Message That The Person Is An Elder.
else if(age > 65 ){
    console.log(" The Person Is An Elder. ");
}


