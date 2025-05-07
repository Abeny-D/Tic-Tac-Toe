

const container = Array.from(document.querySelectorAll('.container .cell'));
let input_char = 'X';

container.forEach(div => {
    if (div) {
        div.addEventListener('click', (e) => {
            if (input_char === 'X' && div.innerHTML === '') {
                div.innerHTML = input_char;
                input_char = 'O';
                checkIfTheGameisOver();

            } else if (input_char === 'O' && div.innerHTML === '') {
                div.innerHTML = input_char;
                input_char = 'X';
                checkIfTheGameisOver();

            }

        });
    }
});


buttons = document.createElement('div');
buttons.className = 'Buttons';
document.body.appendChild(buttons);

oToStart = document.createElement('button');
oToStart.innerHTML = 'O to start the game';
buttons.appendChild(oToStart);
oToStart.addEventListener("click", () => {
    container.forEach(div => {
        div.innerHTML = '';
    })
    input_char = 'O';
});

newGame = document.createElement('button');
newGame.innerHTML = 'New Game';
buttons.appendChild(newGame);
newGame.addEventListener("click", () => {

    container.forEach(div => {
        div.innerHTML = '';
    })

});

xTostart = document.createElement('button');
xTostart.innerHTML = 'X to start the game';
buttons.appendChild(xTostart);
xTostart.addEventListener("click", () => {
    container.forEach(div => {
        div.innerHTML = '';
    })
    input_char = 'X';
});



checkIfTheGameisOver = () => {
    if (container[0].innerHTML === 'O' && container[1].innerHTML === 'O' && container[2].innerHTML === 'O' ||
        container[3].innerHTML === 'O' && container[4].innerHTML === 'O' && container[5].innerHTML === 'O' ||
        container[6].innerHTML === 'O' && container[7].innerHTML === 'O' && container[8].innerHTML === 'O' ||
        container[0].innerHTML === 'O' && container[3].innerHTML === 'O' && container[6].innerHTML === 'O' ||
        container[1].innerHTML === 'O' && container[4].innerHTML === 'O' && container[7].innerHTML === 'O' ||
        container[2].innerHTML === 'O' && container[5].innerHTML === 'O' && container[8].innerHTML === 'O' ||
        container[0].innerHTML === 'O' && container[4].innerHTML === 'O' && container[8].innerHTML === 'O' ||
        container[2].innerHTML === 'O' && container[4].innerHTML === 'O' && container[6].innerHTML === 'O'
    ) {
        alert("O wins the game!")
        container.forEach(div => {
            div.innerHTML = '';
        })

    } else if (container[0].innerHTML === 'X' && container[1].innerHTML === 'X' && container[2].innerHTML === 'X' ||
        container[3].innerHTML === 'X' && container[4].innerHTML === 'X' && container[5].innerHTML === 'X' ||
        container[6].innerHTML === 'X' && container[7].innerHTML === 'X' && container[8].innerHTML === 'X' ||
        container[0].innerHTML === 'X' && container[3].innerHTML === 'X' && container[6].innerHTML === 'X' ||
        container[1].innerHTML === 'X' && container[4].innerHTML === 'X' && container[7].innerHTML === 'X' ||
        container[2].innerHTML === 'X' && container[5].innerHTML === 'X' && container[8].innerHTML === 'X' ||
        container[0].innerHTML === 'X' && container[4].innerHTML === 'X' && container[8].innerHTML === 'X' ||
        container[2].innerHTML === 'X' && container[4].innerHTML === 'X' && container[6].innerHTML === 'X'
    ) {
        alert("X wins the game!")
        container.forEach(div => {
            div.innerHTML = '';
        })
    };

}