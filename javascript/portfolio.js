
var button = document.getElementById("hamburger-button");
var content = document.getElementById("hamburger-menu");

button.addEventListener("click", hamBtnClick, false);

function hamBtnClick(evt) {
  if (content.style.display == "block") {
    content.style.display = "none";
    button.innerHTML = '<i class="fa fa-bars fa-3x"></i>';
  }
  else {
    content.style.display = "block";
    button.innerHTML = '<i class="fa fa-times fa-3x"></i>';
  }
  
}