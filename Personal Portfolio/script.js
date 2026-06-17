/* =========================
   TYPING ANIMATION
========================= */

const roles = [
  "Full Stack Developer",
  "Open Source Contributor",
  "AI & ML Enthusiast",
  "Hackathon Participant",
  "ShadowFox Intern",
  "Future Software Engineer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }
  } else {

    typingElement.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      roleIndex++;

      if (roleIndex === roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.15,
  }
);

document
  .querySelectorAll(
    ".glass-card, .section-title"
  )
  .forEach((element) => {

    element.classList.add("fade-up");

    observer.observe(element);

  });

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

/* =========================
   SMOOTH BUTTON EFFECT
========================= */

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.transform =
        "translateY(-5px) scale(1.03)";
    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translateY(0) scale(1)";
    }
  );

});

/* =========================
   ACHIEVEMENT COUNTER
========================= */

const counters =
  document.querySelectorAll(
    ".achievement-grid h3"
  );

const speed = 100;

function startCounters() {

  counters.forEach((counter) => {

    const targetText =
      counter.innerText;

    const target =
      parseInt(targetText);

    if (isNaN(target)) return;

    let count = 0;

    const increment =
      Math.ceil(target / speed);

    const updateCount = () => {

      if (count < target) {

        count += increment;

        counter.innerText =
          count;

        requestAnimationFrame(
          updateCount
        );

      } else {

        counter.innerText =
          targetText;
      }
    };

    updateCount();

  });

}

const achievementSection =
  document.querySelector(
    "#achievements"
  );

const achievementObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          startCounters();

          achievementObserver.unobserve(
            entry.target
          );
        }

      });

    },
    {
      threshold: 0.5,
    }
  );

if (achievementSection) {
  achievementObserver.observe(
    achievementSection
  );
}

/* =========================
   CONSOLE SIGNATURE
========================= */

console.log(
  "%cDesigned & Developed by Muskan Kumari 🚀",
  "color:#4f46e5;font-size:16px;font-weight:bold;"
);