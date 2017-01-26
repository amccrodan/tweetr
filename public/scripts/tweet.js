$(function() {
  const $tweetList = $("#tweet-list");

  $tweetList.on("mouseenter", "article", function () {
    const header = $(this).find($("header"));
    const icons = $(this).find($(".icons"));
    icons.addClass("tweet-hover");
    header.removeClass("faded");
  }).on("mouseleave", "article", function () {
    const header = $(this).find($("header"));
    const icons = $(this).find($(".icons"));
    icons.removeClass("tweet-hover");
    header.addClass("faded");
  });
});