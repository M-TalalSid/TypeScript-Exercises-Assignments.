// No Users: Add An If Test To Exercise 28 To Make Sure The List Of Users Is Not Empty.
// If The List Is Empty, Print The Message We Need To Find Some Users!

import { userInfo } from "os";

// Remove All Of The Usernames From Your Array, And Make Sure The Correct Message Is Printed.

let userNames : string [] = ['Admin', 'Haider', 'Omer', 'Warasat', 'Monty'];

if(userNames.length === 0){
    console.log('We Need To Some Users !');
}
else{
    userNames = [];
    console.log('All User Names Has Been Removed. ' + userNames.length);
}