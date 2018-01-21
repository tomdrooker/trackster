var Trackster = {};
const API_KEY = 'b094def71f859ced6757c13a8b41867e';

$(document).ready(function() {
  $('#search-button').click(function(){
    Trackster.searchTracksByTitle($('#search-input').val());
    Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
      datatype: 'jsonp',
      success: function(response){
        Trackster.renderTracks(response.results.trackmatches.track);
        console.log(response.results.trackmatches.track);
      }

    });
  };
  });
});


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $trackInfo = $('#track-info');

  $trackInfo.empty();

  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++){
  var track = tracks[trackIndex];
  var mediumAlbumArt = track.image[1]["#text"];
  var htmlTrackRow =
      '<div class="row">' +
        '<p class="col-xs-1 col-xs-offset-1"><i class="fa fa-play-circle-o fa-2x"></i>' +
        '<a href="' + track.url + '" target="_blank">' +
        '</p>' +
        '<p class="col-xs-3">' + track.name + '</p>' +
        '<p class="col-xs-2">' + 'track.artist' + '</p>' +
        '<p class="col-xs-2">' + mediumAlbumArt + '</p>' +
        '<p class="col-xs-2">' + track.listeners + '</p>' +
        '</div>';
  $('#track-info').append(htmlTrackRow);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};
