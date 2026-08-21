console.log("VERSION TEST 123");
console.log("Tour script loaded");
console.log("Current URL:", window.location.href);
// =========================
// PAGE 1
// =========================

function page1Tour() {
  const textEl = [...document.querySelectorAll(".featureName")]
    .find(el => el.textContent.trim() === "N-grams");

  if (!textEl) return;

  // Get the whole clickable card
  const card = textEl.closest(".card");

  const tour = window.driver.js.driver({
    allowClose: false,
    showProgress: false,
    steps: [
      {
        element: card,
        popover: {
          title: "N-grams",
          description: "Click on N-grams to continue.",
          side: "right",
          align: "center"
        }
      }
    ]
  });

  tour.drive();

  // Continue when the user clicks the card
  card.addEventListener("click", () => {
    localStorage.setItem("tourStep", "page2");
    tour.destroy();
  }, { once: true });
}

// =========================
// PAGE 2
// =========================

function page2Tour() {
  const tour = window.driver.js.driver({
    steps: [
      {
        element: '#btnGoAdv',
        popover: {
          title: 'Run the search',
          description: 'Click GO to generate the N-grams.'
        }
      }
    ]
  });

  tour.drive();
}

// =========================
// START TOUR
// =========================

function startTour() {
  const tourStep = localStorage.getItem('tourStep');

  console.log('Current step:', tourStep);

  if (tourStep === 'page2') {
    page2Tour();
  } else {
    page1Tour();
  }
}

// =========================
// LOAD DRIVER CSS
// =========================

const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'https://cdn.jsdelivr.net/npm/driver.js/dist/driver.css';
document.head.appendChild(css);

// =========================
// LOAD DRIVER JS
// =========================

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/driver.js/dist/driver.js.iife.js';

script.onload = () => {
  startTour();
};

document.head.appendChild(script);
