function promNu(num1,num2){
    sumaProm = num1 + num2 ;
    promedio = sumaProm / 2 ;
    return promedio ;
} ;
num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese otro numero"));
alert("El promedio es de " + promNu(num1,num2));