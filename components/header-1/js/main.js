const headerBtn = document.querySelector(".header__menu-btn");
const headerList = document.querySelector(".header__menu-list");

headerBtn.addEventListener("click", () => {
  headerList.classList.toggle("open");
});
