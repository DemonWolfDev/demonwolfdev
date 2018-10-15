// Fixs the menu so when link is clicked it would close the menu.
$(function () {

    $('#bs-example-navbar-collapse-1')
        .on('shown.bs.collapse', function () {
            $('#navbar-hamburger').addClass('hidden');
            $('#navbar-close').removeClass('hidden');
        })
        .on('hidden.bs.collapse', function () {
            $('#navbar-hamburger').removeClass('hidden');
            $('#navbar-close').addClass('hidden');
        });

});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});
$(function () {
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
