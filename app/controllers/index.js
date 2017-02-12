function doClick(e) {
    alert($.label.text);
}

$.index.open();

function gotoBasic(){
	Alloy.createController('basicStuff').getView().open();
}
function gotoImageStuff(){
	Alloy.createController('imageStuff').getView().open();
}
