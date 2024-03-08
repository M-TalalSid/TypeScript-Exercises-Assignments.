// Tests for equality and inequality with strings"

// Equality ( Test No 1 )
console.log("Equality Test With Strings: ", "MacBook" === "MacBook");

// InEquality ( Test No 2 )
console.log("InEquality Test With Strings: ", ("MacBook" as String) != "Surface Book");

// Tests Using The Lower Case Function ( Test No 3 )
console.log("Lower Case Function Test: ", "TALAL".toLowerCase() === "talal");

// Numerical Tests Involving Equality And InEquality

// Equality ( Test No 4 )
console.log("Equality Test With Numbers: ", 24 === 24);

// InEquality ( Test No 5 )
console.log("InEquality Test With Numbers: ", (24 as Number) != 98);

// Tests Greater Than ( Test No 6 )
console.log("Greater Than Test:", 98 > 24);

// Less Than ( Test No 7 )
console.log("Less Than Test:", 24 < 98);

// Greater Than Or Equal To ( Test No 8 )
console.log("Greater Than And Equal To Test:", 98 >= 98);

// Less Than Or Equal To ( Test No 9 )
console.log("Less Than Or Equal To Test:", 24 <= 98);

// Tests Using "And" Operator ( Test No 10 )
console.log("And Operator Test:", 1===1 && 98 > 24 );

// Test Using "Or" Operator ( Test No 11 )
console.log("Or Operator Test:", 1===1 || false);

// Test Whether An Item Is In A Array ( Test No 12 )
const Fruits : String[] = ['Mango', 'WaterMelon', 'Plums'];
console.log('Test "Mango" In The Array: ', Fruits.includes("Mango"));

// Test Whether An Item Is In A Array ( Test No 13 )
console.log('Test "Mango" In The Array: ', Fruits.includes("Mango"));

// Test Whether An Item Is In A Array ( Yahan Bs False Lanay k Liye Fruits Se Pehlay ! Sign Use ki Hai ) ( Test No 14 )
console.log('Test "Mango" In The Array: ', !Fruits.includes("Mango"));




