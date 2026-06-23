// Cache DOM elements
const hourHand = document.querySelector(".hour_hand");
const minHand = document.querySelector(".min_hand");
const secHand = document.querySelector(".sec_hand");
const timeDisplay = document.querySelector(".time_display");
const dateDisplay = document.querySelector(".date_display");

// Time-to-degrees constants
const DEG_PER_SEC = 6,
  DEG_PER_MIN = 6,
  DEG_PER_HOUR = 30;

const BASE_ROTATION = 90;

export default function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secDegrees = seconds * DEG_PER_SEC + BASE_ROTATION;

  // Remove transition when hand loops back
  if (seconds === 0) {
    secHand.style.transition = "none";
  } else {
    secHand.style.transition = "all 0.05s";
    secHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  secHand.style.transform = `rotate(${secDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees =
    minutes * DEG_PER_MIN + (seconds / 60) * DEG_PER_MIN + BASE_ROTATION;

  // Remove transition when hand loops back
  if (minutes === 0 && seconds === 0) {
    minHand.style.transition = "none";
  } else {
    minHand.style.transition = "all 0.05s";
    minHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees =
    hours * DEG_PER_HOUR + (minutes / 60) * DEG_PER_HOUR + BASE_ROTATION;

  // Remove transition when hand loops back
  if (hours === 0 && minutes === 0 && seconds === 0) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 0.05s";
    hourHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const dateString = now.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  dateDisplay.textContent = dateString;

  const timeString = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  timeDisplay.textContent = timeString;
}
