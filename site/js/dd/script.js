function gotoDiv(witch){
	var txt;
	switch(witch){
		case 2: txt = "#secondDiv"; break;
		case 3: txt = "#thirdDiv"; break;
		case 4: txt = "#fourthDiv"; break;
		case 5: txt = "#fifthDiv"; break;
	}
	$('html, body').animate({
	       scrollTop: $(txt).offset().top
	   }, 1200);
	return false;
}
