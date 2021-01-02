function primo(numero){
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    return true;      
}
primos = 0;
for(let i = 0 ; primos <= 100 ; i++){
    let cond = primo(i);
    if(cond){
        primos++;
        console.log(primos + ' - ' + i + " es primo");
    }
}