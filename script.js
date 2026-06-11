function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox").style.alignItems = "center";
  document.getElementById("lightbox").style.justifyContent = "center";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-caption").innerText = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Close lightbox when clicking outside the image
document.addEventListener("click", function(e) {
  const lightbox = document.getElementById("lightbox");
  if (e.target === lightbox) {
    closeLightbox();
  }
});