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
function submitLayout(){
	document.getElementById("modal").style.display = 'block';
	setTimeout(function(){
		document.application.submit();
	}, 1500);
}
function beforeafter(argument) {
	switch(argument){
		case 0:
			document.getElementById("beforrre").style.opacity = "1";
			document.getElementById("afterrr").style.opacity = "0";
			break;
		case 1:
			document.getElementById("beforrre").style.opacity = "0";
			document.getElementById("afterrr").style.opacity = "1";
			break;
	}
}