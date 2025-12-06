//All the logic for Tic Tac Toe game
let cellElements = document.querySelectorAll('.cell');
let statusText = document.querySelector('#status');
let resetButton = document.querySelector('#reset-button');
let currentPlayer = 'X';
let turnCount = 0; 

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 

function handleCellClick(event) {
    const cell = event.target;
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        turnCount++;
        if (checkWin()) {
            
            statusText.textContent = `Player ${currentPlayer} wins!`;
            endGame();
        } else if (turnCount === 9) {
            
            statusText.textContent = "It's a draw!";
            endGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusText.textContent = `Player ${currentPlayer}'s turn`;
                  
        }
    }
}

function checkWin() {
    for (let condition of winningConditions) {
        let win = true;
        for (let index of condition) {
            if (cellElements[index].textContent !== currentPlayer) {
                win = false;
                break;
            }
        }
        if (win) {
            return true;
        }
    }
    return false;
    
}   

function endGame() {
    cellElements.forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    });
}

function resetGame() {
    cellElements.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick);
    });
    currentPlayer = 'X';
    turnCount = 0;
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    
}

cellElements.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
resetButton.addEventListener('click', resetGame);
statusText.textContent = `Player ${currentPlayer}'s turn`;  

