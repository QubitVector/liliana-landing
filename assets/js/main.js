// Menú móvil
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

function setMobileOpen(isOpen){
  burger.setAttribute("aria-expanded", String(isOpen));
  mobileNav.style.display = isOpen ? "block" : "none";
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
}

if (burger && mobileNav){
  setMobileOpen(false);

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setMobileOpen(!isOpen);
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMobileOpen(false));
  });
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");

function openLightbox(src){
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  if (!lightbox || !lightboxImg) return;
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".js-lightbox").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-img");
    if (src) openLightbox(src);
  });
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
