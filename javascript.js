const Gameboard = (function () {
    let gamePieces = ["", "", "", "", "", "", "", "", ""];

    const placePieces = () => {

        const boardDivisions = document.querySelectorAll(".boardDivisions");
        boardDivisions.forEach(boardDivision => boardDivision.addEventListener("click", () => {
            let nodeList = boardDivision.childNodes;
            for (let i = 0; i < nodeList.length; i++) {
                let array = nodeList[i].classList[0].split("_");
                gamePieces[+array[1]] = "O"
                boardDisplay.renderBoard();
            }
        }))
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
            boardTextDivisions.style.cssText = "margin-top: auto; margin-bottom: auto;";

            boardDivisions.appendChild(boardTextDivisions);
            gameboard.appendChild(boardDivisions);
        }
    }

    const renderBoard = () => {
        let gamePieces = Gameboard.gamePieces;
        for (let i = 0; i < gamePieces.length; i++) {
            let boardDivisions = document.querySelector(`.boardDivisions_${i}`);
            boardDivisions.innerHTML = `${gamePieces[i]}`
        }
    }

    return {
        createBoard,
        renderBoard
    }
}())

const Player = (playerName, AI, symbol) => {
    const shape = symbol;
    const name = playerName
    if (AI) {

    } else {

    }

    return { name, shape }
}

boardDisplay.createBoard(); // Change so created by button click
boardDisplay.renderBoard(); // Set so activated by clicking the square where the piece is placed 
Gameboard.placePieces();