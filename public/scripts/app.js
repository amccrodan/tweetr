/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

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

  function renderTweets(tweets) {
    for (let tweetObject of tweets) {
      $('#tweet-list').append(createTweetElement(tweetObject));
    }
  }

  // Fake data taken from tweets.json
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1485294208659
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1485294208659 - 3600000
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1485294208659 - 200000000
    }
  ];

  renderTweets(data);

});