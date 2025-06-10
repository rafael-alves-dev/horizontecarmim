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
    titulo: "Capela antiga atrai fiéis após 'milagre' na madrugada",
    corpo: "Uma névoa espessa envolveu a capela às 3h da manhã, formando brevemente um símbolo no altar. Fiéis acreditam que foi uma manifestação divina. A diocese não comentou."
  },
  noticia4: {
    titulo: "Símbolo misterioso é encontrado em fonte histórica",
    corpo: "A fonte do bairro Lagoinha exibe marcas que lembram alfabetos antigos e rituais ocultistas. Historiadores tentam decifrar sua origem. A prefeitura lacrou o local."
  },
  noticia5: {
    titulo: "Luzes estranhas são vistas na Serra do Curral",
    corpo: "Um grupo de trilheiros viu luzes circulares se movendo em padrões. Um deles desapareceu por horas e voltou desorientado, falando em 'vozes da terra'."
  },
  noticia6: {
    titulo: "Vozes são ouvidas durante aula noturna na UFMG",
    corpo: "Alunos da pós-graduação relataram murmúrios em uma ala abandonada do campus. A administração investigou, mas nada foi encontrado. Relatos continuam."
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
