// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
function bold(){
	if($.btnBold.title=='Bold') {
		$.addClass($.lblBasic, 'bold');
		$.btnBold.title="Unbold";	
	}  else {
		$.removeClass($.lblBasic, 'bold');
		$.btnBold.title="Bold";
	}
}

function italic(){
	if($.btnItalic.title=='Italic') {
		$.addClass($.lblBasic, 'italic');
		$.btnItalic.title="Normal";	
	}  else {
		$.removeClass($.lblBasic, 'italic');
		$.btnItalic.title="Italic";
	}
}
function red(){
	if($.btnRed.title=='Red') {
		$.addClass($.lblBasic, 'red');
		$.btnRed.title="Black";	
	}  else {
		$.removeClass($.lblBasic, 'red');
		$.btnRed.title="Red";
	}
}

function gotoHome(){
	$.basicStuff.close();
}