let queen = [3,4];
let enemy = [5,5];
let sameColum = (queen[0]===enemy[0])||(queen[1]===enemy[1]);
let diagonal = ((queen[0] - enemy[0]) == 0)&&((queen[1]-enemy[1])==0);
if(sameColum || diagonal) {
    console.log('xablau');
} else {
    console.log('sem xablau')
}