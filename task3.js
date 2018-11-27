/* абсолютная точность absolute accuracy - absAcc,
результат экспоненты - resultExp, номер члена ряда - i,
следующий член ряда - next, заданное значение x,

*/
var resultExp = 1;
var absAcc = 0.01;
var x = 1;
do {
    //введите точность absAcc
    //забрать значение absAcc
}
while (absAcc <= 0);    

for (var i=2, next = x; next > absAcc || next < -absAcc; i++){
    resultExp = resultExp + next;
    next = next * x/i;
}
//вывести результат экспоненты resultExp;
//погрешность next; 
//длинну членов ряда i;

console.info("result: " + resultExp);
console.info("infelicity: " + next);
console.info("length of members row: " + i);