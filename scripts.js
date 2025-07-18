// MENU HAMBURGUER
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// CONTEÚDO DAS NOTÍCIAS
const noticias = {
  noticia1: {
    titulo: "Bolsonaro de Tornozeleira",
    corpo: "BRASÍLIA - O ex-presidente Jair Bolsonaro (PL) declarou que se sentiu “humilhado” com a operação da Polícia Federal (PL) nesta sexta-feira (18). Agentes estiveram na casa dele e na sede do PL, em Brasília, para cumprir mandados de busca e apreensão.O objetivo é uma suprema humilhação”, disse. “Sou ex-presidente, tenho 70 anos de idade, isso é uma suprema humilhação”, repetiu. Ele falou ao sair da Secretaria de Administração Penitenciária do Distrito Federal, onde colocou tornozeleira eletrônica.Agora monitorado, Bolsonaro afirmou que “nunca” pensou em sair do Brasil ou ir para uma embaixada. Ele também se disse inocente no processo de golpe de Estado, em que é réu no Supremo Tribunal Federal (STF). “Nada me coloca em um plano golpista que não existe”, frisou. Na operação desta sexta-feira, a PF apreendeu, na casa do ex-presidente, R$ 7 mil e US$ 14 mil. Bolsonaro afirmou que o dinheiro não é ilícito e pode ter origem comprovada. “Sempre guardei dólar em casa. É normal”, frisou. Ele também ressaltou não saber sobre um pen drive encontrado pelos agentes no banheiro de sua casa.  "
  },
  noticia2: {
    titulo: "Galeria subterrânea é interditada após desabamento",
    corpo: "A galeria na região central foi interditada após estranhos colapsos internos. Símbolos antigos foram encontrados nas paredes. A área segue isolada pelas autoridades."
  },
  noticia3: {
    titulo: "Nas selvas de Belize, arqueólogos desenterraram o que pode ser a tumba de um rei maia",
    corpo: "Nas selvas de Belize, arqueólogos desenterraram o que pode ser a tumba de um rei maia com 1.700 anos de idade — possivelmente o governante fundador da antiga cidade de Caracol. Encontrada sob um palácio próximo à imponente estrutura Caana, a tumba continha um verdadeiro tesouro de artefatos da elite: uma máscara mortuária de jade e conchas, contas de jade com gravuras de macaco-aranha, cerâmicas cerimoniais e três pares de brincos de jade — extremamente raros em sepultamentos maias. O tamanho e o conteúdo da tumba sugerem fortemente um status real, e sua data estimada, por volta de 350 d.C., coincide com o reinado de Te K’ab Chaak, o primeiro rei conhecido de Caracol.Embora a tumba não contenha inscrições, os arqueólogos Diane e Arlen Chase, que trabalham em Caracol há décadas, estão 99,9% confiantes de que ela pertenceu a Te K’ab Chaak. Se confirmada, seria o sepultamento real mais antigo encontrado no local e pode alterar nossa compreensão das relações entre os maias e Teotihuacan, sugerindo contato décadas antes do que é amplamente aceito. Ainda assim, alguns especialistas pedem cautela até que surjam evidências por DNA ou inscrições. A equipe planeja compartilhar mais informações em uma conferência futura e espera que testes adicionais confirmem a identidade do ocupante da tumba e esclareçam aspectos da política mesoamericana antiga. Fonte: University of Houston. (10 de julho de 2025). UH Archae"
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
