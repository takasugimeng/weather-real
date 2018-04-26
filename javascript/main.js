// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')

togglePopup(".toggle-popup", "#popup", "flex");

function togglePopup(buttonSelector, popupSelector, className) {
  // Find all of the elements
  const elements = document.querySelectorAll(buttonSelector);
  const popup = document.querySelector(popupSelector);

  // Attach an event listener to each element
  elements.forEach(function(el) {
    el.addEventListener("click", function() {
      popup.classList.toggle(className);
    });
  });

  console.log(popup);
}
