// Desafios propostos:
// Colocar quantidade de jogadores com nome
// personalizar a tabela com mais botoes e o fundo

var matheus = {
    nome:'Matheus',
    vitorias:0,
    empate:0,
    derrotas:0,
    pontos:0
}
var daniela= {
    nome:'Daniela',
    vitorias:0,
    empate:0,
    derrotas:0,
    pontos:0
}
var tabela=document.getElementById('tabelaJogadores')
function exibirnaTela() {
    tabela.innerHTML= `
             <tr>
              <td>${matheus.nome}</td>
              <td>${matheus.vitorias}</td>
              <td>${matheus.empate}</td>
              <td>${matheus.derrotas}</td>
              <td>${matheus.pontos}</td>
              <td><button onClick="adicionarVitoria(matheus)">Vitória</button></td>
              <td><button onClick="adicionarEmpate(matheus)">Empate</button></td>
              <td><button onClick="adicionarDerrota(matheus)">Derrota</button></td>
            </tr>

            <tr>
              <td>${daniela.nome}</td>
              <td>${daniela.vitorias}</td>
              <td>${daniela.empate}</td>
              <td>${daniela.derrotas}</td>
              <td>${daniela.pontos}</td>
              <td><button onClick="adicionarVitoria(daniela)">Vitória</button></td>
              <td><button onClick="adicionarEmpate(daniela)">Empate</button></td>
              <td><button onClick="adicionarDerrota(daniela)">Derrota</button></td>
            </tr> `
}
exibirnaTela()
function adicionarVitoria(jogador) {
    jogador.vitorias= jogador.vitorias + 1
    jogador.pontos= jogador.pontos + 3
    exibirnaTela()
}
function adicionarDerrota(jogador) {
    jogador.derrotas= jogador.derrotas + 1
    exibirnaTela()
}
function adicionarEmpate(jogador) {
    jogador.empate= jogador.empate + 1
    jogador.pontos= jogador.pontos + 2.5
    exibirnaTela()
}
    



