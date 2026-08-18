// PAGE 1

function page1Tour() {
  driver.js.driver({
    steps: [
      {
        popover: {
          title: "Welcome to Sketch Engine",
          description: "This short tour will show you how to generate N-grams from your corpus."
        }
      },
      {
        element: Array.from(document.querySelectorAll('.featureName'))
          .find(el => el.textContent.trim() === 'N-grams'),
        popover: {
          title: "N-grams",
          description: "Click on N-grams to continue."
        }
      }
    ]
  }).drive();

  Array.from(document.querySelectorAll('.featureName'))
    .find(el => el.textContent.trim() === 'N-grams')
    ?.addEventListener('click', () => {
      localStorage.setItem('tourStep', 'page2');
    });
}

// PAGE 2

function page2Tour() {
  driver.js.driver({
    steps: [
      {
        popover: {
          title: "Ready to search",
          description: "Your N-gram settings are already configured."
        }
      },
      {
        element: "#btnGoAdv",
        popover: {
          title: "Run the search",
          description: "Click GO to generate the N-grams."
        }
      }
    ]
  }).drive();

  document.querySelector('#btnGoAdv')
    ?.addEventListener('click', () => {
      localStorage.setItem('tourStep', 'page3');
    });
}

// PAGE 3

function page3Tour() {
  driver.js.driver({
    steps: [
      {
        popover: {
          title: "Explore the results",
          description: "The list shows the most frequent 3- and 4-word phrases in the corpus."
        }
      },
      {
        element: ".menuIcon",
        popover: {
          title: "More information",
          description: "Click the three dots next to any phrase."
        }
      }
    ]
  }).drive();

  document.querySelector('.menuIcon')
    ?.addEventListener('click', () => {
      localStorage.setItem('tourStep', 'page3menu');
    });
}

// CONCORDANCE MENU

function concordanceTour() {
  driver.js.driver({
    steps: [
      {
        element: '[data-link="concordance"]',
        popover: {
          title: "Concordance",
          description: "Click Concordance to see how this phrase is used in context throughout the corpus."
        }
      }
    ]
  }).drive();

  document.querySelector('[data-link="concordance"]')
    ?.addEventListener('click', () => {
      localStorage.setItem('tourStep', 'page4');
    });
}

// PAGE 4

function page4Tour() {
  driver.js.driver({
    steps: [
      {
        element: ".td.center-align.middle._t.rtlNode",
        popover: {
          title: "View concordance",
          description: "Click on the phrase to see all occurrences in context."
        }
      }
    ]
  }).drive();

  document
    .querySelector('.td.center-align.middle._t.rtlNode')
    ?.addEventListener('click', () => {
      localStorage.removeItem('tourStep');
    });
}

// TOUR LAUNCHER

console.log("Tour script loaded");

const tourStep = localStorage.getItem('tourStep');

if (!tourStep) {
  page1Tour();
}

if (tourStep === 'page2') {
  page2Tour();
}

if (tourStep === 'page3') {
  page3Tour();
}

if (tourStep === 'page3menu') {
  concordanceTour();
}

if (tourStep === 'page4') {
  page4Tour();
}
