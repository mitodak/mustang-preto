// let x = "";
// console.log(x);
// x = "oi";


// três formas de escrever funções

// 1 - DECLARAÇÃO DE FUNÇÃO

//1ª passo - declarar a função
                      //string
function imprimeTexto (texto) {
    console.log(texto)
} 

// 2º passo - executar a função (é possível executar a função 1 ou + vezes)

imprimeTexto("Olá mundo");
imprimeTexto("Bom dia");
imprimeTexto (soma())
// 2 - 

function soma (){
    return 2 + 2; // o return deve estar sempre na última linha do código
}

//console.log(soma())

