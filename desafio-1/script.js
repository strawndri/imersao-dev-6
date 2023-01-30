var nome = 'Andrieli';

var valorAtual = 100;
var cotacaoDoDolar = 5.13;
var cotacaoDoPesoArgentino = 0.027;
var cotacaoDoEuro = 5.57;

alert('Olá, ' + nome + '!')
alert('Vamos saber quanto fica o valor 100.00 de cada moeda em Real?')
alert("Cotação do Dólar ($) em Real (R$): " + (valorAtual * cotacaoDoDolar).toFixed(2));
alert("Cotação do Peso Argentino ($) em Real (R$): " + (valorAtual * cotacaoDoPesoArgentino).toFixed(2));
alert("Cotação do Euro (€) em Real (R$): " + (valorAtual * cotacaoDoEuro).toFixed(2));