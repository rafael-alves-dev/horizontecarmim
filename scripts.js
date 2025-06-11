// MENU HAMBURGUER
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// CONTEÚDO DAS NOTÍCIAS
const noticias = {
  noticia1: {
    titulo: "Tremores assustam moradores da Savassi",
    corpo: "Moradores relatam tremores inexplicáveis durante três noites consecutivas. Especialistas não encontraram falhas geológicas. Testemunhas afirmam ter ouvido sussurros vindo do chão."
  },
  noticia2: {
    titulo: "Galeria subterrânea é interditada após desabamento",
    corpo: "A galeria na região central foi interditada após estranhos colapsos internos. Símbolos antigos foram encontrados nas paredes. A área segue isolada pelas autoridades."
  },
  noticia3: {
    titulo: "Depoimento de Bolsonaro ao STF",
    corpo: "Denúncia da PGR apontou ex-presidente Jair Bolsonaro como líder de organização criminosa que planejou suposta tentativa de golpe de Estado em 2022"
  },
  noticia4: {
    titulo: "Atlético Mineiro",
    corpo: "Joia do Atlético deve fazer primeira partida oficial após diagnóstico de problema no coração."
  },
  noticia5: {
    titulo: "Luzes estranhas são vistas na Serra do Curral",
    corpo: "Um grupo de trilheiros viu luzes circulares se movendo em padrões. Um deles desapareceu por horas e voltou desorientado, falando em 'vozes da terra'."
  },
  noticia6: {
    titulo: "Temperaturas devem despencar em BH nos próximos dias, com previsão de frio recorde",
    corpo: "Belo Horizonte e região metropolitana devem enfrentar os dias mais frios do ano até o momento, com a possibilidade de recorde de temperatura mínima em 2025. Conforme o Instituto Nacional de Meteorologia (Inmet), os termômetros podem chegar a 7°C na sexta-feira (13), valor inferior ao registrado nos dias mais frios do ano até agora, em 16 e 20 de maio, quando fez 12,1°C."
  }
};

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
