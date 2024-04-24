
function make_album(artist_Name: string, album_title: string, tracks? : number) {
    let album: {artist: String, title: String, tracks?: Number} = {
        artist : artist_Name,
        title : album_title,
    }

    if(tracks !== undefined){
       album.tracks = tracks;
    }
    return album;

}

let album1 = make_album("Atif Aslam", "Album 1");
console.log(album1);

let album2 = make_album("cahat fateh ali khan", "Album 2", 5);
console.log(album2);

let album3 = make_album("shahzad", "album 3", 100);
console.log(album3);