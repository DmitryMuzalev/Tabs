//_TABS_1
const LINKS_1 = document.querySelectorAll(".tab-1__link");
const TABS_1 = document.querySelectorAll(".tab-1__item");

LINKS_1.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (!link.classList.contains("active")) {
      let id = link.dataset.tab;
      let currentTab = document.querySelector(`#${id}`);

      LINKS_1.forEach((link) => {
        link.classList.remove("active");
      });

      TABS_1.forEach((tab) => {
        tab.classList.remove("active");
      });

      link.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});

//_TABS_2
const LINKS_2 = document.querySelectorAll(".tab-2__link");
const TABS_2 = document.querySelectorAll(".tab-2__item");

LINKS_2.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (!link.classList.contains("active")) {
      let id = link.dataset.tab;
      let currentTab = document.querySelector(`#${id}`);

      LINKS_2.forEach((link) => {
        link.classList.remove("active");
      });

      TABS_2.forEach((tab) => {
        tab.classList.remove("active");
      });

      currentTab.classList.add("active");
      link.classList.add("active");
    }
  });
});

//_TABS_3
const LINKS_3 = document.querySelectorAll(".tab-3__link");
const TABS_3 = document.querySelectorAll(".tab-3__item");

LINKS_3.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (!link.classList.contains("active")) {
      let id = link.dataset.tab;
      let currentTab = document.querySelector(`#${id}`);

      LINKS_3.forEach((link) => {
        link.classList.remove("active");
      });

      TABS_3.forEach((tab) => {
        tab.classList.remove("active");
      });

      currentTab.classList.add("active");
      link.classList.add("active");
    }
  });
});
