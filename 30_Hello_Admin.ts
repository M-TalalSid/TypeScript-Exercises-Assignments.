// Hello Admin: Make A Array Of Five Or More Usernames, Including The Name 'Admin'. 
// Imagine You Are Writing Code That Will Print A Greeting To Each User After They Log In To A Website. 
// Loop Through The Array, And Print A Greeting To Each User:
// If The Username Is 'Admin', Print A Special Greeting, Such As Hello Admin, Would You Like To See A Status Report?

// Otherwise, Print A Generic Greeting, Such As Hello Eric, Thank You For Logging In Again.

const userNames : string [] = ['Admin', 'Hazique', 'Anas', 'Mubashir', 'Afridi'];

for(let i=0; i<userNames.length; i++){
    if(userNames[i] === 'Admin'){
        console.log('Hello Admin, Would You Like To See A Status Report ? ');
    }
    else{
        console.log(`Hello ${userNames[i]}, Thank You For Logging In Again. `);
    }
}