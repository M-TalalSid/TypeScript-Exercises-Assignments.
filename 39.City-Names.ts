// City Names: Write A Function Called city_country() That Takes In The Name Of A City And Its Country.

// The Function Should Return A String Formatted Like This:

// "Lahore, Pakistan"

// Call Your Function With At Least Three City-Country Pairs, And Print The Value That’s Returned.

function city_country(city : string, country : string){

    return `${city},${country}`;
}

console.log(city_country("Karachi","Pakistan"));

console.log(city_country("Paris","France"));

console.log(city_country("Los Angeles","USA"));

console.log(city_country("Sydney","Australia"));