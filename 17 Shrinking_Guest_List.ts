let Guest_list : string[] = ['Mr. ShahRukh Khan','Mr. Robert Downey Jr','Mr. Hugh Jackman'];

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
// }

let absent_guest : string = 'Mr. ShahRukh Khan' ;

let new_guest : string = 'Ms. Ana De Armas' ;

Guest_list[0] = new_guest

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
// }

console.log(`${absent_guest} is not coming to the Dinner Party.`);

console.log('Good News ! We Find A Big Table, So Now We Are Inviting 3 More Guests.');

// Array Mai 3 Guest Add Kiye Haim
Guest_list.unshift('Mr. Christian Bale');

Guest_list.splice(2 , 0 , 'Ms. Emma Watson');

Guest_list.push('Ms. Anne Hathaway');

// Yahan Par Mai Ne 6 Guest K Array Ko Print Karwaya Hai
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
}

// Sorry Message To Guest That We Can't Invite Them
console.log('\nSorry we can not arrange Big Table, Only Two Peoples will be invited.');

// Yahan Par Mai Ne Guest Remove Kiye Hain 
while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry ${remove_Guest}, You are not invited for Dinner.`);
 }

//  Our 2 Remainning Invited Guests
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\nYou Are Still Invited To The Dinner Party.\n\nThank You!\n\n')
}

// Mai Ne Saaray Guest Array Se Remove Kar Diye Hain 
Guest_list.splice(0, 2);
console.log(Guest_list);