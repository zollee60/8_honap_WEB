//Változók & típusok
let x = 10;
let name = "Márk";
let bool = true;

/* console.log("x értéke: " + x);
console.log("x típusa: " + typeof(x)); // - number
console.log("name értéke: " + name);
console.log("name típusa: " + typeof(name)); // - string
console.log("bool értéke: " + bool);
console.log("bool típusa: " + typeof(bool)); // - boolean

console.log(isNaN(x));
console.log(isNaN(name));
console.log(isNaN(bool)); */

// Vezérlési szerkezetek
// Elágazások

/* console.log(x === "10");

if(x === "10"){
    console.log("A nevem Márk");
}else if(name === "Márk"){
    console.log("A nevem tényleg Márk");
}else{
    console.log("A nevem NEM Márk");
} */

// Ciklusok
/* for(let i = 0; i < 10; i++){
    console.log(i);
}

let j = 0;
while(j < 10){
    console.log(j);
    j++;
}

j = 0;
do{
    j++;
    console.log(j);
}while(j < 10); */

// Tömbök (lista)
/* let lista = ["Márk",3, false];
// console.log(lista.length);
// console.log(lista[0]);

lista.push("Cili");
// console.log(lista.length);
// console.log(lista[3]);

lista[4] = "Máté";
// console.log(lista.length);
// console.log(lista[4]);

lista[10] = "WTF";
// console.log(lista.length);
// console.log(lista[7]);

lista.unshift("Első");
//console.log(lista[0]);

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
} */

// Objektumok
let obj = {
    name: "Márk",
    age: 109,
    sex: "male"
}

console.log(obj);
console.log(obj.name)

// Függvények
function összead(a,b){
    return a+b;
}

console.log(összeadB(5,6));





