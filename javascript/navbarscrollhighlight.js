// Get all navbar buttons and sections
const navbarButtons = document.querySelectorAll('.navbar-button');
const sections = document.querySelectorAll('section');

// Function to remove 'highlight' class from all buttons
function removeActive() {
  navbarButtons.forEach(button => {
    button.classList.remove('active');
  });
}

function addActive(element) {
  removeActive()
  element.classList.add('active');
}

// Function to add 'highlight' class to the active button based on scroll position
function highlightActiveButton() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  removeActive();
  navbarButtons[index].classList.add('active');
}

// Event listener for scroll event
window.addEventListener("scroll", highlightActiveButton);

