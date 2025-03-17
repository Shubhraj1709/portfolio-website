// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Form submission handling for contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let responseMessage = document.getElementById("responseMessage");

  // Simulate a backend response after 1 second
  setTimeout(() => {
      responseMessage.innerHTML = `<div class="alert alert-success">
          Thank you, <strong>${name}</strong>! Your message has been sent successfully. 😊
      </div>`;

      // Clear the form fields
      document.getElementById("contactForm").reset();
  }, 1000);
});
