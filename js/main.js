/* MINDSHROOM.studio — shared nav/footer injection + interactions */
(function () {
  "use strict";

  /* ---- tiny inline icons (lucide-ish) ---- */
  var I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>'
  };
  window.MS_ICON = I;

  var BRANDMARK =
    '<svg class="brand__mark" viewBox="0 0 64 56" aria-hidden="true">' +
    '<path d="M16 8c-7 0-12 5-12 12 0 4 2 7 5 9v22c0 2 2 4 4 4h6c2 0 4-2 4-4V29c3-2 5-5 5-9 0-7-5-12-12-12z" fill="currentColor"/>' +
    '<path d="M44 4c-8 0-14 6-14 14 0 5 2 9 6 11v23c0 2 2 4 4 4h8c2 0 4-2 4-4V29c4-2 6-6 6-11 0-8-6-14-14-14z" fill="currentColor"/>' +
    '<circle cx="13" cy="18" r="2.2" fill="var(--ms-green)"/><circle cx="19" cy="18" r="2.2" fill="var(--ms-green)"/>' +
    '<circle cx="40" cy="16" r="2.6" fill="var(--ms-green)"/><circle cx="48" cy="16" r="2.6" fill="var(--ms-green)"/></svg>';

  var LINKS = [
    { href: "work.html", label: "Work", page: "work" },
    { href: "services.html", label: "Services", page: "services" },
    { href: "studio.html", label: "Studio", page: "studio" },
    { href: "journal.html", label: "Journal", page: "journal" }
  ];

  function buildNav() {
    var host = document.querySelector("[data-nav]");
    if (!host) return;
    var current = document.body.dataset.page || "";
    var variant = host.getAttribute("data-nav") || "cream";
    host.classList.add("nav");
    if (variant === "red") host.classList.add("nav--red");

    var links = LINKS.map(function (l) {
      var active = l.page === current ? " is-active" : "";
      return '<a href="' + l.href + '" class="' + active.trim() + '">' + l.label + "</a>";
    }).join("");

    host.innerHTML =
      '<div class="nav__bar">' +
        '<a href="index.html" class="brand" aria-label="Mindshroom.studio home">' +
          BRANDMARK +
          '<span class="brand__name">MINDSHROOM<small>.studio</small></span>' +
        "</a>" +
        '<nav class="nav__links" id="ms-menu">' + links + "</nav>" +
        '<a href="contact.html" class="btn ' + (variant === "red" ? "btn--cream" : "btn--red") + ' nav__cta">' +
          "Let's Connect <span class=\"chip-arrow\">" + I.arrow + "</span></a>" +
        '<button class="nav__burger" aria-label="Menu" aria-expanded="false">' + I.burger + "</button>" +
      "</div>" +
      '<div class="nav__divider"></div>';

    var burger = host.querySelector(".nav__burger");
    var menu = host.querySelector("#ms-menu");
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  function buildFooter() {
    var host = document.querySelector("[data-foot]");
    if (!host) return;
    host.classList.add("foot");
    host.innerHTML =
      '<div class="foot__inner"><div class="foot__rule"></div>' +
        '<div class="foot__row">' +
          '<span class="muted">© 2026 Mindshroom.studio</span>' +
          '<span class="foot__social">' +
            '<a href="#">Instagram</a><span class="foot__dot"></span>' +
            '<a href="#">Behance</a><span class="foot__dot"></span>' +
            '<a href="#">Dribbble</a><span class="foot__dot"></span>' +
            '<a href="#">LinkedIn</a>' +
          "</span>" +
          '<span class="muted">hello@mindshroom.studio</span>' +
        "</div></div>";
  }

  /* journal filter chips */
  function journalFilter() {
    var chips = document.querySelectorAll("[data-chip]");
    if (!chips.length) return;
    var posts = document.querySelectorAll("[data-cat]");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (x) { x.classList.remove("is-active"); });
        c.classList.add("is-active");
        var f = c.getAttribute("data-chip");
        posts.forEach(function (p) {
          var show = f === "all" || p.getAttribute("data-cat") === f;
          p.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* project-type toggle + fake submit */
  function contactForm() {
    document.querySelectorAll(".type").forEach(function (t) {
      t.addEventListener("click", function () { t.classList.toggle("is-on"); });
    });
    document.querySelectorAll("form[data-fake]").forEach(function (f) {
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = f.querySelector('[type="submit"]');
        if (btn) { var o = btn.innerHTML; btn.innerHTML = "Sent ✓"; setTimeout(function () { btn.innerHTML = o; }, 2200); }
        f.reset();
      });
    });
  }

  function init() {
    buildNav();
    buildFooter();
    journalFilter();
    contactForm();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
