window.onload = function () {
  const navbar = document.getElementById("nav-container-id");
  const allNavbarLinks = document.querySelectorAll(".nav-link");
  window.onscroll = () => {
    if (window.scrollY > 100) {
      allNavbarLinks.forEach((link) => {
        link.classList.add("nav-link-scroll");
      });
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
      allNavbarLinks.forEach((link) => {
        link.classList.remove("nav-link-scroll");
      });
    }
  };
};

const openSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("sidebar-show");
};
const closeSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("sidebar-show");
};
setTimeout(() => {
  const introDiv = document.getElementById("intro");
  introDiv.style.display = "none";
}, 5500);
