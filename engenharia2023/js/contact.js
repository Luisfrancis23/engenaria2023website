/* ============================================================
   ENGENHARIA 2023 — Kontaktu: validasaun formuláriu
   ============================================================ */

(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);

  function setErr(input, errEl, msg) {
    if (msg) {
      input.classList.add("invalid");
      errEl.textContent = msg;
      errEl.classList.add("show");
      return false;
    }
    input.classList.remove("invalid");
    errEl.classList.remove("show");
    return true;
  }

  function validaEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }

  function initForm() {
    const form = $("#contactForm");
    if (!form) return;

    const fields = {
      naran: {
        input: $("#fNaran"), err: $("#eNaran"),
        test: function (v) { return v.trim().length >= 2 || "Favor haree naran."; }
      },
      email: {
        input: $("#fEmail"), err: $("#eEmail"),
        test: function (v) { return validaEmail(v.trim()) || "Favor haree email válidu (ex.: nome@email.com)."; }
      },
      asuntu: {
        input: $("#fAsuntu"), err: $("#eAsuntu"),
        test: function (v) { return v.trim().length >= 3 || "Favor haree asuntu."; }
      },
      mensajen: {
        input: $("#fMensajen"), err: $("#eMensajen"),
        test: function (v) { return v.trim().length >= 10 || "Favor haree mensajen (mínimo 10 karaktere)."; }
      }
    };

    // Live validation
    Object.keys(fields).forEach(function (key) {
      const f = fields[key];
      f.input.addEventListener("input", function () {
        if (f.input.classList.contains("invalid")) {
          setErr(f.input, f.err, typeof f.test(f.input.value) === "string" ? f.test(f.input.value) : null);
        }
      });
      f.input.addEventListener("blur", function () {
        if (f.input.value.trim()) {
          setErr(f.input, f.err, typeof f.test(f.input.value) === "string" ? f.test(f.input.value) : null);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let ok = true;
      const firstInvalid = [];
      Object.keys(fields).forEach(function (key) {
        const f = fields[key];
        const res = f.test(f.input.value);
        const passed = res === true;
        setErr(f.input, f.err, passed ? null : res);
        if (!passed) {
          ok = false;
          firstInvalid.push(f.input);
        }
      });

      const btn = $("#btnHaruka");
      if (!ok) {
        if (typeof window.engToast === "function") {
          window.engToast("Erru", "Favor preenche kampus marcadu.", "fa-circle-exclamation");
        }
        if (firstInvalid[0]) firstInvalid[0].focus();
        return;
      }

      // Simula enviu (front-end demo)
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Haruka...';
      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Haruka Mensajen';
        form.reset();
        if (typeof window.engToast === "function") {
          window.engToast("Suksesu!", "Mensajen haruka kon sucessu. Responde lalais.", "fa-circle-check");
        }
      }, 1200);
    });
  }

  document.addEventListener("DOMContentLoaded", initForm);
})();
