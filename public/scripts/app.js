/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {

  // Create tweet DOM representation
  function createHeader(tweetObject) {
    const $header = $("<header>").addClass("faded");

    const $avatar = $("<img>").attr("src", tweetObject.user.avatars.small).addClass("avatar");
    const $author = $("<span>").text(tweetObject.user.name).addClass("author");
    const $handle = $("<span>").text(tweetObject.user.handle).addClass("handle");

    $header.append($avatar, $author, $handle);

    return $header;
  }

  function createTweetBody(tweetObject) {
    const $tweetBody = $("<p>").text(tweetObject.content.text).addClass("tweet-body");
    return $tweetBody;
  }

  function createFooter(tweetObject) {
    const $footer = $("<footer>");

    const $tweetAge = $("<span>").text(formatAge(tweetObject.created_at)).addClass("tweet-age");
    const $icons = $("<span>").addClass("icons");

    const $flag = $("<i>").addClass("fa fa-flag");
    const $retweet = $("<i>").addClass("fa fa-retweet");
    const $heart = $("<i>").addClass("fa fa-heart");

    $icons.append($flag, " ", $retweet, " ", $heart);

    $footer.append($tweetAge, $icons);

    return $footer;
  }

  function createTweetElement(tweetObject) {

    const $tweet = $("<article>").addClass("tweet");
    const $header = createHeader(tweetObject);
    const $tweetBody = createTweetBody(tweetObject);
    const $footer = createFooter(tweetObject);

    $tweet.append($header, $tweetBody, $footer);

    return $tweet;
  }

  // Render tweets on the page
  function clearTweets() {
    $('#tweet-list').empty();
  }

  function renderTweets(tweets) {

    //clearTweets();

    tweets = tweets.sort(function (a, b) {
      return b.created_at - a.created_at;
    });

    for (let tweetObject of tweets) {
      $('#tweet-list').append(createTweetElement(tweetObject));
    }
  }

  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET"
    }).then(function (data) {
      renderTweets(data);
    });
  }
  loadTweets();

  // Submit new tweet
  $(".new-tweet form").submit(function (event) {
    event.preventDefault();

    const textArea = $(this).find("textarea")
    const numChars = textArea.val().length;

    if (numChars > 140) {
      alert("Too many characters.");
      return;
    }

    if (numChars === 0) {
      alert("You may not submit an empty tweet.");
      return;
    }

    $(".container .loading").show();

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize()
    }).then(function () {
      clearTweets();
      $(".container .loading").hide();
      textArea.val("").trigger("keyup");
      loadTweets();
    });
  });

  // Compose button
  $(".compose").on("click", function () {
    $(".new-tweet").slideToggle(function () {
      if ($(".new-tweet").is(":visible")) {
        $(".new-tweet").find("textarea").focus();
      }
    });
  });
});