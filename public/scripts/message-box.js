function messageBox(displayString, $this) {

  if ($this.find(".warning").length !== 0) {
    return;
  }

  $span = $("<span>").text(displayString).addClass("warning").appendTo($this);
  $this.parent().find("textarea").focus();

  $span.fadeOut(800, function () {
    $span.remove();
  });
}