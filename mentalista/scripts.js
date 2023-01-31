var numeroSecreto = parseInt(Math.random() * 101)

while (chute != numeroSecreto){
  var chute = prompt('Digite um número entre 1 e 100:')

  if (chute == numeroSecreto) {
    alert('Acertou!')
    break
  } else if  (chute > numeroSecreto){
    alert("Você errou! " + chute + " é maior que o número secreto!")
  } else if  (chute < numeroSecreto){
    alert("Você errou! " + chute + " é menor que o número secreto!")
  }
  
}