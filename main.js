// objeto, arreglo y funciones de prueba
const user = [
    { 
        name: 'Axl Rose', 
        instrument: 'vocals' 
    },
    { 
        name: 'Slash', 
        instrument: 'guitar' 
    },
    { 
        name: 'Izzy Stradlin', 
        instrument: 'guitar' 
    }
]

const ar = [2, 4, 6, 8];

function dato(e){
    return e * 2;
}

function dato2(e){
    return e > 2;
}

function dato3(e){
    return e = 8;
}

function dato4(e){
    e = [4, 8];
    return e;
}

function dato5(e) {
    return e = 'name';
}

// map devuelve un nuevo arreglo
function vaneMap (array, callback) {
    let arr = [];
    for(let i=0; i < array.length; i++) {   
        arr.push(callback(array[i]));                    
    } 
    document.getElementById('resultado').innerHTML += `${arr}<br>`;
    return arr;
}
console.log(vaneMap(ar, dato));

//find devuelve el primer elemento que cumple la función
function vaneFind (array, callback) {
    let arr = [];
    for(let i=0; i < array.length; i++) {         
        if(callback(array[i]) === true){
            arr.push(array[i]); 
        }                           
    } 
    document.getElementById('resultado').innerHTML += `${arr}<br>`;
    return arr;
}
console.log(vaneFind(ar, dato2));

//findIndex devuelve el Indice del arreglo
function vaneFindIndex (array, callback) {
    let arr = 0
    for(let i=0; i < array.length; i++) {  
        arr = array.indexOf(callback(array[i]));                                    
    } 
    document.getElementById('resultado').innerHTML += `${arr}<br>`;
    return arr;
}
console.log(vaneFindIndex(ar, dato3));

//Contains devuelve verdadero o falso si un elemento esta en la lista
function vaneContains (array, callback) {
    let arr = '';
    for(let i=0; i < array.length; i++) {  
        arr = array.includes(callback(array[i]));                                    
    } 
    document.getElementById('resultado').innerHTML += `${arr}<br>`;
    return arr;
}
console.log(vaneContains(ar, dato3));

//pluck devuelve un array con los elementos que contiene un key
function vanePluck(array, key) {
    let arr = [];
    for(let i=0; i < array.length; i++) {        
        arr.push(array[i][key]);        
    } 
    document.getElementById('resultado').innerHTML += `${arr}<br>`;
    return arr;
}
console.log(vanePluck(user, dato5()));

//without elimina elementos de x cantidad quedando el arreglo con los elementos no eliminados
function vaneWithout (array, callback) {
    let newArray = [];
    newArray = Array.from(array);
    let numero = callback;
    for(let i=0; i<numero.length; i++){  
        let num = numero[i];
        let num2= newArray.indexOf(num);
        let aux = newArray.splice(num2, 1);
    }
    document.getElementById('resultado').innerHTML += `<p>arreglo antiguo: ${array}</p><br>`;
    document.getElementById('resultado').innerHTML += `<p>arreglo nuevo: ${newArray}</p><br>`;
    return newArray;
}
console.log(vaneWithout(ar, dato4()));
