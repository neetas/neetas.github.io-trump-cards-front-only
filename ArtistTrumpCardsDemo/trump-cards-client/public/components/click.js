$(document).ready( function() {
 $('#randomdeal').click(function( event ){
   event.preventDefault();
   var inputid = $('#inputid').val();

   if (inputid !== ""){
        showTrumpCard(inputid);
   }
   else {
   //     $.ajax({
   //   url: 'http://neetametricsapi.eu-west-1.elasticbeanstalk.com/artists',
   //   type: 'GET',
   //   data: {
   //     format: 'json'
   //   },
   //   error: function(e) {
   //     console.log("ERROR getting top1000artistids");
   //     console.log(e);
   //   },
   //   success: function(ids){
   //     var randomId = ids[Math.floor(Math.random() * ids.length)];
   //     showTrumpCard(randomId);
   //   }
   // });
   //For Demo Mode:
   var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
   randomise(ids);
  }
 });

 $( ".charts" ).click(function( event ) {
     $('.chart').empty();
     hideCard();
     loadCharts();
     Chartfadein();
 });
});


function showTrumpCard(artistid){
 var url = "trump-cards-api/artist/" + artistid + ".json"; //demo mode version
$('#activelistenersicon').empty();
$('#demandicon').empty();
$('#globalicon').empty();
$('#worthicon').empty();
$('#statusicon').empty();
 chartHide();
 loadDetails(artistid, url);
 Cardfadein();
}

function randomise(ids){
      var randomId = ids[Math.floor(Math.random() * ids.length)];
      showTrumpCard(randomId);
}
