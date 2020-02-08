var scope = "globale";
var other = 5;
function f() {
    var scope;
    console.log(scope);
    console.log(other);
    scope = "locale";

    console.log(scope);
}
f();
