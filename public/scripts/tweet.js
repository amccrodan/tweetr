$(document).ready(function() {
  const article = $("#tweet-list");
  const header = article.find($("header"));
  const icons = article.find($(".icons"));

  $(article).on("mouseenter", function() {
    icons.addClass("tweet-hover");
    header.removeClass("faded");
  });

  $(article).on("mouseleave", function() {
    icons.removeClass("tweet-hover");
    header.addClass("faded");
  });
});