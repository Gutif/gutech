const toggleBtn = document.querySelector(".toggle-btn-0");
const toggleBtnIcon = document.querySelector(".toggle-btn-0 i");
const dropDownMenu = document.querySelector(".drop_down_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.getElementById("myTextarea").addEventListener("input", function () {
  document.getElementById("submitButton").disabled = this.value.trim() === "";
});
