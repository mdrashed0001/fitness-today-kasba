function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-caption").innerText = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close lightbox when clicking outside the image
document.addEventListener("click", function(e) {
  const lightbox = document.getElementById("lightbox");
  if (e.target === lightbox) {
    closeLightbox();
  }
});