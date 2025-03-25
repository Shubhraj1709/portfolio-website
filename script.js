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

  // Initialize EmailJS
  emailjs.init("TX8S6YJD_-R4hzOzq"); // Replace with your EmailJS user ID

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let responseMessage = document.getElementById("responseMessage");

  // Prepare email parameters
  let templateParams = {
      from_name: name,
      from_email: email,
      message: message
  };

  // Send email using EmailJS
  emailjs.send("service_573vgww", "template_fp076k8", templateParams)
      .then(function(response) {
          responseMessage.innerHTML = `<div class="alert alert-success">
              Thank you, <strong>${name}</strong>! Your message has been sent successfully. 😊
          </div>`;

          // Clear form fields
          document.getElementById("contactForm").reset();
      }, function(error) {
          responseMessage.innerHTML = `<div class="alert alert-danger">
              Oops! Something went wrong. Please try again later. 😞
          </div>`;
      });
});
