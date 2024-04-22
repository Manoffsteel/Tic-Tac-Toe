document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    let newGameButton = document.querySelector(".new");

    let currentPlayer = "X";
    let moves = 0;
    let gameEnded = false;

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function checkWinner() {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                boxes[a].innerText !== "" &&
                boxes[a].innerText === boxes[b].innerText &&
                boxes[a].innerText === boxes[c].innerText
            ) {
                return boxes[a].innerText;
            }
        }
        return null;
    }

    function resetGame() {
        boxes.forEach(box => {
            box.innerText = "";
            box.disabled = false;
        });
        currentPlayer = "X";
        moves = 0;
        gameEnded = false;
    }

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            if (!gameEnded && box.innerText === "") {
                box.innerText = currentPlayer;
                moves++;
                let winner = checkWinner();
                if (winner) {
                    alert(`Player ${winner} wins!`);
                    gameEnded = true;
                } else if (moves === 9) {
                    alert("It's a draw!");
                    gameEnded = true;
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    newGameButton.addEventListener("click", resetGame);
});
