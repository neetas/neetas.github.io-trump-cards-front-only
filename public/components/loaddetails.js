function loadDetails(namequery,url){
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      format: 'json',artistID: namequery
    },
    error: function(e) {
      $('.artist-name').text('Joker: No Artist ID');
      $('#image').attr("src","public/src/joker.jpg");
       $('#active-listeners-metric').text('0');
       printJoker();

    },
    success: function(artist){
      var $artistname = artist.name;
      var $artistImageUrl = artist.imageURL;
      var $activeListeners = artist.fanScore;
      var $demand = artist.demandScore;
      var $global = artist.globalibility;
      var $worth = artist.worthScore;
      var $status = 1;
      $('.artist-name').text($artistname);
      $('#image').attr("src",$artistImageUrl);

      printVisualisation($activeListeners, cansmark, cansblank);
      printVisualisation($demand, recordmark, recordblank);
      printVisualisation($global,globemark, globeblank);
      printVisualisation($worth,poundmark, poundblank);
      printStatus($status, '#statusicon');

    }
  });
};
