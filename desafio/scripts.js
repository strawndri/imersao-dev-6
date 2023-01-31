var numeroSecreto = parseInt(Math.random() * 101)
var numeroTentativas = 0
var elementoResultado = document.getElementById('resultado')

function chutar(){
  var chute = parseInt(document.getElementById('chute').value)
  
  while (chute != numeroSecreto && numeroTentativas <= 5){

    numeroTentativas += 1
    
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = '<p> Parabéns! Você acertou após ' + numeroTentativas + ' tentativas! </p>'
      break
    } else if  (chute > numeroSecreto){
      elementoResultado.innerHTML = '<p> Opa! Parece que ' + chute + ' é maior que o número secreto! Cuidado, você tem mais ' + numeroTentativas + ' tentativas! </p>'
    } else if  (chute < numeroSecreto){
      elementoResultado.innerHTML = '<p> Opa! Parece que ' + chute + ' é menor que o número secreto! Cuidado, você tem mais ' + numeroTentativas + ' tentativas! </p>'
    } else if (numeroTentativas == 5) {
      elementoResultado.innerHTML = '<p> Opa! Parece que o número de tentativas acabou. Clique em "Reiniciar jogo" para tentar novamente.</p>'
    }

  }
  
}

function reiniciar() {
  numeroSecreto = parseInt(Math.random() * 101)
  numeroTentativas = 0
  var chute = document.getElementById('chute')
  chute.value = ''
  elementoResultado.innerHTML = '<p> Hm... pensei em um número. Consegue adivinhá-lo? Tente algo entre 0 e 100. </p>'
}