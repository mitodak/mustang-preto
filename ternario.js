const idadeMinima = 18;
const idadeCliente = 19;

//if (idadeCliente >= idadeMinima) {
//    console.log("cerveja")
//} else {
//    console.log("suco")
//}

            //condição                    //true     //false
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

// Operador ternário + template string

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

// const nomeCliente = "Ulisses"
// const grupo = 770
// const cota = 132
// const mensagem = `Olá, ${nomeCliente}, estamos entrando em contato para falar sobre 
// a contemplação da cota ${cota}, grupo ${grupo}.`

// console.log(mensagem)