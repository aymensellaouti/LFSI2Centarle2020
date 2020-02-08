
var paras = document.querySelectorAll('p');
changeClass(paras[0], 'est', 'ca');
changeClass(paras[1], 'ess', 'css', 1500);

function changeClass(element, classe1, classe2, timer = 2000) {
    if(!element.classList.contains(classe1))
        element.classList.add(classe1);
    setInterval(
        function () {
            element.classList.toggle(classe1);
            element.classList.toggle(classe2);
        }, timer
    );
}
