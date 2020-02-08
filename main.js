let input  = document.getElementById("inp").value;
document.getElementById("sum").innerHTML = 0;

let plus = document.getElementById("plus")
let minus = document.getElementById("minus");

console.log(input)

function add() {
    if (plus.addEventListener("click")){
    sum = sum + input;
    }
    document.getElementById("sum")
        sum.textContent = sum;
    
}
function sub() {
    if (minus.addEventListener("click")){
    sum = sum - input;
    }
    document.getElementById("sum")
        sum.textContent = sum;
}


