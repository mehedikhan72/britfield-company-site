const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a") && nav.classList.contains("open")) toggle.click();
  });
}
