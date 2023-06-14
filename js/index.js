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
