// // Cars: Write A Function That Stores Information About A Car In A Object. 

// The Function Should Always Receive A Manufacturer And A Model Name. 

// It Should Then Accept An Arbitrary Number Of Keyword Arguments. 

// Call The Function With The Required Information And Two Other Name-Value Pairs, 

// Such As A Color Or An Optional Feature. 

// Print The Object That’s Returned To Make Sure All The Information Was Stored Correctly.

import { features } from "process";

function CarInfo(Manufacturer : string, ModelName : String | Number, ...ExtraOptions : { [key : string ] : any} [] ):
Object  {

    const CarInfo = {
        Manufacturer,
        ModelName,
        ...Object.assign({}, ...ExtraOptions)
}

    return CarInfo;

}

let answer = CarInfo("Lamborghini", "Aventador", {color : "Black"}, {features : ["6.5L V12 Engine", "ABS Brakes"]});

console.log(answer);