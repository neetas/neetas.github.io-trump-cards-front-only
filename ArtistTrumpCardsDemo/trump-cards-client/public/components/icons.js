function cansmark(){
	show_visualisation("public/src/cansmark.png", '#activelistenersicon');
}

function cansblank(){
	show_visualisation("public/src/cansblank.png", '#activelistenersicon');
}

function recordmark(){
	show_visualisation("public/src/recordmark.png",'#demandicon');
}

function recordblank(){
	show_visualisation("public/src/recordblankf.png",'#demandicon');
}

function poundmark(){
	show_visualisation("public/src/piggybank.jpg",'#worthicon');
}

function poundblank(){
	show_visualisation("public/src/piggyblank.jpg",'#worthicon');
}

function globemark(){
	show_visualisation("public/src/globemark.jpg",'#globalicon');
}

function globeblank(){
	show_visualisation("public/src/globeblankf.png",'#globalicon');
}

function status(){
	show_status("public/src/KING.png",'#statusicon')
}

function jokermark(){
	show_visualisation("public/src/joker.jpg","#activelistenersicon");
	show_visualisation("public/src/joker.jpg","#demandicon");
	show_visualisation("public/src/joker.jpg","#worthicon");
	show_visualisation("public/src/joker.jpg","#globalicon");
	show_visualisation("public/src/joker.jpg","#statusicon");
}
