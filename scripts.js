// MENU HAMBURGUER
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// CONTEÚDO DAS NOTÍCIAS
const noticias = {
  noticia1: {
    titulo: "Bolsonaro Preso",
    corpo: "Moraes impôs mais restrições a Bolsonaro. Após a determinação da prisão domiciliar, Bolsonaro tem de ficar recolhido em casa, com o uso de tornozeleira eletrônica, e só pode receber visitas se elas forem autorizadas por Moraes, mas elas não podem usar celulares.Medidas cautelares foram determinadas em julho. O ex-presidente já estava proibido de usar celular, de usar redes sociais, ainda que por terceiros, e de ter contato com embaixadores e autoridades estrangeiras, que também foram proibidos de visitá-lo."
  },
  noticia2: {
    titulo: "Vendas de caixinhas de som disparam no Shopping Oiapoque",
    corpo: "Belo Horizonte — Uma onda inusitada tem chamado atenção de comerciantes e frequentadores do tradicional Shopping Oiapoque, no centro da capital mineira. Segundo lojistas da ala de eletrônicos, as vendas de caixinhas de som portáteis aumentaram quase 70% nas últimas duas semanas.'É um modelo simples, daqueles que parecem rádio antigo, mas a galera tá vindo direto procurar. Teve até gente comprando três de uma vez', comentou Joelson Silva, dono de uma das bancas mais antigas do setor.Os modelos mais procurados são os menores, com visual retrô e entrada USB. Alguns vendedores relataram que certos clientes pedem especificamente por caixinhas que toquem músicas automaticamente ao serem ligadas.Apesar do aumento inesperado nas vendas, ainda não se sabe o motivo por trás dessa repentina demanda. 'Deve ser alguma moda nova do TikTok,arrisca um atendente.Ou talvez... não seja só isso'."
  },
  noticia3: {
    titulo: "Nas selvas de Belize, arqueólogos desenterraram o que pode ser a tumba de um rei maia",
    corpo: "Nas selvas de Belize, arqueólogos desenterraram o que pode ser a tumba de um rei maia com 1.700 anos de idade — possivelmente o governante fundador da antiga cidade de Caracol. Encontrada sob um palácio próximo à imponente estrutura Caana, a tumba continha um verdadeiro tesouro de artefatos da elite: uma máscara mortuária de jade e conchas, contas de jade com gravuras de macaco-aranha, cerâmicas cerimoniais e três pares de brincos de jade — extremamente raros em sepultamentos maias. O tamanho e o conteúdo da tumba sugerem fortemente um status real, e sua data estimada, por volta de 350 d.C., coincide com o reinado de Te K’ab Chaak, o primeiro rei conhecido de Caracol.Embora a tumba não contenha inscrições, os arqueólogos Diane e Arlen Chase, que trabalham em Caracol há décadas, estão 99,9% confiantes de que ela pertenceu a Te K’ab Chaak. Se confirmada, seria o sepultamento real mais antigo encontrado no local e pode alterar nossa compreensão das relações entre os maias e Teotihuacan, sugerindo contato décadas antes do que é amplamente aceito. Ainda assim, alguns especialistas pedem cautela até que surjam evidências por DNA ou inscrições. A equipe planeja compartilhar mais informações em uma conferência futura e espera que testes adicionais confirmem a identidade do ocupante da tumba e esclareçam aspectos da política mesoamericana antiga. Fonte: University of Houston. (10 de julho de 2025). UH Archae"
  },
  noticia4: {
    titulo: "Atlético Mineiro",
    corpo: "Galo sofre no primeiro tempo, mas consegue se recuperar na volta do intervalo e supera atual campeão nas penalidades. Um jogo de alto nível e equilibrado só poderia ser decidido nos pênaltis nesta quarta-feira (6/8). Foi sofrido, mas o Atlético superou a qualidade do elenco do Flamengo e, apesar da derrota por 1 a 0 no tempo regular, saiu classificado para as quartas de final da Copa do Brasil na Arena MRV, após vencer na ida pelo mesmo placar, no Maracanã. O Galo fez um primeiro tempo abaixo da média e viu o rival abrir o placar aos 20 minutos, em bela jogada do atacante Everton Cebolinha. O time voltou com postura mais ofensiva do intervalo, igualou o confronto, mas não conseguiu balançar a rede. Nos pênaltis, o atacante Wallace Yan desperdiçou pênalti decisivo, e o goleiro Everson garantiu a classificação alvinegra ao acertar a últiam cobrança. Não se pode chamar de uma revanche, mas os atleticanos tiveram um ‘gostinho’ de vingança ao eliminar o rival interestadual após o vice do Atlético no mesmo torneio, no ano passado, para o mesmo adversário. Outro ponto de comemoração para os donos da casa foi a primeira vitória sobre os cariocas na Arena MRV. Além de eliminar um gigante no mata-mata, o clube alvinegro garante mais R$ 4,7 milhões com premiação e mais um jogo com bom público em casa. Os valores serão fundamentais para as finanças alvinegras.."
  },
  noticia5: {
    titulo: "Luzes estranhas são vistas na Serra do Curral",
    corpo: "Um grupo de trilheiros viu luzes circulares se movendo em padrões. Um deles desapareceu por horas e voltou desorientado, falando em 'vozes da terra'."
  },
  noticia6: {
    titulo: "Estamos falando da Alt+Ctrl, uma rede de clubes noturnos com nomes repetidos (sim, todas se chamam Alt+Ctrl) espalhados em pontos improváveis da cidade: Lourdes, Prado e até no Barreiro.<br><br>O que une esses lugares? Nada muito claro. Alguns dizem que são espaços de música eletrônica. Outros juram que funcionam como galerias performáticas para experiências sensoriais. Há ainda quem fale em retiros alternativos, festas fechadas e... cultos disfarçados (mas aí já é teoria demais pra uma terça-feira).<br><br>As entradas costumam ser discretas, às vezes com fachada de galeria ou salão abandonado. Os convites? Circulam por aplicativos de mensagens, listas misteriosas ou... cartas. Isso mesmo. Cartas.<br><br>Quem entra, diz que é diferente de tudo.<br>E quem sai, normalmente prefere não comentar.<br><br>Se você conhece alguém que já esteve numa Alt+Ctrl... provavelmente ele não vai te contar.<br><br><br>📍 Alt+Ctrl – Lourdes: Local refinado, música ambiente e coquetéis com nomes como “Veneno de Maçã” e “Olho da Serpente”.<br>📍 Alt+Ctrl – Prado: Espaço boêmio, teatral, com apresentações interativas e sessões de “cura coletiva”.<br>📍 Alt+Ctrl – Barreiro: Este ninguém confirma que existe. Mas há fotos. Algumas... perturbadoras."
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
