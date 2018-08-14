$(document).ready(function () {
    $(".scene-1").show();
    $(".scene-2").hide();
    $(".scene-3").hide();
    $(".goto-scene-1").click(function () {
	    $(".scene-1").fadeIn();
	    $(".scene-2").hide();
	    $(".scene-3").hide();
    });
    $(".goto-scene-2").click(function () {
	    $(".scene-1").hide();
	    $(".scene-2").fadeIn();
	    $(".scene-3").hide();
    });
    $(".goto-scene-3").click(function () {
	    $(".scene-1").hide();
	    $(".scene-2").hide();
	    $(".scene-3").fadeIn();
    });
});
