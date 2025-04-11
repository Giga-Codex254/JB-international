// Parallax effect
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax");
  parallaxElements.forEach(el => {
    let offset = window.scrollY * 0.3;
    el.style.backgroundPositionY = `${offset}px`;
  });
});
