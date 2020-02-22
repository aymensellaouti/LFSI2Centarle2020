/*
* 1- Sélectionner le ol
* 2- Séléctionner les li dans le ol
* 3-
* */

const ol = document.querySelector('#targetOl');
console.log(ol);
let li = ol.firstElementChild;
console.log(li);
let image = document.createElement('img');
image.src = 'assets/images/cv.gif';
image.height = 50;
image.width = 50;

idInterval= setInterval( () => {
//    newImage = image.cloneNode(true);
    li.appendChild(image);
    li = li.nextElementSibling;
    if (!li) {clearInterval(idInterval)}
},1500);

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

ol.addEventListener('click', function (e) {
    e.target.style.color = getRandomColor();
})

const mesA = document.querySelectorAll('a');
mesA.forEach(
    function (a) {
        a.addEventListener('click', function (e) {
            const response = confirm('Etes vous sur de vouloir sortir');
            if(response == false) {
                e.preventDefault();
            }
        });
    }
)
