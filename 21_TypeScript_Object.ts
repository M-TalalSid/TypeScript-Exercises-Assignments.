// Write A Program That Creates Objects Containing These Items

// let personName : string = 'Talal' ;

// const personName_Array : string [] = ['Person', 'Car', 'Food'] ;

interface person {
    Name : string ,
    Age : number ,
    Nationality : string ,
    Student : boolean ,
}

let person : person = {

    Name : 'Talal' ,
    Age : 25 ,
    Nationality : 'Pakistan' ,
    Student : true
}

console.log(person);

interface Car {
    Company : String ,
    Model : String | Number ,
    Color : String ,
}

let Car: Car = {
    Company : 'Rolls Royce',
    Model: '2024 Rolls-Royce Cullinan',
    Color: 'Black' ,
}

console.log(Car);

