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
   MENU BUTTON
========================= */

const menuButton =
  document.querySelector(".menu-button");

const mobileMenu =
  document.querySelector(".mobile-menu");

const mobileLinks =
  document.querySelectorAll(
    ".mobile-menu a"
  );


menuButton.addEventListener(
  "click",
  () => {

    const isOpen =
      mobileMenu.classList.contains(
        "active"
      );

    mobileMenu.classList.toggle(
      "active"
    );

    menuButton.setAttribute(
      "aria-expanded",
      !isOpen
    );

  }
);


/* =========================
   CLOSE MOBILE MENU
========================= */

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove(
        "active"
      );

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }
  );

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