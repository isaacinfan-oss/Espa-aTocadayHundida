document.addEventListener("DOMContentLoaded", function() {
  const existingBanner = document.getElementById("cookie-banner");
  if (existingBanner) return; // evita duplicados

  if (!localStorage.getItem("cookiesAccepted")) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      max-width: 900px;
      margin: auto;
      background: #fff;
      padding: 16px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      z-index: 9999;
      font-family: sans-serif;
      text-align: center;
    `;

    banner.innerHTML = `
      <p style="margin:0 0 8px 0;font-size:15px;color:#333;">
        Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.
        <a href="/legal/politica-de-cookies/" style="color:#0066cc;text-decoration:underline;">Más información</a>
      </p>
      <button id="accept-cookies" style="background:#0066cc;color:#fff;border:0;border-radius:6px;padding:8px 16px;cursor:pointer;">
        Aceptar
      </button>
    `;

    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", true);
      banner.remove();
    });
  }
});

