document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.target.querySelector(".btn-submit");
  const originalText = button.textContent;

  button.textContent = "Message Sent!";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.target.reset();
  }, 2500);
});

// Copy hero email to clipboard
document.addEventListener("click", (e) => {
  const btn = e.target.closest?.(".hero-email-btn");
  if (!btn) return;
  const email = btn.getAttribute("data-email");
  if (!email) return;
  navigator.clipboard?.writeText(email).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copied!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1500);
  }).catch(() => {
    // fallback: select text
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    try { document.execCommand('copy'); btn.textContent = 'Copied!'; } catch(_) {}
    el.remove();
    setTimeout(() => { btn.textContent = email; }, 1500);
  });
});
