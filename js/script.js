/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(
          "is-visible"
        );

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12,

      rootMargin:
        "0px 0px -50px 0px"
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   MOBILE MENU
========================= */

const menuButton =
  document.querySelector(".menu-button");

const mobileMenu =
  document.querySelector(".mobile-menu");

const mobileMenuClose =
  document.querySelector(".mobile-menu-close");

const mobileLinks =
  document.querySelectorAll(
    ".mobile-menu a"
  );


/* =========================
   OPEN MENU
========================= */

menuButton.addEventListener("click", () => {

  mobileMenu.classList.add("active");

});


/* =========================
   CLOSE MENU
========================= */

mobileMenuClose.addEventListener("click", () => {

  mobileMenu.classList.remove("active");

});


/* =========================
   CLOSE MENU WHEN LINK CLICKED
========================= */

mobileLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

  });

});


/* =========================
   STAGGER ANIMATION
========================= */

const menuItems =
  document.querySelectorAll(
    ".menu-item"
  );

menuItems.forEach(
  (item, index) => {

    item.style.transitionDelay =
      `${index * 0.08}s`;

  }
);


const instagramItems =
  document.querySelectorAll(
    ".instagram-item"
  );

instagramItems.forEach(
  (item, index) => {

    item.style.transitionDelay =
      `${index * 0.08}s`;

  }
);


const categoryItems =
  document.querySelectorAll(
    ".category-card"
  );

categoryItems.forEach(
  (item, index) => {

    item.style.transitionDelay =
      `${index * 0.12}s`;

  }
);