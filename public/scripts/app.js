/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  function createTweetElement (tweetObject) {

    const dateNow = Date.now();
    const elapsedDays = Math.floor((dateNow - tweetObject.created_at) / 86400000);

    const $tweet = $("<article>").addClass("tweet");
    const $header = $("<header>").addClass("faded");
    const $tweetBody = $("<p>" + tweetObject.content.text + "</p>").addClass("tweet-body");
    const $footer = $("<footer>");

    $tweet.append($header, $tweetBody, $footer);

    const $avatar = $("<img>").attr("src", tweetObject.user.avatars.small).addClass("avatar");
    const $author = $("<span>" + tweetObject.user.name + "</span>").addClass("author");
    const $handle = $("<span>" + tweetObject.user.handle + "</span>").addClass("handle");

    $header.append($avatar, $author, $handle);

    const $tweetAge = $("<span>" + elapsedDays + " days ago</span>").addClass("tweet-age");
    const $icons = $("<span>").addClass("icons");

    $footer.append($tweetAge, $icons);

    $icons.append('<i class="fa fa-flag"></i> <i class="fa fa-retweet"></i> <i class="fa fa-heart"></i>');

    return $tweet;
  }

  function renderTweets (tweets) {
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
    "created_at": 1461116232227
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
    "created_at": 1461113959088
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
    "created_at": 1461113796368
  }
];

renderTweets(data);

});