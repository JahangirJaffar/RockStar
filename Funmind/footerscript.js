// Add this to your existing script.js file or create a new file for footer scripts

document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTop");

  // Smooth scrolling to top when arrow icon is clicked
  scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});