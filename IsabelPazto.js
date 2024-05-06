//BOLEANOS---------------------------------------------------------------------------------
//orden de precedencia
let protectorSolar= 26.99;
let enterogermina= 15.40;
let total= protectorSolar + 3 * enterogermina;
console.log(total);

//falsy y truthy
//falsy: false, 0, undefined, null, NaN, ""
//truthy: cualquier valor diferente a los anteriores
let carrito;
if(carrito){
    console.log("El carrito tiene productos");
}
else{
    console.log("El carrito esta vacio");
}
//igualdad estricta
let serumHyaluron= 5;
let serumVitaminaC= "5";
console.log(serumHyaluron === serumVitaminaC);
console.log(serumHyaluron == serumVitaminaC);
//operador ternario
let eucerinAntipigment= 49.86;
let eucerinHialuron= 39.99;
let precioMenor= eucerinAntipigment < eucerinHialuron ? 
"El eucerin antipigment es mas barato" : "El eucerin hialuron es mas barato";
console.log(precioMenor);

let precioMayor= eucerinAntipigment > eucerinHialuron ? 
"El eucerin antipigment es mas caro" : "El eucerin hialuron es mas caro";
console.log(precioMayor);



//tipos de operadores
//1. operadores de asignacion
let pruebaDeEmbarazo = true;
//2. operadores de comparacion
let toallasFemeninas = 3;
let tampones = 3;
console.log(toallasFemeninas == tampones);
//3. operadores aritmeticos
let acondicionador = 13.45;
let mascarrilla = 10.45;
let totalCompra = acondicionador + mascarrilla;
console.log(totalCompra);
//4. operador bit a bit
let AlgodonDesmaquillante = 4.38;
let desmaquillantes = 7.85;
let totalDesmaquillante = AlgodonDesmaquillante & desmaquillantes;
console.log(totalDesmaquillante);
//5. operadores logicos
let perfilador = true;
let labial = false;
let totalMaquillaje = perfilador && labial;
console.log(totalMaquillaje);
//6. operadores de cadena
let brocha = "Brocha de maquillaje";
let esponja = "Esponja de maquillaje";
let totalBrocha = brocha + esponja;
console.log(totalBrocha);
//7. operadores condicionales (ternario)
let singripal = 5.99;
let ibuprofeno = 3.99;
let totalMedicamentos = singripal < ibuprofeno ? "El singripal es mas barato" : "El ibuprofeno es mas barato";
console.log(totalMedicamentos);
//8. Operador coma
let cremas=["Crema de manos", "Crema de pies", "Crema corporal", "Crema facial"];
let pastillas = ["Pastillas para el dolor", "Pastillas para la tos", "Pastillas para la fiebre", "Pastillas para la gripe"];
for(let i=0, j=0; i<cremas.length, j<pastillas.length; i++, j++){
    console.log(`cremas = ${i}, pastillas = ${j}`);
}


//9. Operadores unarios
let desodorante = 3.99;
let totalDesodorante = -desodorante;
// Operador de negación unaria (-)
console.log(-desodorante); 
// Operador de suma unaria (+)
console.log(+desodorante);
// Operador de incremento unario (++)
console.log(++desodorante);
// Operador de decremento unario (--)
console.log(--desodorante); 
// Operador typeof
console.log(typeof desodorante);


//10. Operadores relacionales
let shampoo = 5.99;
let acondicionadores = 5.99;
// Operador mayor que (>)
console.log(shampoo > acondicionadores); 

// Operador menor que (<)
console.log(shampoo < acondicionadores);  

// Operador mayor o igual que (>=)
console.log(shampoo >= acondicionadores); 

// Operador menor o igual que (<=)
console.log(shampoo <= acondicionadores); 

// Operador igual que (==)
console.log(shampoo == acondicionadores); 

// Operador no igual que (!=)
console.log(shampoo != acondicionadores); 

// Operador idéntico que (===)
console.log(shampoo === acondicionadores); 

// Operador no idéntico que (!==)
console.log(shampoo !== acondicionadores); 



//CONDICIONALES---------------------------------------------------------------------------------
//Simple
let solarSunFresh = 29.99;
let solarSunFresh2 = 29.99;
if(solarSunFresh === solarSunFresh2){
    console.log("Son iguales");
}

//Doble
let serumEfffaclar = 45.99;
let gelLimpiador = 45.99;
if(serumEfffaclar === gelLimpiador){
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

//Anidado
let cremaManos = 4.99;
let mascarrillaCapilar = 4.99;
let locionManos = 6.46;
if(cremaManos === mascarrillaCapilar){
    console.log("Son iguales");
    if(cremaManos === locionManos){
        console.log("Son iguales");
    }
}

//Multiple
let redoxon = 13.49;
let vitaminaC = 10.29;
if(redoxon === vitaminaC){
    console.log("Son iguales");
}
else if(redoxon < vitaminaC){
    console.log("Redoxon es mas barato");
}
else{
    console.log("Vitamina C es mas barato");
}

//BUCLES---------------------------------------------------------------------------------
//for
let vitaminas = ["Dayamineral", "TripleOmega", "VitaminaE", "GoodyVitamins"];
for(let i=0; i<vitaminas.length; i++){
    console.log(vitaminas[i]);
}

//while
let proteina = ["WheyProtein", "ProteinaVegetal", "ProteinaDeSuero"];
let i=0;
while(i<proteina.length){
    console.log(proteina[i]);
    i++;
}

//do while
let minerales = ["Calcio", "Hierro", "Zinc", "Magnesio"];
let j=0;
do{
    console.log(minerales[j]);
    j++;
}
while(j<minerales.length);

//for of
let aminoacidos = ["BCAA", "Glutamina", "Arginina", "Carnitina"];
for(let aminoacido of aminoacidos){
    console.log(aminoacido);
}

//for in;
let bebes = {
    producto: "Toallita humeda",
    precio: 2.99,
    marca: "Huggies",
    cantidad: 50
};
for(let bebe in bebes){
    console.log(bebes[bebe]);
}

//for each
let perro = ["Croquetas", "Correa", "Juguete", "Cama"];
perro.forEach(function(perro){
    console.log(perro);
});

//map
let cuidadoPersonal = ["Perfume", "Desodorante", "Crema", "Shampoo"];
let nuevoCuidadoPersonal = cuidadoPersonal.map(function(cuidadoPersonal){
    return cuidadoPersonal;
});
console.log(nuevoCuidadoPersonal);

