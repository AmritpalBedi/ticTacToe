const Gameboard = (function () {
    let gamePieces = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const counter = [];
    const placePieces = () => {
        const boardDivisions = document.querySelectorAll(".boardDivisions");
        boardDivisions.forEach(boardDivision => boardDivision.addEventListener("click", () => {
            let nodeList = boardDivision.childNodes;
            for (let i = 0; i < nodeList.length; i++) {
                const position = +nodeList[i].classList[0].split("_")[1];
                const columnPosition = position % 3;
                let row;
                if (position < 3) {
                    row = 0
                } else if (position > 2 && position < 6) {
                    row = 1
                } else {
                    row = 2
                }
                if (position < 3) {
                    if (gamePieces[row][columnPosition] == "") {
                        if (counter.length % 2 == 0) {
                            gamePieces[row][columnPosition] = "O"
                        } else {
                            gamePieces[row][columnPosition] = "X"
                        }
                        counter.push(null);
                    }
                } else if (position > 2 && position < 6) {
                    if (gamePieces[row][columnPosition] == "") {
                        if (counter.length % 2 == 0) {
                            gamePieces[row][columnPosition] = "O"
                        } else {
                            gamePieces[row][columnPosition] = "X"
                        }
                        counter.push(null);
                    }
                } else {
                    if (gamePieces[row][columnPosition] == "") {
                        if (counter.length % 2 == 0) {
                            gamePieces[row][columnPosition] = "O"
                        } else {
                            gamePieces[row][columnPosition] = "X"
                        }
                        counter.push(null);
                    }
                }
                boardDisplay.renderBoard();
                gameOver();
            }
        }))
    }

    const gameOver = () => {
        let gameWinner = false;
        let gameTie = false;
        const allEqual = array => array.every(val => val === array[0]);

        checkHorizontal();
        checkVertical();
        checkDiagonalTop();
        checkDiagonalBottom();
        if (gameWinner) {
            alert("You Win!")
            //location.reload();
        } else {
            checkTie();
            if (gameTie) {
                alert("You Tie!")
            }
        }

        function checkHorizontal() {
            for (let i = 0; i < gamePieces.length; i++) {
                const row = [];
                for (let j = 0; j < gamePieces[i].length; j++) {
                    row.push(gamePieces[i][j]);
                }
                if (allEqual(row) && gamePieces[i][0] != "") {
                    gameWinner = true;
                }
            }
        }

        function checkVertical() {
            for (let i = 0; i < gamePieces.length; i++) {
                const row = [];
                for (let j = 0; j < gamePieces[i].length; j++) {
                    row.push(gamePieces[j][i]);
                }
                if (allEqual(row) && gamePieces[0][i] != "") {
                    gameWinner = true;
                }
            }
        }

        function checkDiagonalTop() {
            const row = [];
            let checkRow = true;
            for (let i = 0; i < gamePieces.length; i++) {
                row.push(gamePieces[i][i]);
            }
            for (let i = 0; i < row.length; i++) {
                if (row[i] == "") {
                    checkRow = false;
                }
            }
            if (allEqual(row) && checkRow) {
                gameWinner = true;
            }
        }

        function checkDiagonalBottom() {
            const row = [];
            let checkRow = true;
            for (let i = 2; i >= 0; i--) {
                row.push(gamePieces[row.length][i]);

            }
            for (let i = 0; i < row.length; i++) {
                if (row[i] == "") {
                    checkRow = false;
                }
            }

            if (allEqual(row) && checkRow) {
                gameWinner = true;
            }
        }

        function checkTie() {
            let fullBoard = true;
            for (let i = 0; i < gamePieces.length; i++) {
                for (let j = 0; j < gamePieces[i].length; j++) {
                    if (gamePieces[i][j] == "") {
                        fullBoard = false;
                    }
                }
            }
            if (fullBoard) {
                gameTie = true;
            }
        }
    }

    return {
        gamePieces,
        placePieces,
    };
}());

const boardDisplay = (function () {
    const createBoard = () => {
        const gameboard = document.querySelector(".gameboard");

        for (let i = 0; i < 9; i++) {
            const boardDivisions = document.createElement("div");
            boardDivisions.classList.add(`boardDivisions`);

            const boardTextDivisions = document.createElement("div");
            boardTextDivisions.classList.add(`boardDivisions_${i}`);
            //boardTextDivisions.style.cssText = "margin-top: auto; margin-bottom: auto;";

            boardDivisions.appendChild(boardTextDivisions);
            gameboard.appendChild(boardDivisions);
        }
    }

    const renderBoard = () => {
        const gamePieces = Gameboard.gamePieces;
        const numOfDivisions = +gamePieces.length * +gamePieces[0].length;
        for (let i = 0; i < numOfDivisions; i++) {
            let boardDivisions = document.querySelector(`.boardDivisions_${i}`);
            if (i < 3) {
                boardDivisions.innerHTML = `${gamePieces[0][i]}`;
            } else if (i > 2 && i < 6) {
                boardDivisions.innerHTML = `${gamePieces[1][i % 3]}`;
            } else {
                boardDivisions.innerHTML = `${gamePieces[2][i % 3]}`;
            }
        }
    }

    return {
        createBoard,
        renderBoard
    }
}())

const Player = (playerName, symbol) => {
    const shape = symbol;
    const name = playerName
    if (AI) {

    } else {

    }

    return {
        name,
        shape,
    }
}

const Game = (function () {
    const startGame = () => {
        const containter = document.querySelector(".container");
        containter.innerHTML = "";

        const resetButton = document.createElement("button");
        resetButton.classList.add("reset");
        resetButton.innerHTML = "RESET";

        const gameBoard = document.createElement("div");
        gameBoard.classList.add("gameboard");
        containter.appendChild(resetButton);
        containter.appendChild(gameBoard);
        
    }

    startGame();
    // Change so created by button click
    boardDisplay.createBoard();

    // Set so activated by clicking the square where the piece is placed 
    boardDisplay.renderBoard();

    Gameboard.placePieces();
}())