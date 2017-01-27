$(function() {
  const $tweetList = $("#tweet-list");

  $tweetList.on("tweetsLoaded", function () {

    const $flag = $tweetList.find(".fa-flag");
    const $retweet = $tweetList.find(".fa-retweet");
    const $heart = $tweetList.find(".fa-heart");

    $flag.on("click", function () {
      $(this).toggleClass("flagged");
    });

    $retweet.on("click", function () {
      $(this).toggleClass("retweeted");
    });

    $heart.on("click", function () {
      let liked = false;
      let increment = 0;
      const $likes = $(this).closest(".icons").find(".likes");

      if ($(this).hasClass("liked")) {
        $(this).removeClass("liked");
        liked = false;
        increment = -1;
      } else {
        $(this).addClass("liked");
        liked = true;
        increment = 1;
      }

      $.ajax({
        url: `/tweets/${$(this).data("tweet-id")}`,
        method: "POST",
        data: {liked: liked}
      }).then(function () {
        const newLikes = Number($likes.text()) + increment;
        $likes.text(newLikes);
      });
    });
  });
});