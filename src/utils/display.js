import { gameStore } from "./gameStore.js";
export const display = (() => {
    let messageBox = document.querySelector('.message-box');
    let humanMode = document.querySelector('.human-mode');
    let computerMode = document.querySelector('.computer-mode');
    return {
        humanMode: function () {
            humanMode.style.background = 'linear-gradient(to right, rgb(19, 19, 54), rgb(2, 25, 236))';
            computerMode.style.background = 'linear-gradient(to right, rgba(58, 58, 153, 0.8), rgba(2, 178, 236, 0.8))';
        },
        computerMode: function () {
            computerMode.style.background = 'linear-gradient(to right, rgb(19, 19, 54), rgb(2, 25, 236))';
            humanMode.style.background = 'linear-gradient(to right, rgba(58, 58, 153, 1), rgba(2, 178, 236, 1))';
        },
        popUpMode: function (str) {
            document.querySelector('.message-text').innerHTML = str;
            document.querySelector('.overlay').style.display = 'block';
            messageBox.style.display = 'flex';
        },
        noPopUpMode: function () {
            document.querySelector('.overlay').style.display = 'none';
            messageBox.style.display = 'none';
        },
        resetGame: function () {
            document.querySelector('.overlay').style.display = 'none';
            messageBox.style.display = 'none';
            let space = document.querySelectorAll('.space');
            space.forEach(element => {
                element.innerHTML = ''
            })
        },
        resetGameCM: function () {
            document.querySelector('.overlay').style.display = 'none';
            messageBox.style.display = 'none';
            let miniSpace = document.querySelectorAll('.mini-space');
            miniSpace.forEach(element => {
                element.innerHTML = '';
            })
        },
        applyMode: function (bool) {
            if (bool) {
                display.humanMode();
            } else {
                display.computerMode();
            }
        },
        handleComplexMode: function () {
            if (gameStore.getComplexMode() === false) {
                document.querySelector('.complex-mode').textContent = 'Complex Mode';
                if (gameStore.getBoardAltered()) {
                    gameStore.setBoardAltered(false);
                } else return;
                let container = document.querySelector('.container');
                let space = document.querySelectorAll('.wrapper > .space');

                container.classList.remove('complex');
                const data = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];
                space.forEach((element, index) => {
                    element.classList.remove('miniBoard');
                    element.innerHTML = '';
                    element.id = data[index]; 
                });
                return;
            } else {
                document.querySelector('.complex-mode').textContent = 'Classic Mode';
                if (!gameStore.getBoardAltered()) {
                    gameStore.setBoardAltered(true);
                } else return;
                const miniBoardTemplate = `
                    <div class="mini-container">
                        <div class="mini-wrapper mw1">
                            <div class="space mini-space" id="00"></div>
                            <div class="space mini-space" id="01"></div>
                            <div class="space mini-space" id="02"></div>
                        </div>
                        <div class="mini-wrapper mw2">
                            <div class="space mini-space" id="10"></div>
                            <div class="space mini-space" id="11"></div>
                            <div class="space mini-space" id="12"></div>
                        </div>
                        <div class="mini-wrapper mw3">
                            <div class="space mini-space" id="20"></div>
                            <div class="space mini-space" id="21"></div>
                            <div class="space mini-space" id="22"></div>
                        </div>
                    </div>`
                    ;
                let container = document.querySelector('.container');
                container.classList.add('complex');
                let space = document.querySelectorAll('.space');
                space.forEach((element, index) => {
                    // element.style.width = '180px';
                    // element.style.height = '180px';
                    element.classList.add('miniBoard');
                    element.id = index;
                    element.innerHTML = miniBoardTemplate;
                });
            }
        }
    }
})()
