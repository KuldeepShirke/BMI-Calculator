let button = document.querySelector(".btn");

button.addEventListener('click',calculateBMI);

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = (weight / ((height /100)* (height / 100))).toFixed(2);
    let result = "your BMI  is: "+ bmi;
     
    if(bmi < 18.5){
        result += "(Underweight)";
     }else if (bmi >= 18.5 && bmi < 25){
        result += "(Normalweight)";
     }else if (bmi >= 25 && bmi < 30){
        result += "(Overweight)";
     }else if (bmi >= 30 && bmi < 40){
        result += "(obese)";
     }
     document.getElementById("result").innerText = result;
}
