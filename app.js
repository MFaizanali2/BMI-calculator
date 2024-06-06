
function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let first = document.getElementById("first");
    let total = weight / (height / 100 * height / 100);
    let round = total.toFixed(2);
    if(round === " "){
        first.innerText = "Please enter some value";
    }else{
        first.innerText = `Your Total BMI is = ${round}`;

    }
    
}