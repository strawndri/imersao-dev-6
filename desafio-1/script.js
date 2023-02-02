function convert() {
    var coinsSelect = document.getElementById('coins')
    var coinElement = coinsSelect.options[coinsSelect.selectedIndex].value
    var valueElement = document.getElementById('value').value
    
    if (valueElement == '') {
      alert('Não foi possível realizar a conversão. Insira um valor no campo de texto.')
    } else {
      showResult(coinElement, valueElement)
    }
}

function showResult(coin, value) {
  var resultElement = document.querySelector('.result')
  var prices = [
    {
      coin: 'dollar',
      symbol: '$',
      value: 5.13
    },
    {
      coin: 'argentinianPeso',
      symbol: '$',
      value: 0.027
    },
    {
      coin: 'euro',
      symbol: '€',
      value: 5.57
    }
  ]
  
  var paragraphElement = document.createElement('p')
  
  switch(coin) {
    case 'dollar':
      var symbol = prices[0].symbol
      var result = (prices[0].value * value).toFixed(2)
      break 
    case 'argentinianPeso':
      var argentinianPeso = prices[1].symbol
      var result = (prices[1].value * value).toFixed(2)
      break 
    case 'euro':
      var symbol = prices[2].symbol
      var result = (prices[2].value * value).toFixed(2)
      break 
  }
  
  paragraphElement.innerText = symbol + value + ' equivale a ' + 'R$' + result
  resultElement.appendChild(paragraphElement)
}