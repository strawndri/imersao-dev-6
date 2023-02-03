var Andrieli = {
    nome: "Andrieli",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela() {
    elementoTabela.innerHTML = `
    <tr>
    <td>${Andrieli.nome}</td>
    <td>${Andrieli.vitorias}</td>
    <td>${Andrieli.empates}</td>
    <td>${Andrieli.derrotas}</td>
    <td>${Andrieli.pontos}</td>
    <td><button onClick="adicionarVitoria(Andrieli)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(Andrieli)">Empate</button></td>
    <td><button onClick="adicionarDerrota(Andrieli)">Derrota</button></td>
    </tr>
    `;
}

function adicionarVitoria(jogador) {
    jogador.vitorias++;
    jogador.pontos += 3;
    exibirNaTela();
}

function adicionarEmpate(jogador) {
    jogador.empates++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(jogador) {
    jogador.derrotas++;
    exibirNaTela();
}
