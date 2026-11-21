// 1. Project category filtering (Assignment 2)
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow = selectedCategory === "all" || cardCategory === selectedCategory;
      card.style.display = shouldShow ? "block" : "none";
    });
  });
});

// 2. Contact form validation (Assignment 2)
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      formFeedback.textContent = "Please enter your name.";
      formFeedback.style.color = "#dc2626";
      return;
    }

    if (!emailPattern.test(email)) {
      formFeedback.textContent = "Please enter a valid email address.";
      formFeedback.style.color = "#dc2626";
      return;
    }

    if (message.length < 10) {
      formFeedback.textContent = "Please enter a message of at least 10 characters.";
      formFeedback.style.color = "#dc2626";
      return;
    }

    formFeedback.textContent = `Thanks, ${name}! Your message has been validated and is ready.`;
    formFeedback.style.color = "#16a34a";
    contactForm.reset();
  });
}

// 3. Fetch API helper with error handling (Assignment 3)
async function loadPublicApiDemo(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API fetch failed:", error);
    return null;
  }
}