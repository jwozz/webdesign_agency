function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

function funcDrop() {
    var x = document.getElementsById("dr");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};


function funcDrop() {
    var x = document.getElementsById("dr2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};

// Sticky header
$(window).scroll(function() {
    var sticky = $('#h-cage')
    scroll = $(window).scrollTop();

    if (scroll >= 60) sticky.addClass('addTop');
    else sticky.removeClass('addTop');
});





$(window).scroll(function() {
    var sticky = $('#myNav')
    scroll = $(window).scrollTop();

    if (scroll >= 60) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
});




// get video element id
var vidClip = document.getElementById("myVideo");

// play video event
function playVid() {
    myVideo.play();
}

// pause video event
function pauseVid() {
    myVideo.pause();
}

// toggle button class on click
$('button').on('click', function() {
    $('.first, .second').toggle();
});

// toggle button class when finished
vidClip.onended = function(e) {
    $('.first, .second').toggle();
};