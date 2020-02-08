
villes = ['Tunis', 'Sousse', 'Sfax', 'Djerba'];

let listeVilles = document.querySelector('#listeVilles');
i = 0;

indiceInterval = setInterval(
    function () {
        listeVilles.innerHTML+= `<li>${villes[i]}</li>`;
        i++;
        if(i === villes.length) {
            clearInterval(indiceInterval);
        }
    }, 2000
);
