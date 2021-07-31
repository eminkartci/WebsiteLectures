

// Variables
let number1 = 123532;
let number2 = 245;

let sum = number1 + number2;
const eminem = 1345;

// Output
// console.log("Sum: ",sum)

// Functions
function sumFunc(num1,num2){
    let sum = Number(num1)+Number(num2);
    console.log("Sum: ",sum)
}

function mul(num1,num2){
    let Multiply = num1 * num2;
    console.log("Multiply: ",Multiply)
}

sumFunc(324,5321)
mul(325,734)

function sumButtonClicked(){

    let numberOne = document.getElementById("num1").value;
    let numberTwo = document.getElementById("num2").value;

    sumFunc(numberOne,numberTwo)    

}