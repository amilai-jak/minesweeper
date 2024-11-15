let game = false;
let start = true;
let victory = false;
let game_over = false;

function Start_button() {
    start = false
    game = true
    tick()
}

const tick = () => {
    if (start) {
        console.log("Start");
    }
    else if (game) {
        console.log("Game");
    }
    else if (victory) {
        console.log("Victory");
    }
    else if (game_over) {
        console.log("gameover")
    }
    
}