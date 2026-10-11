/* ============================================================
   ENGENHARIA 2023 — JavaScript Principal
   Komponente reutilizável: navbar, reveal, counters,
   cards, modal, lightbox, toast, filters
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  function imgURL(img, w) {
    w = w || 900;
    if (img && img.u) {
      return "https://images.unsplash.com/" + img.u + "?auto=format&fit=crop&w=" + w + "&q=80";
    }
    return "https://picsum.photos/seed/" + (img && img.seed ? img.seed : "eng2023") + "/" + w + "/600";
  }

  /* Fallback robusto: se a imagem Unsplash falhar, usa picsum */
  function attachFallback(imgEl, seed, w) {
    imgEl.onerror = function () {
      imgEl.onerror = null;
      imgEl.src = "https://picsum.photos/seed/" + (seed || "eng2023") + "/" + (w || 900) + "/600";
    };
  }

  function korKategoria(kat) {
    return (typeof KOR !== "undefined" && KOR[kat]) || "#1e6091";
  }

  /* ---------- Preloader ---------- */
  function initPreloader() {
    const pre = $("#preloader");
    if (!pre) return;
    function hide() { pre.classList.add("done"); }
    window.addEventListener("load", function () { setTimeout(hide, 350); });
    setTimeout(hide, 3500); /* segurança */
  }

  /* ---------- Scroll: progress, navbar, back-to-top ---------- */
  function initScroll() {
    const navbar = $(".navbar-eng");
    const progress = $("#scrollProgress");
    const backTop = $("#backTop");
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (navbar) navbar.classList.toggle("scrolled", y > 40);
      if (backTop) backTop.classList.toggle("show", y > 600);
      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (backTop) {
      backTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------- Mobile menu: fecha ao clicar ---------- */
  function initMobileMenu() {
    const links = $$(".navbar-eng .nav-link");
    const toggler = $(".navbar-eng .navbar-toggler");
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth < 992 && toggler) {
          const collapse = $("#navbarEng");
          if (collapse && collapse.classList.contains("show")) {
            if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
              bootstrap.Collapse.getInstance(collapse)?.hide();
            } else {
              collapse.classList.remove("show");
            }
          }
        }
      });
    });
  }

  /* ---------- Scrollspy ---------- */
  function initScrollspy() {
    const sections = $$("main section[id], body section[id]");
    const links = $$('.navbar-eng .nav-link[href^="#"]');
    if (!sections.length || !links.length) return;
    const map = {};
    links.forEach(function (l) {
      const id = l.getAttribute("href").slice(1);
      if (id) map[id] = l;
    });
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          const link = map[e.target.id];
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { if (map[s.id]) observer.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Counters ---------- */
  function initCounters() {
    const nums = $$(".stats-num[data-count]");
    if (!nums.length) return;
    function animate(el) {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const dur = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.innerHTML = Math.round(target * eased) + '<i>' + suffix + "</i>";
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Toast ---------- */
  function toast(titulu, mensajen, ikon) {
    const wrap = $("#toastWrap");
    if (!wrap) return;
    const t = document.createElement("div");
    t.className = "toast-eng";
    t.innerHTML =
      '<div class="ic"><i class="fa-solid ' + (ikon || "fa-circle-check") + '"></i></div>' +
      '<div><div class="tt">' + titulu + '</div><div class="tm">' + mensajen + "</div></div>";
    wrap.appendChild(t);
    setTimeout(function () {
      t.classList.add("out");
      setTimeout(function () { t.remove(); }, 420);
    }, 4200);
  }
  window.engToast = toast;

  /* ---------- Detail Modal ---------- */
  let modalEl = null;
  function openDetail(opts) {
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.className = "detail-modal";
      modalEl.setAttribute("role", "dialog");
      modalEl.setAttribute("aria-modal", "true");
      document.body.appendChild(modalEl);
      modalEl.addEventListener("click", function (e) {
        if (e.target === modalEl) closeDetail();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeDetail();
      });
    }
    const badge = opts.badge
      ? '<span class="d-badge" style="background:' + (opts.badgeKor || "#1e6091") + '">' + opts.badge + "</span>"
      : "";
    const media = opts.img
      ? '<div class="detail-media"><img src="' + imgURL(opts.img, 1200) + '" alt="' + (opts.titulu || "") + '">' +
        '<button class="detail-close" aria-label="Serbi"><i class="fa-solid fa-xmark"></i></button></div>'
      : '<button class="detail-close" aria-label="Serbi" style="position:fixed;top:14px;right:14px;background:rgba(8,28,54,.7)"><i class="fa-solid fa-xmark"></i></button>';
    const meta = opts.meta
      ? '<div class="detail-meta">' + opts.meta.map(function (m) {
          return '<span><i class="fa-solid ' + m[0] + '"></i>' + m[1] + "</span>";
        }).join("") + "</div>"
      : "";
    const list = opts.list
      ? '<ul class="detail-list">' + opts.list.map(function (li) {
          return "<li><i class=\"fa-solid fa-check-circle\"></i><span>" + li + "</span></li>";
        }).join("") + "</ul>"
      : "";
    const tags = opts.tags
      ? '<div class="detail-tags">' + opts.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>"
      : "";
    modalEl.innerHTML =
      '<div class="detail-card">' + media +
      '<div class="detail-body">' + badge +
      "<h3>" + (opts.titulu || "") + "</h3>" + meta +
      (opts.texto || "") + list + tags +
      "</div></div>";
    const imgInModal = modalEl.querySelector(".detail-media img");
    if (imgInModal) attachFallback(imgInModal, opts.img.seed, 1200);
    const closeBtn = modalEl.querySelector(".detail-close");
    if (closeBtn) closeBtn.addEventListener("click", closeDetail);
    modalEl.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDetail() {
    if (modalEl) {
      modalEl.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
  window.engOpenDetail = openDetail;
  window.engCloseDetail = closeDetail;

  /* ---------- Lightbox ---------- */
  let lbItems = [], lbIndex = 0;
  function openLightbox(items, index) {
    lbItems = items; lbIndex = index;
    let lb = $("#lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "lightbox";
      lb.className = "lightbox";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.innerHTML =
        '<div class="lb-count"></div>' +
        '<button class="lb-close" aria-label="Serbi"><i class="fa-solid fa-xmark"></i></button>' +
        '<button class="lb-btn lb-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>' +
        '<div class="lb-img-wrap"><img src="" alt="">' +
        '<div class="lb-caption"><div class="c"></div><div class="t"></div></div></div>' +
        '<button class="lb-btn lb-next" aria-label="Próximo"><i class="fa-solid fa-chevron-right"></i></button>';
      document.body.appendChild(lb);
      $(".lb-close", lb).addEventListener("click", closeLightbox);
      $(".lb-prev", lb).addEventListener("click", function () { navLightbox(-1); });
      $(".lb-next", lb).addEventListener("click", function () { navLightbox(1); });
      lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navLightbox(-1);
        if (e.key === "ArrowRight") navLightbox(1);
      });
    }
    renderLightbox();
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox() {
    const lb = $("#lightbox");
    const item = lbItems[lbIndex];
    const img = $(".lb-img-wrap img", lb);
    img.src = imgURL(item.img, 1400);
    img.alt = item.titulu || "";
    attachFallback(img, item.img.seed, 1400);
    $(".lb-caption .t", lb).textContent = item.titulu || "";
    $(".lb-caption .c", lb).textContent = item.kategoria || "";
    $(".lb-count", lb).textContent = (lbIndex + 1) + " / " + lbItems.length;
  }
  function navLightbox(dir) {
    lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
    renderLightbox();
  }
  function closeLightbox() {
    const lb = $("#lightbox");
    if (lb) {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
  window.engLightbox = openLightbox;

  /* ---------- Render: Área Engenharia ---------- */
  function renderAreas() {
    const grid = $("#areaGrid");
    if (!grid || typeof AREAS === "undefined") return;
    grid.innerHTML = AREAS.map(function (a, i) {
      return (
        '<article class="area-card reveal" style="transition-delay:' + (i * 90) + 'ms">' +
        '<div class="area-ic" style="background:linear-gradient(135deg,' + a.kor + ',' + a.kor + 'dd)"><i class="' + a.icon + '"></i></div>' +
        "<h3>" + a.titulu + "</h3>" +
        "<p>" + a.deskrisaun + "</p>" +
        '<a href="javascript:void(0)" class="area-link" data-area="' + a.id + '">Haree Tan <i class="fa-solid fa-arrow-right"></i></a>' +
        "</article>"
      );
    }).join("");
    $$(".area-link", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const a = AREAS.find(function (x) { return x.id === btn.dataset.area; });
        if (!a) return;
        openDetail({
          titulu: a.titulu,
          badge: "Área Engenharia",
          badgeKor: a.kor,
          img: null,
          texto: "<p>" + a.detalhe + "</p>",
          list: a.pontus
        });
      });
    });
  }

  /* ---------- Render: Atividade Sira ---------- */
  let actFilter = "Hotu";
  function renderActivities() {
    const grid = $("#actGrid");
    if (!grid || typeof ATIVIDADES === "undefined") return;
    const list = actFilter === "Hotu" ? ATIVIDADES : ATIVIDADES.filter(function (a) {
      if (actFilter === "Komunidade") return a.kategoria === "Komunidade";
      return a.kategoria === actFilter;
    });
    grid.innerHTML = list.map(function (a, i) {
      const kor = korKategoria(a.kategoria);
      return (
        '<article class="act-card reveal" style="transition-delay:' + (i * 70) + 'ms">' +
        '<div class="act-media"><img src="' + imgURL(a.img, 800) + '" alt="' + a.titulu + '" loading="lazy">' +
        '<span class="act-badge" style="background:' + kor + '">' + a.kategoria + "</span></div>" +
        '<div class="act-meta">' +
        "<span><i class=\"fa-regular fa-calendar\"></i>" + a.data + "</span>" +
        "<span><i class=\"fa-solid fa-location-dot\"></i>" + a.fatin + "</span>" +
        "</div>" +
        '<div class="act-body"><h3>' + a.titulu + "</h3><p>" + a.deskrisaun + "</p>" +
        '<a href="javascript:void(0)" class="act-btn" data-act="' + a.id + '">Haree Detallu <i class="fa-solid fa-arrow-right"></i></a>' +
        "</div></article>"
      );
    }).join("");
    $$(".act-media img", grid).forEach(function (img, i) {
      attachFallback(img, list[i].img.seed, 800);
    });
    $$(".act-btn", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const a = ATIVIDADES.find(function (x) { return x.id === parseInt(btn.dataset.act, 10); });
        if (!a) return;
        openDetail({
          titulu: a.titulu,
          badge: a.kategoria,
          badgeKor: korKategoria(a.kategoria),
          img: a.img,
          meta: [
            ["fa-regular fa-calendar", a.data],
            ["fa-solid fa-location-dot", a.fatin]
          ],
          texto: "<p>" + a.detalhe + "</p>"
        });
      });
    });
    // re-observe reveal
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    $$(".reveal", grid).forEach(function (el) { io.observe(el); });
  }

  function initActivityFilters() {
    const bar = $("#actFilters");
    if (!bar) return;
    const cats = ["Hotu", "Semináriu", "Workshop", "Formasaun", "Kompetisaun", "Komunidade"];
    bar.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn' + (c === "Hotu" ? " active" : "") + '" data-filter="' + c + '">' + c + "</button>";
    }).join("");
    $$(".filter-btn", bar).forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$(".filter-btn", bar).forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        actFilter = btn.dataset.filter;
        renderActivities();
      });
    });
  }

  /* ---------- Render: Projetu Sira ---------- */
  function renderProjects() {
    const grid = $("#projGrid");
    if (!grid || typeof PROJETUS === "undefined") return;
    grid.innerHTML = PROJETUS.map(function (p, i) {
      return (
        '<article class="proj-card reveal" style="transition-delay:' + (i * 80) + 'ms">' +
        '<div class="proj-media"><img src="' + imgURL(p.img, 800) + '" alt="' + p.titulu + '" loading="lazy">' +
        '<span class="proj-area" style="color:' + p.kor + '">' + p.area + "</span></div>" +
        '<div class="proj-body"><h3>' + p.titulu + "</h3><p>" + p.deskrisaun + "</p>" +
        '<div class="proj-meta">' +
        "<span><i class=\"fa-regular fa-calendar\"></i>" + p.tinan + "</span>" +
        "<span><i class=\"fa-solid fa-users\"></i>" + p.membru + "</span>" +
        "</div>" +
        '<div class="proj-tags">' + p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
        '<a href="javascript:void(0)" class="act-btn" data-proj="' + p.id + '">Haree Projetu <i class="fa-solid fa-arrow-right"></i></a>' +
        "</div></article>"
      );
    }).join("");
    $$(".proj-media img", grid).forEach(function (img, i) {
      attachFallback(img, PROJETUS[i].img.seed, 800);
    });
    $$("[data-proj]", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const p = PROJETUS.find(function (x) { return x.id === parseInt(btn.dataset.proj, 10); });
        if (!p) return;
        openDetail({
          titulu: p.titulu,
          badge: p.area,
          badgeKor: p.kor,
          img: p.img,
          meta: [
            ["fa-regular fa-calendar", "Tinan " + p.tinan],
            ["fa-solid fa-users", p.membru],
            ["fa-solid fa-diagram-project", "Projetu Estudante"]
          ],
          texto: "<p>" + p.detalhe + "</p>",
          tags: p.tags
        });
      });
    });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    $$(".reveal", grid).forEach(function (el) { io.observe(el); });
  }

  /* ---------- Render: Ekipa ---------- */
  function renderTeam() {
    const grid = $("#teamGrid");
    if (!grid || typeof EKIPA === "undefined") return;
    grid.innerHTML = EKIPA.map(function (m, i) {
      const roleKor = m.role === "Lideransa" ? "#f5a524" : m.role === "Koordenadór" ? "#2e86de" : "#16406a";
      return (
        '<article class="team-card reveal" style="transition-delay:' + (i * 60) + 'ms">' +
        '<div class="team-photo"><img src="' + m.foto + '" alt="' + m.naran + '" loading="lazy" onerror="this.onerror=null;this.src=\'https://picsum.photos/seed/' + m.seed + '/500/500\'">' +
        "</div>" +
        '<span class="team-role" style="background:linear-gradient(135deg,' + roleKor + ',' + roleKor + 'dd)">' + m.pozisaun + "</span>" +
        "<h4>" + m.naran + "</h4>" +
        '<div class="team-area">' + m.area + "</div>" +
        '<div class="team-socials">' +
        '<a href="javascript:void(0)" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
        '<a href="javascript:void(0)" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
        '<a href="javascript:void(0)" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>' +
        "</div></article>"
      );
    }).join("");
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    $$(".reveal", grid).forEach(function (el) { io.observe(el); });
  }

  /* ---------- Render: Notísia ---------- */
  function renderNews() {
    const grid = $("#newsGrid");
    if (!grid || typeof NOTISIAS === "undefined") return;
    const months = {
      "Janeiru": "Jan", "Fevreiru": "Feb", "Marsu": "Mar", "Abril": "Abr",
      "Maiu": "Mai", "Junho": "Jun", "Julho": "Jul", "Agostu": "Ago",
      "Setembru": "Set", "Outubru": "Out", "Novembru": "Nov", "Dezembru": "Des"
    };
    grid.innerHTML = NOTISIAS.map(function (n, i) {
      const parts = n.data.split(" ");
      const day = parts[0];
      const mon = months[parts[1]] || parts[1];
      const kor = korKategoria(n.kategoria);
      return (
        '<article class="news-card reveal" style="transition-delay:' + (i * 80) + 'ms">' +
        '<div class="news-media"><img src="' + imgURL(n.img, 800) + '" alt="' + n.titulu + '" loading="lazy">' +
        '<div class="news-date"><span class="d">' + day + "</span><span class=\"m\">" + mon + "</span></div>" +
        '<span class="news-cat" style="background:' + kor + 'cc">' + n.kategoria + "</span></div>" +
        '<div class="news-body"><h3>' + n.titulu + "</h3><p>" + n.deskrisaun + "</p>" +
        '<a href="javascript:void(0)" class="news-link" data-news="' + n.id + '">Lee Tan <i class="fa-solid fa-arrow-right"></i></a>' +
        "</div></article>"
      );
    }).join("");
    $$(".news-media img", grid).forEach(function (img, i) {
      attachFallback(img, NOTISIAS[i].img.seed, 800);
    });
    $$("[data-news]", grid).forEach(function (btn) {
      btn.addEventListener("click", function () {
        const n = NOTISIAS.find(function (x) { return x.id === parseInt(btn.dataset.news, 10); });
        if (!n) return;
        openDetail({
          titulu: n.titulu,
          badge: n.kategoria,
          badgeKor: korKategoria(n.kategoria),
          img: n.img,
          meta: [["fa-regular fa-calendar", n.data]],
          texto: "<p>" + n.detalhe + "</p>"
        });
      });
    });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    $$(".reveal", grid).forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const y = $("#yearNow");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initPreloader();
    initScroll();
    initMobileMenu();
    initScrollspy();
    initReveal();
    initCounters();
    initYear();
    initActivityFilters();
    renderAreas();
    renderActivities();
    renderProjects();
    renderTeam();
    renderNews();
  });
})();
