var obj = { a: 1 };
console.log(obj); // {a: 1}
var copie = Object.assign({}, obj);
console.log(copie); // {a: 1}



var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, l'objet cible est aussi modifié


var o1 = { a: 1, b: 1, c: 4 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({},o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
