
const contentTarget = document.querySelector(".container")

let player1Moves = []
let player2Moves = []

contentTarget.addEventListener("squareChosen", event => {
    const square = event.detail.square
    const player = event.detail.player

if (player) {
    player1Moves.push(square)
}
else {
    player2Moves.push(square)
}
 
})

