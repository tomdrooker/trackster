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
        console.log(response);
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

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};
