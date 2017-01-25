function formatAge(creationTime) {
  let dateString = "";

  const msInMinute = 60000;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInYear = msInDay * 365.25;

  const dateNow = Date.now();
  const elapsedTime = dateNow - creationTime;

  switch (true) {
    case (elapsedTime < msInMinute):
      dateString = "Less than one minute";
      break;
    case (elapsedTime < msInHour):
      dateString = Math.floor(elapsedTime / msInMinute) + " minutes";
      break;
    case (elapsedTime < msInDay):
      dateString = Math.floor(elapsedTime / msInHour) + " hours";
      break;
    case (elapsedTime < msInYear):
      dateString = Math.floor(elapsedTime / msInDay) + " days";
      break;
    default:
      dateString = Math.floor(elapsedTime / msInYear) + " years";
  }

  if (dateString.split(" ")[0] === "1") {
    dateString = dateString.replace("s", "");
  }

  return dateString + " ago";
}