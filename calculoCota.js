//Cálcular valor da parcela SEM SEGURO

const credito  = 200000; // Crédito
const taxaAdm  = 24; // Taxa de Administração
const prazoGrp = 240; // Prazo do grupo
const percMens = 100 / prazoGrp;
const percTaxa = taxaAdm / prazoGrp;
const percTotal= percMens + percTaxa;
const vlrParc  = credito * percTotal * 0.01;
const parcArred= parseFloat(vlrParc.toFixed(1));

console.log("A taxa de adminstração é de", taxaAdm,"%.");
console.log("Sendo assim, o valor da parcela é de R$", parcArred,".");

