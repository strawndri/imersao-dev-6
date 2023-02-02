function convert() {
    var fromElement = document.getElementById("from");
    var toElement = document.getElementById("to");
    var from = fromElement.options[fromElement.selectedIndex].value;
    var to = toElement.options[toElement.selectedIndex].value;
  
    var valueElement = parseInt(document.getElementById("value").value);
  
    if (valueElement == "" && valueElement != 0) {
      alert(
        "Não foi possível realizar a conversão. Insira um valor no campo de texto."
      );
    } else if (from == to) {
      alert(
        "Não foi possível realiar a conversão. É necessário escolher duas medidas distintas."
      );
    } else {
      showResult(from, to, valueElement);
    }
  }
  
  function showResult(from, to, value) {
    let resultElement = document.querySelector(".result");
    resultElement.innerHTML = ""
    let paragraphElement = document.createElement("p");
    let result;
    let fromSymbol;
    let toSymbol;
    let symbols = ["°C", "°F", "K"];
  
    switch (from) {
      case "celsius":
        fromSymbol = symbols[0];
  
        if (to == "fahrenheit") {
          toSymbol = symbols[1];
          result = ((value * 9) / 5 + 32).toFixed(2);
        } else {
          toSymbol = symbols[2];
          result = value + 273;
        }
        break;
      case "fahrenheit":
        fromSymbol = symbols[1];
        if (to == "celsius") {
          toSymbol = symbols[0];
          result = (((value - 32) * 5) / 9).toFixed(2);
        } else {
          toSymbol = symbols[2];
          result = (((value - 32) * 5) / 9).toFixed(2) + 273;
        }
        break;
      case "kelvin":
        fromSymbol = symbols[2];
        if (to == "celsius") {
          toSymbol = symbols[0];
          result = value - 273;
        } else {
          toSymbol = symbols[1];
          result = (((value - 273) * 9) / 5 + 32).toFixed(2);
        }
        break;
    }
  
    paragraphElement.innerText =
      value + fromSymbol + " equivale a " + result + toSymbol;
    resultElement.appendChild(paragraphElement);
  }
  