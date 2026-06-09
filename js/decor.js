/* MINDSHROOM.studio — decorative fillers: icons, rotating stamps, gears */
(function () {
  "use strict";
  function run() {
    var I = window.MS_ICON || {};

    /* inline icons by key */
    document.querySelectorAll("[data-i]").forEach(function (el) {
      var key = el.getAttribute("data-i");
      if (I[key]) el.innerHTML = I[key];
    });

    /* rotating circular stamps */
    document.querySelectorAll("[data-stamp]").forEach(function (el) {
      var text = el.getAttribute("data-stamp") || "CURIOUS BY NATURE • CREATIVE BY DESIGN • ";
      var size = parseInt(el.getAttribute("data-size") || "120", 10);
      var color = el.getAttribute("data-color") || "var(--ms-red)";
      var r = size / 2 - 13;
      var id = "stamp" + Math.random().toString(36).slice(2, 8);
      var seeds = "";
      for (var i = 0; i < 8; i++) {
        var a = (i * Math.PI * 2) / 8;
        seeds += '<circle cx="' + (20 + Math.cos(a) * 11).toFixed(1) + '" cy="' + (20 + Math.sin(a) * 11).toFixed(1) + '" r="2.6"/>';
      }
      el.classList.add("stamp");
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.innerHTML =
        '<svg class="ring" viewBox="0 0 ' + size + " " + size + '" style="position:absolute;inset:0;width:100%;height:100%">' +
          '<defs><path id="' + id + '" d="M ' + size / 2 + "," + size / 2 + " m -" + r + ",0 a " + r + "," + r + " 0 1,1 " + r * 2 + ",0 a " + r + "," + r + " 0 1,1 -" + r * 2 + ',0"/></defs>' +
          '<text fill="' + color + '" style="font-family:Space Grotesk,sans-serif;font-size:11px;letter-spacing:.18em;font-weight:600">' +
            '<textPath href="#' + id + '">' + text + text + "</textPath></text></svg>" +
        '<svg viewBox="0 0 40 40" style="width:' + size * 0.3 + "px;height:" + size * 0.3 + 'px"><g fill="' + color + '"><circle cx="20" cy="20" r="3"/>' + seeds + "</g></svg>";
    });

    /* gear pairs */
    var gear = '<svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><g fill="var(--ms-green)"><circle cx="16" cy="16" r="6"/>';
    for (var g = 0; g < 8; g++) { var ga = (g * Math.PI) / 4; gear += '<rect x="' + (16 + Math.cos(ga) * 11 - 2).toFixed(1) + '" y="' + (16 + Math.sin(ga) * 11 - 2).toFixed(1) + '" width="4" height="4"/>'; }
    gear += '</g><circle cx="16" cy="16" r="2.5" fill="var(--ms-orange)"/></svg>';
    document.querySelectorAll("[data-gears]").forEach(function (el) { el.innerHTML = gear + gear; });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
