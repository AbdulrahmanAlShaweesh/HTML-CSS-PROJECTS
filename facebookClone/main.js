var settingMenu = document.querySelector(".setting-dropdown-menu");

function settingsMenuToggle() {
  settingMenu.classList.toggle("setting-dropdown-menu-height");
}

var dark_btn = document.getElementById("dark-btn");

dark_btn.onclick = function () {
  dark_btn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
};
