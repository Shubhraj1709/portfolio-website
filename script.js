// Initialize EmailJS (Move outside form submission event)
emailjs.init("TX8S6YJD_-R4hzOzq");


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
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let responseMessage = document.getElementById("responseMessage");

  // Basic form validation
  if (!name || !email || !message) {
    responseMessage.innerHTML = `<div class="alert alert-warning">
      Please fill in all fields before submitting. ⚠️
    </div>`;
    return;
  }

  // Prepare email parameters
  let templateParams = {
    name: name,   // Matches {{name}} in EmailJS
    email: email, // Matches {{email}} in EmailJS
    message: message
  };
  
  // Send email using EmailJS
  emailjs.send("service_16fjdw9", "template_fp076k8", templateParams, "TX8S6YJD_-R4hzOzq")
    .then(function(response) {
      console.log("SUCCESS!", response);
      responseMessage.innerHTML = `<div class="alert alert-success">
        Thank you, <strong>${name}</strong>! Your message has been sent successfully. 😊
      </div>`;
      document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
      console.error("FAILED...", error);
      responseMessage.innerHTML = `<div class="alert alert-danger">
        Oops! Something went wrong. Please try again later. 😞
      </div>`;
    });
});
