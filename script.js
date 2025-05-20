// Smooth scroll to 'About Me' section when the arrow is clicked
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});

// Optional: Log social link clicks
document.querySelectorAll('.socials a').forEach(link => {
  link.addEventListener('click', function () {
    console.log(`Navigating to ${this.href}`);
  });
});
