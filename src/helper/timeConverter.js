export function formatTimeFromDateString(datetimeStr) {
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;

  // Convert the datetime string to a Date object
  const dtObject = new Date(datetimeStr);
  // Get the current time
  const currentTime = new Date();

  // Calculate the difference in total seconds
  const totalSeconds = Math.floor((currentTime - dtObject) / 1000); // Difference in seconds

  let days = Math.floor(totalSeconds / secondsInDay);
  let remainingSeconds = totalSeconds % secondsInDay;

  let hours = Math.floor(remainingSeconds / secondsInHour);
  remainingSeconds %= secondsInHour;

  let minutes = Math.floor(remainingSeconds / secondsInMinute);
  let seconds = remainingSeconds % secondsInMinute;

  // Return the highest non-zero time unit in abbreviated form
  if (days > 0) {
    return `${days}d`; // days
  } else if (hours > 0) {
    return `${hours}h`; // hours
  } else if (minutes > 0) {
    return `${minutes}m`; // minutes
  } else {
    return `${seconds}s`; // seconds
  }
}
