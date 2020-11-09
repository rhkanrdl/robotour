$(document).ready(function() {

    $("#header button").on("click", function(){
        $("nav#main-menu").addClass("on");
    });

    $("nav#main-menu button").on("click", function(){
        $("nav#main-menu").removeClass("on");
    });

    
    $('.main-slider div.slide').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
    
    $('.ai div.slide p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
    
    $('.ticket div.slide p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });




    $('.main-slider div.slider').slick({
        autoplay:true,
        speed: 1000,
        dots: true,
        infinite: true,
        nextArrow:$('.main-slider button.right'),
        prevArrow:$('.main-slider button.left')
    });



    $('.ai div.slider').slick({
        autoplay:true,
        speed: 1000,
        dots: false,
        infinite: true,
        nextArrow:$('.ai button.right'),
        prevArrow:$('.ai button.left'),
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1 
            }
        }
        ]
    });


});