function make_album(artist_Name, album_title, tracks) {
    var album = {
        artist: artist_Name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Atif Aslam", "Album 1");
console.log(album1);
var album2 = make_album("cahat fateh ali khan", "Album 2", 5);
console.log(album2);
var album3 = make_album("shahzad", "album 3", 100);
console.log(album3);
