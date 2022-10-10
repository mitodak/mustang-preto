const credito  = 100000;
const taxaAdm  = 24;
const prazoGrp = 240;
const percMens = credito / prazoGrp * 0.001;
const percTaxa = taxaAdm / prazoGrp;
const percTotal= percMens + percTaxa;
const vlrParc  = credito * percTotal * 0.01;
const parcArred= parseFloat(vlrParc.toFixed(1));

console.log("A taxa de adminstração é de", taxaAdm,"%.");
console.log("Sendo assim, o valor da parcela é de R$", parcArred,".");

