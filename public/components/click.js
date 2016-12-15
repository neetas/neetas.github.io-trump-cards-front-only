$(document).ready( function() {
 $('#randomdeal').click(function( event ){
   event.preventDefault();
   var inputid = $('#inputid').val();

   if (inputid !== ""){
        showTrumpCard(inputid);
   }
   else {
       $.ajax({
     url: 'http://neetametricsapi.eu-west-1.elasticbeanstalk.com/top1000artistids',
     type: 'GET',
     data: {
       format: 'json'
     },
     error: function(e) {
       console.log("ERROR getting top1000artistids");
       console.log(e);
     },
     success: function(ids){
       var randomId = ids[Math.floor(Math.random() * ids.length)];
       showTrumpCard(randomId);
     }
   });
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
 var url = "http://neetametricsapi.eu-west-1.elasticbeanstalk.com/artist";
$('#activelistenersicon').empty();
$('#demandicon').empty();
$('#globalicon').empty();
$('#worthicon').empty();
$('#statusicon').empty();
 chartHide();
 loadDetails(artistid, url);
 Cardfadein();
}
