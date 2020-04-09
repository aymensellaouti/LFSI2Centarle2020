const p = document.querySelector('p');

const color = document.querySelector('#color');

color.addEventListener('change', function (e) {
    p.style.color = color.value;
});
