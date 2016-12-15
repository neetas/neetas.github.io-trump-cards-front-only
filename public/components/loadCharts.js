function showChart(position, chart){
  
  var $name = chart[position-1].name;
  var $total = chart[position-1].total;

  var chartRow = $('<div />',{
    class: "chart"
  });

  var chartTotal = $('<div />', {
      class: "chart-total",
      id: "chart-total-"+position,
      text: $total.toLocaleString()
    });
  chartTotal.appendTo(chartRow);

  var chartArtist = $('<div />', {
      class: "chart-artist-name",
      id: "chart-artist-name-"+position,
      text: $name
    });
  chartArtist.appendTo(chartRow);

  var chartPosition = $('<div />', {
      class: "chart-position",
      id: "chart-position-"+position,
      text: position
    });
  chartPosition.appendTo(chartRow);

  chartRow.appendTo($("#activeListenersChart"))

};

function loadCharts(){
  $.ajax({
    url: "http://neetametricsapi.eu-west-1.elasticbeanstalk.com/charts",
    type: 'GET',
    data: {
      format: 'json'
    },
    error: function(e){
       $('.chartserror').attr("src","src/joker.jpg");
    },
    success: function(charts){
      for(i = 1; i <= charts.activeListeners.length; i++){
        showChart(i, charts.activeListeners);
      }


    }
  });
};
