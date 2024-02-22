let Guest_list : string[] = ['Mr. ShahRukh Khan','Mr. Robert Downey Jr','Mr. Hugh Jackman'];

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
// }

let absent_guest : string = 'Mr. ShahRukh Khan' ;

let new_guest : string = 'Ms. Ana De Armas' ;

Guest_list[0] = new_guest

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
}

console.log(`${absent_guest} is not coming to the Dinner Party.`);

console.log('Good News ! We Find A Big Table, So Now We Are Inviting 3 More Guests.');

Guest_list.unshift('Mr. Christian Bale');

Guest_list.splice(2 , 0 , 'Ms. Emma Watson');

Guest_list.push('Ms. Anne Hathaway');

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
}
