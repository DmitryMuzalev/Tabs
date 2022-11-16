const LINKS = document.querySelectorAll(".tab-1__link");
const TABS = document.querySelectorAll(".tab-1__item");

LINKS.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (!link.classList.contains("active")) {
      let id = link.dataset.tab;
      let currentTab = document.querySelector(`#${id}`);

      LINKS.forEach((link) => {
        link.classList.remove("active");
      });

      TABS.forEach((tab) => {
        tab.classList.remove("active");
      });

      link.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});
