let a = 5 ;
let b = 9 ;
let c = -4 ;
let conjunto = [a,b,c] ;
// pesquei no mozilla
conjunto.sort(function(x,y) {
    return y-x;
}); 
console.log('o maior numero é '+conjunto[0]+' e o menor é '+conjunto[2])