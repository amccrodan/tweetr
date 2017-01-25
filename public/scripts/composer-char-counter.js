$(function() {
  $(".new-tweet").on("keyup", "textarea", function() {
    const remainingChars = 140 - $(this).val().length;
    const counter = $(this).parent().find('.counter');

    if (remainingChars < 0) {
      counter.addClass("invalid");
    } else {
      counter.removeClass("invalid");
    }

    counter.text(remainingChars);
  });
});