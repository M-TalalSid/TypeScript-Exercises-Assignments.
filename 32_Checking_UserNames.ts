// Checking Usernames : Do The Following To Create A Program That Simulates How Websites Ensure That Everyone Has A Unique Username.
// Make A List Of Five Or More Usernames Called Current_Users.

// Make Another List Of Five Usernames Called New_Users. 
// Make Sure One Or Two Of The New Usernames Are Also In The Current_Users List.

// Loop Through The New_Users List To See If Each New Username Has Already Been Used. 
// If It Has, Print A Message That The Person Will Need to Enter A New Username. If A Username Has Not Been Used, 
// Print A Message Saying That The Username Is Available.

// Make Sure Your Comparison Is Case Insensitive. If 'John' Has Been Used, 'JOHN' Should Not Be Accepted.

let current_users : string [] = ['HaziQue', 'Anas', 'MubasHir', 'Afridi', 'Ahsan'];

let new_users : string [] = ['Omer', 'HaziQue', 'Haider', 'MubasHir', 'Warasat'];

new_users.forEach(newusername => {
    let lowercase : string = newusername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The Username ${newusername} Is Not Available. Please Write A Different Username`);
    }
    else{
        console.log(`The Username ${newusername} Is Available.`);
    }
})