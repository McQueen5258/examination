$("html").hide();
$("html").ready(function(){
    $("html").show();
});
// animation:rotate 10s infinite linear; 
$(".flower").click(function(){
    // $(".flower").style.animation = "rotateZ 10s infinite linear";
    document.querySelector(".flower").style.animation = "rotateZ 10s";
});