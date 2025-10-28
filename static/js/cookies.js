document.addEventListener("DOMContentLoaded", function () {
  // Crear banner
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(20, 20, 20, 0.95);
      color: #fff;
      text-align: center;
      padding: 14px 10px;
      font-size: 14px;
      line-height: 1.5;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
      z-index: 9999;
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.6s ease;
    ">
      <p style="margin: 0 0 8px 0;">
        Usamos cookies para mejorar tu experiencia. 
        Al continuar navegando, aceptas nuestra 
        <a href="/legal/politica-de-cookies" style="color: #4ea1ff; text-decoration: underline;">Política de Cookies</a>.
      </p>
      <button id="accept-cookies" style="
        background: #4ea1ff;
        border: none;
        color: #fff;
        padding: 8px 18px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.3s ease, transform 0.2s ease;
      ">
        Aceptar
      </button>
    </div>
  `;
  document.body.appendChild(banner);

  const acceptBtn = document.getElementById("accept-cookies");
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  // Mostrar con animación
  if (!cookiesAccepted) {
    requestAnimationFrame(() => {
      banner.firstElementChild.style.opacity = "1";
      banner.firstElementChild.style.transform = "translateY(0)";
    });
  }

  // Acción al hacer clic
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");

    // Animación del botón
    acceptBtn.style.background = "#3c8ce7";
    acceptBtn.style.transform = "scale(0.95)";

    // Suave desvanecido del banner
    setTimeout(() => {
      banner.firstElementChild.style.opacity = "0";
      banner.firstElementChild.style.transform = "translateY(100%)";
      setTimeout(() => banner.remove(), 600);
    }, 200);
  });
});

