// Toggle problem solutions
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const solution = btn.nextElementSibling;
      if (solution) {
        solution.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', !solution.classList.contains('hidden'));
      }
    });
  });

  // Contact form validation and submission handling
  const form = document.getElementById('contactForm');
  if (form) {
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name.length < 2) {
        formMessage.textContent = 'Please enter your name (at least 2 characters).';
        formMessage.style.color = 'red';
        form.name.focus();
        return;
      }

      if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        form.email.focus();
        return;
      }

      if (message.length < 10) {
        formMessage.textContent = 'Please enter a message (at least 10 characters).';
        formMessage.style.color = 'red';
        form.message.focus();
        return;
      }

      // Simulate form submission success
      formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
      formMessage.style.color = 'green';
      form.reset();
    });

    function validateEmail(email) {
      // Basic email regex validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  }
});
