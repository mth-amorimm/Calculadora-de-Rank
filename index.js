ranque (50, 1);
var nivel = " ";


function ranque(vitorias, derrotas){
    saldo = vitorias-derrotas;
    return saldo;
}


if (saldo<10){
    nivel = "Ferro";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (10<saldo && saldo<21){
    nivel = "Bronze";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (20<saldo && saldo<51){
    nivel = "Prata";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (50<saldo && saldo<81){
    nivel = "Ouro";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (80<saldo && saldo<91){
    nivel = "Diamante";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (90<saldo && saldo<101){
    nivel = "Lendário";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
else if (saldo>=101){
    nivel = "Imortal";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}
