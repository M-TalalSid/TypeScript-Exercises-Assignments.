let Guest_list : string[] = ['Mr. ShahRukh Khan','Mr. Robert Downey Jr','Mr. Hugh Jackman'] ;
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
}

let absent_guest : string = 'Mr. ShahRukh Khan' ;
let new_guest : string = 'Ms. Ana De Armas' ;
Guest_list[0] = new_guest
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear ' + Guest_list[i] + ',\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n ')
}
console.log(`${absent_guest} Is Not Coming To The Dinner Party.`);