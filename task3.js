var resultExp = 1;
var absAcc = document.getElementById('absAcc').value;
var x = 1;

function myCalc() {
    for (var i = 2, next = x; next > absAcc || next < -absAcc; i++) {
        resultExp = resultExp + next;
        next = next * x / i;   
    }
    document.getElementById("res1").innerHTML = "Результат экспоненты: " + resultExp;
}