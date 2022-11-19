function openTabs(links, tabs) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (!link.classList.contains("active")) {
        let id = link.dataset.tab;
        let currentTab = document.querySelector(`#${id}`);
        links.forEach((link) => {
          link.classList.remove("active");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        link.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  });
}

//_TABS_1
const LINKS_1 = document.querySelectorAll(".tab-1__link");
const TABS_1 = document.querySelectorAll(".tab-1__item");

//_TABS_2
const LINKS_2 = document.querySelectorAll(".tab-2__link");
const TABS_2 = document.querySelectorAll(".tab-2__item");

//_TABS_3
const LINKS_3 = document.querySelectorAll(".tab-3__link");
const TABS_3 = document.querySelectorAll(".tab-3__item");

openTabs(LINKS_1, TABS_1);
openTabs(LINKS_2, TABS_2);
openTabs(LINKS_3, TABS_3);

//_TABS_4
const LINKS_4 = document.querySelectorAll(".tab-4__link");
const TABS_4 = document.querySelectorAll(".tab-4__item");

LINKS_4.forEach((link) => {
  if (link.classList.contains("active")) {
    let id = link.dataset.tab;
    let currentTab = document.querySelector(`#${id}`);

    const LINKS_4_MIN = currentTab.querySelectorAll(".tab-4-min__link");
    const TABS_4_MIN = currentTab.querySelectorAll(".tab-4-min__item");

    openTabs(LINKS_4_MIN, TABS_4_MIN);
  }

  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (!link.classList.contains("active")) {
      let id = link.dataset.tab;
      let currentTab = document.querySelector(`#${id}`);

      LINKS_4.forEach((link) => {
        link.classList.remove("active");
      });

      TABS_4.forEach((tab) => {
        tab.classList.remove("active");
      });

      currentTab.classList.add("active");
      link.classList.add("active");

      const LINKS_4_MIN = currentTab.querySelectorAll(".tab-4-min__link");
      const TABS_4_MIN = currentTab.querySelectorAll(".tab-4-min__item");
      openTabs(LINKS_4_MIN, TABS_4_MIN);
    }
  });
});
