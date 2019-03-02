$(document).ready(function () {

    $(".zip-mask").mask("99999");
    $('.phone-mask').mask("(999) 999-9999");
	
	$('.custompop .close').click(function () {
		$('.custompop').fadeOut("1000");
	});
	$('.eyeshow').click(function () {
		$('.custompop').fadeIn("1000");
	});
});



function refreshScheduler() {
    $('#scheduler').dxScheduler('instance').repaint();
}