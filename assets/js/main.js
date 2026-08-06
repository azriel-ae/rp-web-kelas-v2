document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  initNavbar();
  initWalikelas();
  initStudents();
  initGallery();
});
