var players = [
    {
        name: "Andrieli",
        image: "https://i.imgur.com/Mn91cyX.png",
        wins: 0,
        ties: 0,
        defeats: 0,
        points: 0
    }
];

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();
function exibirNaTela() {
    elementoTabela.innerHTML = "";
    players.forEach((player) => {
        elementoTabela.innerHTML += `
        <tr>
        <td>${player.name}</td>
        <td><img src='${player.image}'></td>
        <td>${player.wins}</td>
        <td>${player.ties}</td>
        <td>${player.defeats}</td>
        <td>${player.points}</td>
        <td><button onClick="addWin(${players.indexOf(
            player
            )})">Vitória</button></td>
            <td><button onClick="addTie(${players.indexOf(
                player
                )})">Empate</button></td>
                </tr>
                `;
            });
        }
        
        var imageExtensions = ["jpg", "png", "jpeg", "gif", "svg", "tiff"];
        
        function addPlayer() {
            var namePlayer = document.getElementById("name").value;
            var imagePlayer = document.getElementById("image").value;
            
            var url = imagePlayer.split(".");
            var extension = url[url.length - 1];
            
            if (namePlayer == "" || imagePlayer == "") {
                alert("Não foi possível adicionar o(a) nosvo jogador(a). Tente novamente.");
            } else if (imageExtensions.includes(extension) == false) {
                alert(
                    "Oops! Não foi possível adicionar a imagem. Tente um caminho com alguma destas extensões: jpg, png, jpeg, gif, svg ou tiff."
                    );
                } else {
                    players.push({
                        name: namePlayer,
                        image: imagePlayer,
                        wins: 0,
                        ties: 0,
                        defeats: 0,
                        points: 0
                    });
                    exibirNaTela();
                }
                document.getElementById("name").value = "";
                document.getElementById("image").value = "";
            }
            
            function addWin(playerIndex) {
                players.forEach((player) => {
                    if (player == players[playerIndex]) {
                        players[playerIndex].wins++;
                        players[playerIndex].points += 2;
                    } else {
                        player.defeats++;
                    }
                });
                exibirNaTela();
            }
            
            function addTie(playerIndex) {
                players.forEach((player) => {
                    player.ties++;
                    player.points++;
                });
                exibirNaTela();
            }
            
            function reset() {
                players.forEach((player) => {
                    player.wins = 0;
                    player.ties = 0;
                    player.defeats = 0;
                    player.points = 0;
                });
                exibirNaTela();
            }
            