/* Shilling & Smith, P.C. — small progressive enhancements. The site works without JS. */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
    window.matchMedia("(min-width: 901px)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 4); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Contact form ----
     No server-side handler is connected yet. Until one is configured and tested,
     the form validates input and opens the visitor's email app with a pre-filled
     message to the office. It never claims a message was sent. */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    var fields = {
      name: { el: form.elements.namedItem("name"), msg: "Please enter your name." },
      email: { el: form.elements.namedItem("email"), msg: "Please enter a valid email address." },
      message: { el: form.elements.namedItem("message"), msg: "Please tell us briefly how we can help." }
    };

    var showError = function (key, text) {
      var f = fields[key];
      var err = document.getElementById(f.el.id + "-error");
      f.el.setAttribute("aria-invalid", text ? "true" : "false");
      if (err) err.textContent = text || "";
    };

    Object.keys(fields).forEach(function (key) {
      fields[key].el.addEventListener("input", function () {
        if (fields[key].el.getAttribute("aria-invalid") === "true" && fields[key].el.checkValidity()) showError(key, "");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      Object.keys(fields).forEach(function (key) {
        var f = fields[key];
        var ok = f.el.value.trim() !== "" && f.el.checkValidity();
        showError(key, ok ? "" : f.msg);
        if (!ok && !firstBad) firstBad = f.el;
      });
      if (firstBad) {
        firstBad.focus();
        return;
      }

      var to = form.getAttribute("data-mailto");
      var name = fields.name.el.value.trim();
      var phone = (form.elements.namedItem("phone").value || "").trim();
      var body = [
        fields.message.el.value.trim(),
        "",
        "—",
        "Name: " + name,
        "Email: " + fields.email.el.value.trim(),
        phone ? "Phone: " + phone : null
      ].filter(function (l) { return l !== null; }).join("\n");

      var href = "mailto:" + to +
        "?subject=" + encodeURIComponent("Consultation request from " + name) +
        "&body=" + encodeURIComponent(body);

      status.textContent =
        "Your email app should open with your message ready to send. If it doesn't, please call (845) 225-7500 or email " + to + ".";
      window.location.href = href;
    });
  }
})();
