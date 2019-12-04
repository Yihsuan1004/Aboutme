$(document).ready(function () {



     // -------------------------------slider plugin--------------------------------//
    var margin = 0;
    var count = $('.slider').children().length;

    for (i = 0; i < count; i++) {
        $('.tab-box').append($('<span>').addClass('tab'));
    }

    $('.tab:first-child').addClass('tab-active');

    // handlers
    $('.nav-prev').on('click', function () {
        margin += 100;
        if (margin / 100 > 0) {
            margin = (count - 1) * -100;
        }
        update();
    });

    $('.nav-next').on('click', function () {
        margin -= 100;

        if (margin / 100 < 1 - count) {
            margin = 0;
        }

        update();
    });

    var $tabs = $('.tab');
    $tabs.toArray().forEach(function (element, index, array) {
        (function () {
            $(element).on('click', function () {
                margin = index * -100;
                update();
            });
        })();
    });

    function update() {
        $('.slider').css({
            'margin-left': margin + '%'
        });

        $('.tab-box .tab').removeClass('tab-active');
        $('.tab-box .tab:nth-child(' + (Math.abs(margin / 100) + 1) + ')').addClass('tab-active');
    }

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
            '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();



    //-------------------------------nav hamburger設定---------------//
    $('.hamburger').click(() => {
        $('nav ul').toggleClass('active');
    });



   //-------------------------------按鍵設定--------------------------//
   $("#exp-btn").click(()=> {
        //取得顯示內容的位置
        var target = $("#experience").offset().top;
        //滾動到指定位置
        target -=80;
        $("html,body").animate({scrollTop:target},1000);
        });
    
    $("#skill-btn").click(()=> {
        var target = $("#skill").offset().top;
        target -=80;
        $("html,body").animate({scrollTop:target},1000);
        });

    $("#work-btn").click(()=> {
        var target = $("#work").offset().top;
        target -=80;
        $("html,body").animate({scrollTop:target},1000);
        });

    $("#contact-btn").click(()=> {
        var target = $("#contact").offset().top;
        target -=80;
        $("html,body").animate({scrollTop:target},1000);
        });
   

   //intorduce按鍵滾動
    $("#head-arrow").click(()=> {
        var target = $("#experience").offset().top;
        target -=80;
        $("html,body").animate({scrollTop:target},800);
    });

    //返回頂部按鍵
    $("#back-btn").click(()=> {
        //取得顯示內容的位置
        var target = $(".introduce").offset().top;
        //滾動到指定位置
        target -=80;
        $("html,body").animate({scrollTop:target},800);
    });



    //-------------------------------ScrollMagic--------------------------//
    // init controller
    var controller = new ScrollMagic.Controller();

    //------introduce------//
    new ScrollMagic.Scene({triggerElement: '.introduce', duration: 800,})
        .on("enter", function () {
            $('.introduce').fadeIn(800);
            $('.introduce h1').addClass('animated fadeInDownBig');
            $('#resume').toggleClass('animated infinite pulse');
        })
        .on("leave", function () {
            $('.introduce').hide();
        })
        .addTo(controller);

    //------exp animation-------//
    // create a scene
    new ScrollMagic.Scene({triggerElement: '#experience', duration: 800,})
        .on("enter", function () {
            let delay = function(s){
                return new Promise(function(resolve,reject){
                    setTimeout(resolve,s);
                });
            };
            
            delay().then(function(){
                $('#middle').slideDown(1000);
                return delay(600);
            }).then(function(){
                $('#exp-1').fadeIn();
                return delay(300);
            }).then(function(){
                $('#exp-4').fadeIn();
                return delay(300);
            }).then(function(){
                $('#exp-2').fadeIn();
                return delay(300);
            }).then(function(){
                $('#exp-5').fadeIn();
                return delay(300);
            }).then(function(){
                $('#exp-3').fadeIn();
                return delay(300);
            }).then(function(){
                $('#exp-6').fadeIn();
                return delay(300);
            });
        })
        .on("leave", function (){
                $('#middle').slideUp();        
                $('#exp-1').hide();
                $('#exp-4').hide();
                $('#exp-2').hide();
                $('#exp-5').hide();
                $('#exp-3').hide();
                $('#exp-6').hide();
        })
        .addTo(controller);
        
    //------skill animation------//
    new ScrollMagic.Scene({triggerElement: '#skill', duration: 800,})
        .on("enter", function () {
            $('.html').animate({'width':'90%'},1500);
            $('.css').animate({'width':'78%'},1500);
            $('.javascript').animate({'width':'63%'},1500);
            $('.jquery').animate({'width':'65%'},1500);
            $('.git').animate({'width':'60%'},1500);
        })
        .on("leave", function () {
            $('.html').animate({'width':'0%'},500);
            $('.css').animate({'width':'0%'},500);
            $('.javascript').animate({'width':'0%'},500);
            $('.jquery').animate({'width':'0%'},500);
            $('.git').animate({'width':'0%'},500);
        })
        .addTo(controller);

    //------Works------//   
    new ScrollMagic.Scene({triggerElement: '.works', duration: 2400,})
        .on("enter", function (){
            $('.work-item').css('opacity','1');
            $('#res').addClass('animated slideInDown');
            $('#small-game').addClass('animated slideInDown');
            $('#tindog').addClass('animated slideInDown');
            $('#todo').addClass('animated slideInUp');
            $('#movie').addClass('animated slideInUp');
            $('#animal').addClass('animated slideInUp');
        })
        .on("leave", function (){
            $('.work-item').css('opacity','0');
            $('#res').removeClass('animated slideInDown');
            $('#small-game').removeClass('animated slideInDown');
            $('#tindog').removeClass('animated slideInDown');
            $('#todo').removeClass('animated slideInUp');
            $('#movie').removeClass('animated slideInUp');
            $('#animal').removeClass('animated slideInUp');
        })
        .addTo(controller);
      
    //------Contact------//  
    new ScrollMagic.Scene({triggerElement: '#animal', duration: 900,})
        .on("enter", function (){
            $('.contact').css('opacity','1');
            $('.contact-L').addClass('animated slideInLeft');
            $('.contact-R').addClass('animated slideInRight');
          
        })
        .on("leave", function (){
            $('.contact').css('opacity','0');
            $('.contact-L').removeClass('animated slideInLeft');
            $('.contact-R').removeClass('animated slideInRight');
        })
        .addTo(controller);




});