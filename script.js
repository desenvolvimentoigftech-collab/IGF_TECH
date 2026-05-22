const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const catalogModal = document.querySelector("[data-catalog-modal]");
const catalogOpen = document.querySelector("[data-catalog-open]");
const catalogCloseButtons = document.querySelectorAll("[data-catalog-close]");
const catalogImage = document.querySelector("[data-catalog-image]");
const catalogTitle = document.querySelector("[data-catalog-caption-title]");
const catalogText = document.querySelector("[data-catalog-caption-text]");
const catalogCount = document.querySelector("[data-catalog-count]");
const catalogDots = document.querySelector("[data-catalog-dots]");
const catalogPrev = document.querySelector("[data-catalog-prev]");
const catalogNext = document.querySelector("[data-catalog-next]");

const catalogSlides = [
  {
    src: "assets/catalogo/catalogo-01.png?v=5",
    alt: "Catálogo IGF Tech 01",
    title: "Catálogo IGF Tech 01",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-02.png?v=5",
    alt: "Catálogo IGF Tech 02",
    title: "Catálogo IGF Tech 02",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-03.png?v=5",
    alt: "Catálogo IGF Tech 03",
    title: "Catálogo IGF Tech 03",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-04.png?v=5",
    alt: "Catálogo IGF Tech 04",
    title: "Catálogo IGF Tech 04",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-05.png?v=5",
    alt: "Catálogo IGF Tech 05",
    title: "Catálogo IGF Tech 05",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-06.png?v=5",
    alt: "Catálogo IGF Tech 06",
    title: "Catálogo IGF Tech 06",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-07.png?v=5",
    alt: "Catálogo IGF Tech 07",
    title: "Catálogo IGF Tech 07",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-08.png?v=5",
    alt: "Catálogo IGF Tech 08",
    title: "Catálogo IGF Tech 08",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-09.png?v=5",
    alt: "Catálogo IGF Tech 09",
    title: "Catálogo IGF Tech 09",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  },
  {
    src: "assets/catalogo/catalogo-10.png?v=5",
    alt: "Catálogo IGF Tech 10",
    title: "Catálogo IGF Tech 10",
    text: "Solução industrial IGF Tech para segurança, automação e inteligência operacional."
  }
];

let catalogIndex = 0;

if (window.lucide) {
  window.lucide.createIcons();
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;

  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
});

const renderCatalog = () => {
  const slide = catalogSlides[catalogIndex];
  if (!slide || !catalogImage || !catalogTitle || !catalogText || !catalogCount) return;

  catalogImage.src = slide.src;
  catalogImage.alt = slide.alt;
  catalogTitle.textContent = slide.title;
  catalogText.textContent = slide.text;
  catalogCount.textContent = `${catalogIndex + 1} / ${catalogSlides.length}`;

  catalogDots?.querySelectorAll(".catalog-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === catalogIndex);
    dot.setAttribute("aria-current", index === catalogIndex ? "true" : "false");
  });
};

const setCatalogIndex = (index) => {
  catalogIndex = (index + catalogSlides.length) % catalogSlides.length;
  renderCatalog();
};

catalogSlides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "catalog-dot";
  dot.setAttribute("aria-label", `Ver imagem ${index + 1}: ${slide.title}`);
  dot.addEventListener("click", () => setCatalogIndex(index));
  catalogDots?.appendChild(dot);
});

renderCatalog();

const openCatalog = () => {
  catalogModal?.classList.add("is-open");
  catalogModal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("catalog-open");
  catalogModal?.querySelector(".catalog-dialog")?.focus();
};

const closeCatalog = () => {
  catalogModal?.classList.remove("is-open");
  catalogModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("catalog-open");
  catalogOpen?.focus();
};

catalogOpen?.addEventListener("click", openCatalog);
catalogCloseButtons.forEach((button) => button.addEventListener("click", closeCatalog));
catalogPrev?.addEventListener("click", () => setCatalogIndex(catalogIndex - 1));
catalogNext?.addEventListener("click", () => setCatalogIndex(catalogIndex + 1));

document.addEventListener("keydown", (event) => {
  if (!catalogModal?.classList.contains("is-open")) return;

  if (event.key === "Escape") closeCatalog();
  if (event.key === "ArrowLeft") setCatalogIndex(catalogIndex - 1);
  if (event.key === "ArrowRight") setCatalogIndex(catalogIndex + 1);
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
