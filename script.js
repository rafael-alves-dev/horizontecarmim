// =========================
// MENU HAMBÚRGUER
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (!toggleButton || !menu) return;

  toggleButton.setAttribute('aria-expanded', 'false');

  // Abre/fecha o menu
  toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    const clickedOutside = !menu.contains(e.target) && e.target !== toggleButton;
    if (menu.classList.contains('open') && clickedOutside) {
      menu.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Tecla ESC fecha
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});

// =========================
// MODAL (mantive como global)
// =========================
window.abrirModal = function (id) {
  // Se "noticias" não existir, evita erro
  if (typeof noticias === 'undefined') return;

  const conteudo = noticias[id];
  if (conteudo) {
    const el = document.getElementById("conteudo-modal");
    if (el) {
      el.innerHTML = `
        <h2>${conteudo.titulo}</h2>
        <p>${conteudo.corpo}</p>
      `;
    }
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "block";
  }
};

window.fecharModal = function () {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
};

// Fecha ao clicar fora do modal
window.addEventListener('click', function (event) {
  const modal = document.getElementById("modal");
  if (modal && event.target === modal) {
    modal.style.display = "none";
  }
});
