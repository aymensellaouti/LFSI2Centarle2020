// var tableau = [
//     "1", 23, function () {} , new Date()
// ];
//
// tableau.forEach(function (currentValue, indice, table) {
//     console.log(`tab[${indice}] = ${currentValue}`);
// })

var tab1=[1,2,3];
var tab2 = [4,5,6];
var tab3 = tab1.concat(tab2);
console.log(tab3);
function compare(a,b) {
    return a-b ;
}
tab4 = [1,2,4,11,21,3,31];
console.log(tab4.sort(compare));
