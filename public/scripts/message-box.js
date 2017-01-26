function messageBox(displayString, $this) {

  if ($this.find(".warning").length !== 0) {
    return;
  }

  $span = $("<span>").text(displayString).addClass("warning").appendTo($this);
  $span.fadeOut(600, function () {
    $span.remove();
  })
}