// Ordinal Numbers: Ordinal Numbers Indicate Their Position In A Array, Such As 1st Or 2nd. Most Ordinal Numbers End In th, Except 1, 2, And 3.

// • Store The Numbers 1 Through 9 In A Array.

// • Loop Through The Array.

// • Use An If-Else Chain Inside The Loop To Print The Proper Ordinal Ending For Each Number. 

// Your Output Should Read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", And Each Result Should Be On A Separate Line.


let numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let num of numbers){

    let OrdinalEnding : string;

    if(num === 1){
        OrdinalEnding = "st";
    }
    else if(num === 2){
        OrdinalEnding = "nd";
    }
    else if(num === 3){
        OrdinalEnding = "rd";
    }
    else{
        OrdinalEnding = "th";
    }

    console.log(`${num}${OrdinalEnding}`);
}