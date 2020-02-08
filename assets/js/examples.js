// // setTimeout(
// //     function () {
// //         console.log('Me voici');
// //     },3000
// // );
// // console.log('test');
// i = 5;
// x = setInterval(
//     function () {
//         console.log(i);
//         i--;
//         if (i == 0) clearInterval(x);
//     },1000
// );

function occ(s, inside) {
    pos = 0;
    while( pos != -1) {
        pos = s.indexOf(inside, pos);
        if (pos != -1) {
            console.log(pos);
            pos++;
        }
    }

}

occ("Bonjour", "o");
