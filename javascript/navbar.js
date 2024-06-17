$(document).ready(function() {
  $("body").on('click', '.top .hamburger .fa.fa-bars', function() {
    $("nav.menu").toggleClass("menu_show");
  });
});

$(document).ready(function() {
  function checkViewportSize() {
      if ($(window).width() <= 600) {
          $('.navbar-button').addClass('small');w
      } else {
          $('.navbar-button').removeClass('small');
      }
  }

  // Call the function when the document is ready
  checkViewportSize();

  // Also call the function whenever the window is resized
  $(window).resize(checkViewportSize);
});

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
  if(element.classList.contains('small')) {
    $("nav.menu").toggleClass("menu_show");
  } else
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

$(window).resize(checkViewportSize);