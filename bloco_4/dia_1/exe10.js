let custo = 50;
let venda = 100;
let imposto = custo*0.2;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;
let milUnidade = lucro*1000;
let valor= ((custo > 0) && (imposto > 0)) && (venda > 0);
if(valor) {
    console.log('o lucro a cada mil unidade vendidas é: '+milUnidade);
} else {
    console.log('erro')
}