$(document).ready(function () {
    $(".section_navigation").show();
    $(".section_lecture").hide();
    $(".chapitre-1").click(function () {
        $(".section_navigation").hide();
        $(".section_lecture").fadeIn();
    });
    $(".home").click(function () {
        $(".section_lecture").hide();
        $(".section_navigation").fadeIn();
    });
});
