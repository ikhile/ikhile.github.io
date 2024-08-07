$(document).ready(function() {
  // Initially show the About section
  $('#about').show();

  // Handle navigation click to swap sections
  $('#nav-links a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');

      // Hide all content sections
      $('.content-section').hide();

      // Show the target section
      $(target).show();

      // Move the navbar to fixed position
      $('#navbar').removeClass('navbar-light').addClass('navbar-dark bg-dark');
      $('#navbar').css('position', 'fixed');
      $('#navbar').css('top', '0');

      // Update content area style
      $('#content').css('margin-left', '200px');
  });
});
