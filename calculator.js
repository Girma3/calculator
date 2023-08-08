//functions to do basic maths
const sum = (a, b)=> {return a + b};
const substract = (a, b)=> {return a - b};
const multiply = (a, b)=> {return a * b};
const divide = (a,b )=> {return a / b};

//functions to use percent
const percent = (number)=> {return mnumber / 100}   

//create 3 variables to calculate
let firstNum;
let secondNum;
let currentOperator;

//function that take 2 numbers and operator then call one of the above functions
function operate(num1,operator,num2){
    let result;
        if(operator == "+"){
            result = sum(num1, num2)
        }
        else if(operator == "-"){
            result = substract(num1,num2)
        }
        else if(operator == "x"){
            result = multiply(num1,num2)
        }
        else if(operator == "÷"){
            result = divide(num1,num2)
        }
    return result
}

//function to populate display
const populate = (item)=>{return  this.textcontent += item}

const numbers = document.querySelectorAll("[data-number]"); 
const operators = document.querySelectorAll("[data-operator]");
const displayCurrent = document.getElementById("display-current");
const displayNext = document.getElementById("display-next");
const equal =document.getElementById("equals");
const clearAll = document.getElementById("clear");
const backSpace = document.getElementById("delete");
const percents = document.getElementById("percent"); 

//add eventListeners to the buttons to get user input
numbers.forEach(number=>{
    number.addEventListener('click',()=>{
        number.textContent
        
    });

});

operators.forEach(oprator=>{
    oprator.addEventListener('click',() => {

    });
});

equal.addEventListener('click',() => {
console.log("hoooo")
});

clearAll.addEventListener('click',() => {

});

backSpace.addEventListener('click',() => {

});

percents.addEventListener('click',() => {

});


