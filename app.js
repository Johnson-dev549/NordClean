
"use strict";

// Select the form and status element.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// Get all form fields.
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const service = document.querySelector("#service");
const message = document.querySelector("#message");

// Display a validation error next to one field.
function showError(field, errorId, errorMessage) {
  const errorElement = document.querySelector(errorId);

  errorElement.textContent = errorMessage;
  field.classList.add("invalid");
  field.setAttribute("aria-invalid", "true");
}

// Remove an existing error from one field.
function clearError(field, errorId) {
  const errorElement = document.querySelector(errorId);

  errorElement.textContent = "";
  field.classList.remove("invalid");
  field.removeAttribute("aria-invalid");
}

// Validate the form when submitted.
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages.
  clearError(fullName, "#name-error");
  clearError(email, "#email-error");
  clearError(service, "#service-error");
  clearError(message, "#message-error");

  formStatus.textContent = "";
  formStatus.className = "form-status";

  let isValid = true;
  let firstInvalidField = null;

  // Name validation
  if (fullName.value.trim().length < 3) {
  showError(
    fullName,
    "#name-error",
    "Full name must contain at least 3 characters."
  );

  isValid = false;
  firstInvalidField ??= fullName;
}


  // Email validation
  if (!email.validity.valid || email.value.trim() === "") {
    showError(email, "#email-error", "Please enter a valid email address.");
    isValid = false;
    firstInvalidField ??= email;
  }

  // Service selection
  if (service.value === "") {
    showError(service, "#service-error", "Please select a cleaning service.");
    isValid = false;
    firstInvalidField ??= service;
  }

  // Message validation

if (message.value.trim().length < 20) {
  showError(
    message,
    "#message-error",
    "Message must contain at least 20 characters."
  );

  isValid = false;
  firstInvalidField ??= message;
}


  if (!isValid) {
    formStatus.textContent = "Please correct the highlighted fields.";
    formStatus.classList.add("error");

    firstInvalidField.focus();
    return;
  }

  // Frontend demonstration only.
  const selectedService =
  service.options[service.selectedIndex].text;

formStatus.textContent =
  `Form validated successfully for ${selectedService}! ` +
  "This is a demo; no message was sent.";


  formStatus.classList.add("success");
});


function clearFormStatus() {
  formStatus.textContent = "";
  formStatus.className = "form-status";
}

// Clear only the name error when the name changes.
fullName.addEventListener("input", function () {
  clearError(fullName, "#name-error");
  clearFormStatus();
});

// Clear only the email error when the email changes.
email.addEventListener("input", function () {
  clearError(email, "#email-error");
  clearFormStatus();
});

// Clear only the service error when selection changes.
service.addEventListener("change", function () {
  clearError(service, "#service-error");
  clearFormStatus();
});

// Clear only the message error when message changes.
message.addEventListener("input", function () {
  clearError(message, "#message-error");
  clearFormStatus();
});


// =====================================
// LESSON 7 - ACTIVE NAVIGATION
// =====================================

const navLinks = document.querySelectorAll(
  '.main-nav a[href^="#"]'
);

const pageSections = document.querySelectorAll(
  "main section[id]"
);

// Update the highlighted navigation link.
function setActiveNavigation(sectionId) {
  navLinks.forEach(function (link) {
    const isActive =
      link.getAttribute("href") === "#" + sectionId;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// Determine the section that is currently active.
function updateActiveNavigation() {
  const scrollPosition = window.scrollY + 160;
  let currentSection = "home";

  pageSections.forEach(function (section) {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section.id;
    }
  });


const reachedBottom =
  window.scrollY + window.innerHeight >=
  document.documentElement.scrollHeight - 2;

if (reachedBottom) {
  currentSection = "contact";
}


  setActiveNavigation(currentSection);
}

// Update navigation when scrolling.
window.addEventListener(
  "scroll",
  updateActiveNavigation,
  { passive: true }
);

// Set the initial active navigation link.
updateActiveNavigation();



// =====================================
// LESSON 7 - BACK TO TOP
// =====================================

const backToTopButton =
  document.querySelector("#back-to-top");

function updateBackToTop() {
  const isVisible = window.scrollY > 500;

  backToTopButton.classList.toggle(
    "visible",
    isVisible
  );

  // Hidden buttons should not receive keyboard focus.
  backToTopButton.tabIndex = isVisible ? 0 : -1;

  backToTopButton.setAttribute(
    "aria-hidden",
    String(!isVisible)
  );
}

window.addEventListener(
  "scroll",
  updateBackToTop,
  { passive: true }
);

backToTopButton.addEventListener("click", function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "instant" : "smooth"
  });
});

