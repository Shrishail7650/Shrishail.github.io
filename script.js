// Add smooth scrolling effect
$(document).ready(function () {
  $("nav ul li a").on("click", function (event) {
    event.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });

  // Highlight the current section
  $("nav ul li a").on("click", function () {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
  });
});
