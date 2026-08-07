// Variáveis de estado para guardar o placar atual
let scoreHome = 0;
let scoreGuest = 0;

// Seleção dos elementos na tela pelo ID
let homeEl = document.getElementById("points-home");
let guestEl = document.getElementById("points-guest");

// Função única que lida com o time e os pontos recebidos
function addPoints(team, points) {
    if (team === 'home') {
        scoreHome += points;
        homeEl.textContent = scoreHome;
    } else if (team === 'guest') {
        scoreGuest += points;
        guestEl.textContent = scoreGuest;
    }
}

function restart() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    scoreHome = 0;
    scoreGuest = 0;
}