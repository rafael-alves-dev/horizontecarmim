// MENU HAMBURGUER
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// MODAL
function abrirModal(id) {
  const conteudo = noticias[id];
  if (conteudo) {
    document.getElementById("conteudo-modal").innerHTML = `
      <h2>${conteudo.titulo}</h2>
      <p>${conteudo.corpo}</p>
    `;
    document.getElementById("modal").style.display = "block";
  }
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Fecha ao clicar fora do modal
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
