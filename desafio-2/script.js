let lightYearsVelocity = 3 * Math.pow(10, 8);
let lightYearsInMeters = 9.4 * Math.pow(10, 15);

function convert() {
  let lightYears = parseInt(document.getElementById("value").value);
  let distance = lightYears * lightYearsInMeters;
  let years = (distance / lightYearsVelocity / 60 / 60 / 24).toFixed(1);

  let resultElement = document.querySelector(".result");
  let paragraphElement = document.createElement("p");
  paragraphElement.innerText =
    "A distância equivale a " +
    distance +
    " metros! Você demorará " +
    years +
    " anos para chegar ao seu destino.";
  paragraphElement.innerText += "Te vejo lá. Ah, e obrigada pelos peixes!";
  resultElement.appendChild(paragraphElement);
}
