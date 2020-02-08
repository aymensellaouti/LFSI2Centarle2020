
function jeu(
    nbTentative = 3,
    bsup = 20
) {
    let resultat = false;
    let x = Math.random() * (bsup + 1);
    let nbMagique = Math.floor(x);
    alert(nbMagique);
    alert(`Bienvenu à notre jeu vous avez ${nbTentative} tentatives pour trouver le nombre magique`);
    const message = `veuillez donner un chiffre entre 1 et ${bsup}`;
    while( nbTentative && !resultat ) {
        tentative = prompt(message);
        if(+tentative === nbMagique) {
            alert(`bien joué vous avez réussi et il vous reste ${nbTentative - 1} tenative`);
            resultat = true;
        } else {
            alert(`désolé c'est faux il vous reste ${--nbTentative} tentatives`);
        }
    }
    if(!resultat) {
        alert(`désolé vous n'avez trouvé le nombre magique. le nombre est : ${nbMagique}`);
    }
}
jouer = true;
while(jouer) {
    jeu();
    jouer  = confirm('Voulez vous rejouer');
}
