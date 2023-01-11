// parâmetros

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

// function nomeIdade (nome, idade){
//     return `Meu nome é ${nome} e tenho ${idade} anos de idade.`
// }

//console.log (nomeIdade("Lucas", 21))

function soma (numero1, numero2){
    return numero1 + numero2;
}



function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                            // 9    
console.log(multiplica (soma(4, 5)))
