window.addEventListener("load", function () {
  if (!localStorage.getItem("cookies-accepted")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #222;
        color: #fff;
        text-align: center;
        padding: 1rem;
        font-size: 14px;
        z-index: 9999;
      ">
        🍪 Usamos cookies para mejorar tu experiencia.
        <button id="acceptCookies" style="margin-left: 10px; padding: 5px 10px; background:#4caf50; border:none; color:white; cursor:pointer;">
          Aceptar
        </button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById("acceptCookies").onclick = () => {
      localStorage.setItem("cookies-accepted", "true");
      banner.remove();
    };
  }
});

