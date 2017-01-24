$(document).ready(function() {
  const article = $("#tweet-list article");

  $(article).on("mouseenter", function() {
    const header = $(this).find($("header"));
    const icons = $(this).find($(".icons"));
    icons.addClass("tweet-hover");
    header.removeClass("faded");
  }).on("mouseleave", function() {
    const header = $(this).find($("header"));
    const icons = $(this).find($(".icons"));
    icons.removeClass("tweet-hover");
    header.addClass("faded");
  });
});