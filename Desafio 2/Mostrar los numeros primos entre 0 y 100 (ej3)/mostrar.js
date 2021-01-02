function primo(numero){
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    return true;      
}
for(let i = 0 ; i < 100; i++){
    if(primo(i)){
        console.log( i + " es primo");
    }
}