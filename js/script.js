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

// Typing Function
var heading = document.getElementById("typing");
var data = ["Hi, I'm Eugene", "I'm a front end web developer", "Feel free to explore my website"];
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
        setTimeout(typing, 50);
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

// Initialize Firebase

var config = {
    apiKey: "AIzaSyDUrFH9ecZi-RG8115pd-2CO18QB-ZsDBE",
    authDomain: "contactform-3914e.firebaseapp.com",
    databaseURL: "https://contactform-3914e.firebaseio.com",
    projectId: "contactform-3914e",
    storageBucket: "contactform-3914e.appspot.com",
    messagingSenderId: "188783074347"
};
firebase.initializeApp(config);

//Reference message collection

var messageRef = firebase.database().ref('messages');

// Listen for form submit 

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values

    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message 

    saveMessage(name, email, message);

    //Show Alert

    document.getElementById('alert').style.display = 'block';

    //Hide Alert
    setTimeout(function () {
        document.getElementById('alert').style.display = 'none';
    }, 3000)

    // Clear form 

    document.getElementById('contactForm').reset();
}

// Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase 

function saveMessage(name, email, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}