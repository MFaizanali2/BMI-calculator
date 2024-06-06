
function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let first = document.getElementById("first");
    let total = weight / (height / 100 * height / 100);
    let round = total.toFixed(2);
        first.innerText = `Your Total BMI is = ${round}`;
        if(total <= 25){
            document.getElementById("second").innerText = "you are underweight"
        } else if(total <= 29){
            document.getElementById("second").innerText = "you are healty weight"
        } else if(total >= 29){
            document.getElementById("second").innerText = "you are over weight"
        }

    
    
}