// Album: Write A Function Called make_album() That Builds A Object Describing A Music Album. 

// The Function Should Take In An Artist Name And An Album Title, 

// And It Should Return A Object Containing These Two Pieces Of Information. 

// Use The Function To Make Three Dictionaries Representing Different Albums. 

// Print Each Return Value To Show That Objects Are Storing The Album Information Correctly. 

// Add An Optional Parameter To make_album() That Allows You To Store The Number Of Tracks On An Album. 

// If The Calling Line Includes A Value For The Number Of Tracks, Add That Value To The Album’s Object.

// Make At Least One New Function Call That Includes The Number Of Tracks On An Album.

function make_album (ArtistName : string, AlbumTitle : string, tracks? : number){

    const album : {ArtistName : string, AlbumTitle : string, tracks? : number} = {

        ArtistName : ArtistName,
        AlbumTitle : AlbumTitle
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album ;

}

const album1 = make_album("Talha Anjum", "Open Letter");
console.log(album1);

const album2 = make_album("Talhah Yunus", "Shikwa");
console.log(album2);

const album3 = make_album("Umair", "ROCKSTAR WITHOUT A GUITAR", 20);
console.log(album3);