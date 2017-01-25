$(function () {
  // Logo
  $("#nav-bar .logo").on("click", function () {

    const words = ["Tweet!", "Squawk!", "Honk!", "Whistle!", "Hoot!"];
    const top = (Math.random() * 10) + 10;
    const left = (Math.random() * 10) + 10;

    const $tweetNoise = $("<span>").text(words[Math.floor(Math.random() * 6)]).addClass("bird-noise")
      .css({
        top: top + "px",
        left: left + "px"
      }
    );

    $(this).parent().append($tweetNoise);
    $tweetNoise.fadeOut(200, function () {
      $tweetNoise.remove();
    });
  });
});