// colocar nome em baixo dos filmes 
// colocar imagens com o formato jpeg
// colocar um link que leva para o trailer do filme


var resultado = document.getElementById('listaFilmes')
function adicionarFilme() {
    let filmes=document.getElementsByTagName('filme')
    resultado.innerHTML += "<img src='"+filmes[0]+"'>"
}


