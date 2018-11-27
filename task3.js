/* абсолютная точность absolute accuracy - absAcc,
результат экспоненты - resultExp, номер члена ряда - i,
следующий член ряда - next, заданное значение x,

*/
var resultExp = 1;
var absAcc = 0.01;
do {
    //введите точность absAcc
    //забрать значение absAcc
}
while (absAcc <= 0);    

for (var i=2, next=x; next > absAcc || next < -eps; i++){
    resultExp = resultExp + next;
    next = next * x/i;
}
//вывести результат экспоненты resultExp;
//погрешность next;
//длинну членов ряда i;

console.info("result: " + resultExp);