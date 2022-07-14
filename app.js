block1 = document.querySelector(".gameBlock1")          //selectors
block2 = document.querySelector(".gameBlock2")
block3 = document.querySelector(".gameBlock3")
block4 = document.querySelector(".gameBlock4")
block5 = document.querySelector(".gameBlock5")
block6 = document.querySelector(".gameBlock6")
block7 = document.querySelector(".gameBlock7")
block8 = document.querySelector(".gameBlock8")
block9 = document.querySelector(".gameBlock9")
gameContainer = document.querySelector(".gameBoard")
playerTurnX = document.querySelector(".playerTurnX")
playerTurnO = document.querySelector(".playerTurnODull")
winnerScreenX = document.querySelector(".winnerScreenX")
winnerScreenO = document.querySelector(".winnerScreenO")
tieScreen = document.querySelector(".tieScreen")
restartBtn = document.querySelector(".restart")

let programFinish = false       

const gameBoard = (function (){     

    let winCheck = false;
    let gameBoardFill = 0   // checking how many items on game board
    

    //private object
    const _positions = {
        position1: "position1",
        position2: "position2",
        position3: "position3",
        position4: "position4",
        position5: "position5",
        position6: "position6",
        position7: "position7",
        position8: "position8",
        position9: "position9",
    }

    //storing positions in object 
const storeValue = (getPos, storeValue) =>{
    for (let key in _positions){
        if(_positions[key] === getPos){
            _positions[key] = storeValue
            gameBoardFill++
        }
    }
}

            // checking X positons for 3 in a row
    const threeInRowCheckX = () =>{
        if(_positions.position1 === "X" && _positions.position2 === "X" && _positions.position3 === "X"){
            winnerScreenX.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if (_positions.position1 === "X" && _positions.position5 === "X" && _positions.position9 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position1 === "X" && _positions.position4 === "X" && _positions.position7 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position2 === "X" && _positions.position5 === "X" && _positions.position8 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position4 === "X" && _positions.position5 === "X" && _positions.position6 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position3 === "X" && _positions.position5 === "X" && _positions.position7 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position3 === "X" && _positions.position6 === "X" && _positions.position9 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }else if(_positions.position7 === "X" && _positions.position8 === "X" && _positions.position9 === "X"){
            winnerScreenX.style.display = "block"
            winCheck = true;
            programFinish = true;
        }
    }
        //checking Y positions for 3 in a row
    const ThreeInRowCheckO = () =>{
        if(_positions.position1 === "O" && _positions.position2 === "O" && _positions.position3 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if (_positions.position1 === "O" && _positions.position5 === "O" && _positions.position9 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position1 === "O" && _positions.position4 === "O" && _positions.position7 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position2 === "O" && _positions.position5 === "O" && _positions.position8 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position4 === "O" && _positions.position5 === "O" && _positions.position6 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position3 === "O" && _positions.position5 === "O" && _positions.position7 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position3 === "O" && _positions.position6 === "O" && _positions.position9 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }else if(_positions.position7 === "O" && _positions.position8 === "O" && _positions.position9 === "O"){
            winnerScreenO.style.display = "block";
            winCheck = true;
            programFinish = true;
        }
    }

    const tieCheck = () => {
        if(gameBoardFill === 9 && winCheck === false){          // check if gameboard is full, and no one has won
            tieScreen.style.display = "block";
        }
    }

    // public functions
    return {             
        storeValue,
        threeInRowCheckX,
        ThreeInRowCheckO,
        tieCheck,
    }

})()

const XO = (function (){        //changing between 'X' and 'O'
   
    let num = 0
    
        const printXO = () =>{
            num = num % 2 ;
            letter = "";
    
        if(num == 0){
                 letter = "X"
                 playerTurnX.className = "playerTurnXDull"
                 playerTurnO.className = "playerTurnO"            
        }else{
                letter = "O"
                playerTurnO.className = "playerTurnODull"
                playerTurnX.className = "playerTurnX" 
        }      
        num++
        return letter;
        }
        return {
            printXO,
        }
})()




block1.addEventListener("click", ()=> {
    if(block1.childElementCount === 0 && programFinish === false){   //checking for user placement of 'X' or 'O' and program finish so they cannot place piece once game is over.
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;                      
    block1.appendChild(text)
    gameBoard.storeValue("position1", letter)           //storing the position to private object.
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
})

block2.addEventListener("click", ()=> {
    if(block2.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block2.appendChild(text)
    gameBoard.storeValue("position2", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
})

block3.addEventListener("click", ()=> {
    if(block3.childElementCount === 0 && programFinish === false){
        XO.printXO();
        text = document.createElement("p")
        text.textContent = letter;
        block3.appendChild(text)
        gameBoard.storeValue("position3", letter)
        gameBoard.threeInRowCheckX();
        gameBoard.ThreeInRowCheckO();
        gameBoard.tieCheck();
    }
})

block4.addEventListener("click", ()=> {
    if(block4.childElementCount === 0 && programFinish === false){
        XO.printXO();
        text = document.createElement("p")
        text.textContent = letter;
        block4.appendChild(text) 
        gameBoard.storeValue("position4", letter)
        gameBoard.threeInRowCheckX();
        gameBoard.ThreeInRowCheckO();
        gameBoard.tieCheck();
    }  
})

block5.addEventListener("click", ()=> {
    if(block5.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block5.appendChild(text) 
    gameBoard.storeValue("position5", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
    
})

block6.addEventListener("click", ()=> {
    if(block6.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block6.appendChild(text)
    gameBoard.storeValue("position6", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
    
})

block7.addEventListener("click", ()=> {
    if(block7.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block7.appendChild(text)
    gameBoard.storeValue("position7", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
    
})

block8.addEventListener("click", ()=> {
    if(block8.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block8.appendChild(text)
    gameBoard.storeValue("position8", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }
    
})

block9.addEventListener("click", ()=> {
    if(block9.childElementCount === 0 && programFinish === false){
    XO.printXO();
    text = document.createElement("p")
    text.textContent = letter;
    block9.appendChild(text)
    gameBoard.storeValue("position9", letter)
    gameBoard.threeInRowCheckX();
    gameBoard.ThreeInRowCheckO();
    gameBoard.tieCheck();
    }  
})

restartBtn.addEventListener("click", () =>{             //lazy restart game funcition (reloads pages onced clicked)
    window.location.reload();
});



