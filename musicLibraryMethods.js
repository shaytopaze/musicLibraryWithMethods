var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }

             },


  printPlaylists: function () {

    for (var output in this.playlists) {
      var expectedOutput = this.playlists[output];
      var tracks = this.playlists[output].tracks || [];



    console.log(output + ': ' + this.playlists[output].name + " " + tracks.length + ' tracks');
   }
    },

  printTracks: function () {

    for (var output in this.tracks) {
      var expectedOutput = this.tracks[output];
      console.log(output + ': ' + this.tracks[output].name + ' by ' + this.tracks[output].artist + ' (' + this.tracks[output].album + ')');

    }
  },

  printPlaylist: function (playlistId) {

  var trackIds = this.playlists[playlistId].tracks; // [ 't01', 't02' ] because i passed it 'p01'
  // if there are 2 tracks in library.playlist.p01.tracks -> I want to loop through
  // library.tracks 2 times
  var trackName;

  console.log(playlistId + ': ' + this.playlists[playlistId].name + " " + this.playlists[playlistId].tracks.length + ' tracks');

  for (var i = 0; i < trackIds.length; i++) {
    trackName = trackIds[i];
    trackNameObject = this.tracks[trackName];
    console.log(trackNameObject.id + ": " + trackNameObject.name + ' by (' + trackNameObject.artist + ')' );

  }
},

addTrackToPlaylist: function (trackId, playlistId) {
var playlistTracks = this.playlists[playlistId].tracks
playlistTracks.push(trackId);
console.log(playlistTracks);

},

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

addTrack: function (name, artist, album) {
  idName = this.uid();
  this.tracks[idName] = {
    id: idName,
    name: name,
    artist: artist,
    album: album
  };


 console.log(this.tracks);

},

addPlaylist: function (name) {
  idName = this.uid();
  this.playlists[idName] = {
    id: idName,
    name: name
 }

  console.log(this.playlists);

}

}

library.addPlaylist('My Brain Hurts');

library.addTrack('Three Women', 'Jack White', 'Lazaretto');

library.addTrackToPlaylist('t03', 'p01');

library.printPlaylist('p01');

library.printTracks();

library.printPlaylists();
