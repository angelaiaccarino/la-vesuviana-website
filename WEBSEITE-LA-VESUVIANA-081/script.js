const navButtons = document.querySelectorAll(".nav-btn");
const pageLinks = document.querySelectorAll(".page-link");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  navButtons.forEach((button) => {
    if (button.dataset.page === pageId) {
      button.classList.add("active");
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;
    showPage(pageId);
  });
});

pageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageId = link.dataset.page;
    showPage(pageId);
  });
});

// URL HASH NAVIGATION

window.addEventListener("load", () => {

  const hash = window.location.hash.replace("#", "");

  if (hash) {
    showPage(hash);
  }

});