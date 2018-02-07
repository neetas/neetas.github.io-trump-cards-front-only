
function show_visualisation(src, selector, opacity){
	var img = $('<img />', {
		id: 'visualisation',
		src: src,
		width: 20,
		height: 20,
    opacity: opacity
	});

	img.appendTo($(selector));
}

function show_status(src, selector){
  var img = $('<img />', {
    id: 'visualisation',
    src: src,
    width: 87,
    height: 27
  });

  img.appendTo($(selector));
}

function printVisualisation(score, mark, blank){

  for(i = 0; i < score; i++){
    mark();
  }

  if(score > 0){
    for( i = 0; i < 10 - score; i++){
      blank();
    }
  }
}

function printJoker(){
  var joker = 0;
  for(i = 0; i < 10 - joker; i++){
    jokermark();
  }
}

function printStatus(s){
  if (s === 1) {status()};
}