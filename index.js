let words       = ["A", "B", "C", "D", "E"];
let cpt         = 0;
let currentWord = words[cpt];

document.querySelector('button').addEventListener('click', () => display())
let div = document.querySelector('div');

display = () => {
    displayWord();
    changeBackground("red");
}

function changeBackground(color) {
    document.body.style.background = color;
}

displayWord = () => {
    div.innerHTML = currentWord;
}

changeCurrentWord = () => {
    currentWord = words[cpt];
    cpt++;
    if (cpt > 4) cpt = 0;
}

setInterval(function(){changeCurrentWord()}, 5000);
