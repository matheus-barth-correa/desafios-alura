var nome=prompt('olá, qual é o seu nome.')
var tentativas = 12
alert(`Seja bem vindo ${nome} ao "Jogo do acerto".Você terá ${tentativas} chances.`) 
var secreto=parseInt(Math.random() * 1001)
var resultado=document.getElementById('res')
var resultado2=document.getElementById('res2')
var tentativasUsadas=0
    while (chute != secreto && tentativasUsadas != tentativas) {
    tentativasUsadas= tentativasUsadas + 1
    var contagemdechances=tentativas - tentativasUsadas
    var chute=prompt('escolhe um numero de 1 à 1000') 
    if (chute == secreto) {
        resultado.innerHTML=`Parabens ${nome} você acertou!!`
    }  else if (tentativasUsadas == tentativas) {
        resultado2.innerHTML=`${nome}, você perdeu todas as chances.`
        break
    } else if (chute > secreto) {
        alert(`Opss você errou, o numero é menor que ${chute}. Você tem ${contagemdechances} chances.`)
     } else if (chute < secreto) {
         alert(`Opss você errou, o numero é maior que ${chute}. Você tem ${contagemdechances} chances.`)
    } 
    }



