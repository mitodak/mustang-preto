//Cálcular valor da parcela SEM SEGURO

//Taxa do seguro = 0,038
// (credito + taxa) * 0,038
//
const credito  = 155000; // Crédito
const taxaAdm  = 24; // Taxa de Administração
const prazoGrp = 240; // Prazo do grupo
const percMens = 100 / prazoGrp;
const txSeguro = 0.038;
const percTaxa = taxaAdm / prazoGrp;
const percTotal= percMens + percTaxa;
const vlrParc  = credito * percTotal * 0.01;
const parcArred= parseFloat(vlrParc.toFixed(1));

//if (txSeguro = true) {
    //console.log("Sua cota contém seguro, portanto o valor da sua parcela é de:", )
//}
console.log("A taxa de adminstração é de", taxaAdm,"%.");
console.log("Sendo assim, o valor da parcela é de R$", parcArred,".");

