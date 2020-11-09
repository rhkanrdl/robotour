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
    
    $('.sub-list div.list p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
    
    $('.sub-view-header p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $('.calc button.minus').click(function () {
        var $input = $(this).parent().find('span input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('.calc button.plus').click(function () {
        var $input = $(this).parent().find('span input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

  /* STAR_RATE*/
  var $starRate = $('.star-rate');
  if ($starRate.length > 0) $starRate.on('click', 'a', function() {
    var starValue = $(this).attr("data");
    $starRate.find('a').each(function() {
        $(this).find("i").removeClass("bxs-star");
      $(this).find("i").addClass("bx-star");

      if ($(this).attr("data") <= starValue) {

        $(this).find("i").removeClass("bx-star");
        $(this).find("i").addClass("bxs-star");
      }

    });
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