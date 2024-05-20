// Cities: Write A Function Called describe_city() That Accepts The Name Of A City And Its Country. 

// The Function Should Print A Simple Sentence, Such As Karachi Is In Pakistan. 

// Give The Parameter For The Country A Default Value. 

// Call Your Function For Three Different Cities, At Least One Of Which Is Not In The Default Country.

function describe_city(city : string, country : string = "Default Country."){
    
    console.log(` ${city} Is In ${country} `);

}

describe_city("Karachi", "Pakistan");

describe_city("Paris", "France");

describe_city("Los Angeles", "USA");

describe_city("Tokyo");