// Smooth scrolling function
(function ($) {
    "use strict";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return !1
            }
        }
    });
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
    });
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 0) {
            $("#mainNav").addClass("navbar-shrink")
        } else {
            $("#mainNav").removeClass("navbar-shrink")
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse)
})(jQuery)

var time = new Date().getHours();

var data = [];

if (time >= 0 && time < 5) {
    data.push("Well it's getting kind of late", "Shouldn't you be sleeping by now?", "I think you really like me if you here this late");
};

if (time >= 5 && time < 10) {
    data.push('Good Morning', 'What a good day today', "Go make some coffee", "Let's get this day going");
};

if (time >= 10 && time < 12) {
    data.push('Good Morning', 'Glad to see you here', 'Feel free to explore my website');
};

if (time >= 12 && time < 17) {
    data.push('Good Afternoon', 'Glad to see you here', 'Feel free to explore my website');
};
if (time >= 17 && time < 24) {
    data.push('Good Evening', 'Glad to see you here', 'Feel free to explore my website');
}

// Typing Function
var heading = document.getElementById("typing");
var j = 0;
var i = 0;
var k;

function typing() {
    if (heading.innerHTML.length === data[j].length) {
        k = 0;
        setTimeout(del, 1500);
    }
    if (i < data[j].length) {
        heading.innerHTML += data[j].charAt(i);
        i++;
        setTimeout(typing, 70);
    } else {
        j++;
        i = 0;
        k = 0;
        setTimeout(typing, 3000);
    }
    if (j === data.length) {
        j = 0;
    }
}

function del() {
    if (heading.innerHTML.length == 0) {
        clearTimeout(time);
    } else {
        heading.innerHTML = heading.innerHTML.slice(0, heading.innerHTML.length - k);
        k++;
        var time = setTimeout(del, 100);
    }
}
typing();

// Hide Sabnuv Button Function
$('#HSbutton').click(function () {
    if ($('#HSbutton').text() === 'Hide') {
        $(this).text('Show');
        $('.subnav').fadeOut()
    } else {
        $(this).text('Hide');
        $('.subnav').fadeIn()
    }
});