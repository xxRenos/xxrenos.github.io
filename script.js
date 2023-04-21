function toggleNightMode() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "night-mode" ? "day-mode" : "night-mode";
  
  var text = document.getElementById("night-button");
  if (text.value == "day mode") text.value = "night mode";
  else text.value = "day mode";
}