// Initialize the button's visibility.
updateBackToTop();




 // =====================================
 // LESSON 7 - SERVICE PRESELECTION
 // =====================================

const serviceSelectionInfo = document.querySelector(
  "#selected-service-info"
);

const serviceCards = document.querySelectorAll(
  ".service-card"
);

serviceCards.forEach(function (card) {
  const serviceLink = card.querySelector(".service-link");

  serviceLink.addEventListener("click", function () {
    const selectedValue = card.dataset.service;

    // Select the requested cleaning service.
    service.value = selectedValue;

    // Clear the previous service validation error.
    service.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    // Show the visible service name.
    const selectedLabel =
      service.options[service.selectedIndex].text;

    serviceSelectionInfo.textContent =
      `Selected service: ${selectedLabel}`;

    // Move keyboard focus without changing scroll position.
    service.focus({ preventScroll: true });
  });
});

// Keep the message correct if the user changes the dropdown.
service.addEventListener("change", function () {
  if (service.value === "") {
    serviceSelectionInfo.textContent = "";
    return;
  }

  const selectedLabel =
    service.options[service.selectedIndex].text;

  serviceSelectionInfo.textContent =
    `Selected service: ${selectedLabel}`;
});




// =====================================
// LESSON 8 - MOBILE NAVIGATION
// =====================================

const menuToggle = document.querySelector("#menu-toggle");

const mobileNavigation = document.querySelector(
  "#primary-navigation"
);

const brandLink = document.querySelector(".brand");

const firstNavigationLink =
  mobileNavigation.querySelector("a");

// Open or close the mobile menu.
function setMobileMenuOpen(isOpen, restoreFocus = false) {
  mobileNavigation.classList.toggle("is-open", isOpen);

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  if (isOpen) {
    firstNavigationLink.focus();
  } else if (restoreFocus) {
    menuToggle.focus();
  }
}

// Toggle the menu.
menuToggle.addEventListener("click", function () {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  setMobileMenuOpen(!isOpen, isOpen);
});

// Close after selecting a navigation link.
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    setMobileMenuOpen(false);

    // Move focus to the destination section.
    const section = document.querySelector(
      link.getAttribute("href")
    );

    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }
  });
});

// Close when Escape is pressed.
document.addEventListener("keydown", function (event) {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && isOpen) {
    setMobileMenuOpen(false, true);
  }
});

// Close when clicking outside the button and navigation.
document.addEventListener("click", function (event) {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  const clickedMenu =
    mobileNavigation.contains(event.target);

  const clickedButton =
    menuToggle.contains(event.target);

  if (isOpen && !clickedMenu && !clickedButton) {
    setMobileMenuOpen(false);
  }
});

// Handle changes between desktop and mobile layouts.
function handleNavigationResize() {
  const isMobile = window.innerWidth <= 900;
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (!isMobile) {
    if (isOpen) {
      setMobileMenuOpen(false);
    }

    // The hamburger button becomes hidden on desktop.
    if (document.activeElement === menuToggle) {
      brandLink.focus({ preventScroll: true });
    }

    return;
  }

  // On mobile, the collapsed menu must not retain focus.
  if (
    !isOpen &&
    mobileNavigation.contains(document.activeElement)
  ) {
    brandLink.focus({ preventScroll: true });
  }
}

window.addEventListener("resize", handleNavigationResize);

// Initialize.
setMobileMenuOpen(false);
handleNavigationResize();
