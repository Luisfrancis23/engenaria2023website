/* ============================================================
   ENGENHARIA 2023 — Galeria: filters + masonry + lightbox
   ============================================================ */

(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  let galFilter = "Hotu";
  let galItems = [];

  function imgURL(img, w) {
    w = w || 800;
    if (img && img.u) {
      return "https://images.unsplash.com/" + img.u + "?auto=format&fit=crop&w=" + w + "&q=80";
    }
    return "https://picsum.photos/seed/" + (img && img.seed ? img.seed : "eng2023") + "/" + w + "/620";
  }

  function attachFallback(imgEl, seed, w) {
    imgEl.onerror = function () {
      imgEl.onerror = null;
      imgEl.src = "https://picsum.photos/seed/" + (seed || "eng2023") + "/" + (w || 800) + "/620";
    };
  }

  function korKategoria(kat) {
    return (typeof KOR !== "undefined" && KOR[kat]) || "#1e6091";
  }

  function categories() {
    const cats = ["Hotu"];
    GALERIA.forEach(function (g) {
      if (cats.indexOf(g.kategoria) === -1) cats.push(g.kategoria);
    });
    return cats;
  }

  function renderFilters() {
    const bar = $("#galFilters");
    if (!bar) return;
    bar.innerHTML = categories().map(function (c) {
      return '<button class="filter-btn' + (c === "Hotu" ? " active" : "") + '" data-filter="' + c + '">' + c + "</button>";
    }).join("");
    $$(".filter-btn", bar).forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$(".filter-btn", bar).forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        galFilter = btn.dataset.filter;
        renderGallery(true);
      });
    });
  }

  function renderGallery(animate) {
    const grid = $("#galGrid");
    if (!grid) return;
    galItems = galFilter === "Hotu"
      ? GALERIA
      : GALERIA.filter(function (g) { return g.kategoria === galFilter; });

    grid.innerHTML = galItems.map(function (g, i) {
      const kor = korKategoria(g.kategoria);
      return (
        '<figure class="g-item" data-index="' + i + '" style="margin-bottom:20px;">' +
        '<img src="' + imgURL(g.img, 800) + '" alt="' + g.titulu + '" loading="lazy">' +
        '<div class="g-overlay"></div>' +
        '<span class="g-zoom"><i class="fa-solid fa-plus"></i></span>' +
        '<figcaption class="g-caption">' +
        '<div class="t">' + g.titulu + "</div>" +
        '<span class="c">' + g.kategoria + "</span>" +
        "</figcaption></figure>"
      );
    }).join("");

    const figs = $$(".g-item", grid);
    figs.forEach(function (fig, i) {
      const img = $("img", fig);
      if (img) attachFallback(img, galItems[i].img.seed, 800);
      fig.addEventListener("click", function () {
        if (typeof window.engLightbox === "function") {
          window.engLightbox(galItems, i);
        }
      });
      if (animate) {
        fig.style.opacity = "0";
        fig.style.transform = "translateY(20px)";
        setTimeout(function () {
          fig.style.transition = "opacity .5s ease, transform .5s ease";
          fig.style.opacity = "1";
          fig.style.transform = "none";
        }, 40 + i * 45);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof GALERIA === "undefined") return;
    renderFilters();
    renderGallery(false);
  });
})();
