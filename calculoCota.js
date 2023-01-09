//Calculadora de Parcela - Imóveis

const credito     = 250000;                               // Crédito
const taxaAdm     = 24;                                   // Taxa de Administração
const prazoGrp    = 240;                                  // Prazo do grupo
const percMens    = 100 / prazoGrp;                       // Percentual mensal sem T.A.
const txSeguro    = 0.00038;                              // Percentual seguro
const flagSeguro  = false                                 // Define se a cota possui ou não seguro
const credComTA   = taxaAdm * 0.01 * credito + credito    // Define valor do crédito
const percTaxa    = taxaAdm / prazoGrp;                   // Percentual da Taxa de Administração
const percTotal   = percMens + percTaxa;                  // Percentual mensal com T.A.
const percComSeg  = credComTA * txSeguro;                 // Percentual mensal Seguro
const vlrParc     = credito * percTotal * 0.01;           // Valor da parcela sem seguro
const vlrParcSeg  = vlrParc + percComSeg;                 // Valor da parcela com seguro
const parcArred   = parseFloat(vlrParc.toFixed(2));       // Parcela formatada sem seguro
const parcArredSg = parseFloat(vlrParcSeg.toFixed(2));    // Parcela formatada com seguro

if (flagSeguro === true) {
    console.log(
`Sua cota possui seguro, através da categoria CRÉDITO + TAXA DE ADMINISTRAÇÃO.
Valor da parcel: R$${parcArredSg}`)
} else {
    console.log(`Sua cota não possui seguro. Valor da parcel: R$${parcArred}`)
}

