// for the animation in the page
const cards = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entres) => {
    entres.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
