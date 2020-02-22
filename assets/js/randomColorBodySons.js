function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

let body = document.querySelector('body');

let next = body.firstElementChild;

while(next) {
    newColor = getRandomColor();
    console.log(newColor);
    next.style.backgroundColor = newColor;
    next = next.nextElementSibling;
}
