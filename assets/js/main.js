$(function() {
$('#t-proj1').hover(function() {
    $('#img-proj1').fadeIn();
}, function() {
    $('#img-proj1').fadeOut();
});
});

$(function() {
$('#t-proj2').hover(function() {
    $('#img-proj2').fadeIn();
}, function() {
    $('#img-proj2').fadeOut();
});
});

$(function() {
$('#t-proj3').hover(function() {
    $('#img-proj3').fadeIn();
}, function() {
    $('#img-proj3').fadeOut();
});
});

$("#insta").hover(
  function() {
    $("body").addClass('b-insta');
  },
  function() {
    $("body").removeClass('b-insta');
  }
);

$("#git").hover(
  function() {
    $("body").addClass('b-git');
  },
  function() {
    $("body").removeClass('b-git');
  }
);

$("#telegram").hover(
  function() {
    $("body").addClass('b-telegram');
  },
  function() {
    $("body").removeClass('b-telegram');
  }
);

$("#twitter").hover(
  function() {
    $("body").addClass('b-twitter');
  },
  function() {
    $("body").removeClass('b-twitter');
  }
);
