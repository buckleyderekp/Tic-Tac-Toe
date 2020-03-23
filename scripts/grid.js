

    const contentTarget = document.querySelector(".container")

export const renderGrid = () => {
    contentTarget.innerHTML = `
    <div class="gridSquare" id="square--1"></div>
    <div class="gridSquare" id="square--2"></div>
    <div class="gridSquare" id="square--3"></div>
    <div class="gridSquare" id="square--4"></div>
    <div class="gridSquare" id="square--5"></div>
    <div class="gridSquare" id="square--6"></div>
    <div class="gridSquare" id="square--7"></div>
    <div class="gridSquare" id="square--8"></div>
    <div class="gridSquare" id="square--9"></div>
    `
}
let player1 = false

contentTarget.addEventListener("click", clickEvent => {
    player1 = !player1

    if (player1) {
        event.target.innerText ="X"
        clickEvent.target.classList.add("player1")
      }  
      else {
          event.target.innerText = "O"
          clickEvent.target.classList.add("player2")
      }
    })
      // Make sure it was one of the color buttons
      contentTarget.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("square--")) {
          
          const currentPlayerState = player1
          // Get the chosen color
          const [prefix, chosenSquare] = clickEvent.target.id.split("--")
          
          /*
          Create a new custom event, with a good name, and
          add a property to the `detail` object that specifies
          which color was chosen
          */
         const squareChosenEvent = new CustomEvent("squareChosen", {
             detail: {
                 square: chosenSquare,
                 player: currentPlayerState
                }
          })
  
          contentTarget.dispatchEvent(squareChosenEvent)
      }

    })
    
    


    



