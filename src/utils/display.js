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
        }
    }
})()
