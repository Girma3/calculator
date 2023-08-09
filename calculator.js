//functions to do basic maths
const sum = (a, b)=> {return a + b};
const substract = (a, b)=> {return a - b};
const multiply = (a, b)=> {return a * b};
const divide = (a,b )=> {return a / b};

//functions to use percent
const percent = (number)=> {return number / 100}   

//create 3 variables to calculate
let firstNum="";
let secondNum ="";
let currentOperator ="";
let results;


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
const populate = (item,displayArea)=>{ displayArea.textContent = item };

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
       
        if(currentOperator !== ""){
        //if the user chain oprators the current operator added on displayNext  with the first number for clarity
            
            secondNum += number.textContent;
            populate(secondNum,displayCurrent);
            populate(firstNum,displayNext);
            displayNext.textContent += currentOperator;
        }
        else{
            
            firstNum += number.textContent;
            populate(firstNum,displayCurrent);
        }

     });
});

operators.forEach(oprator=>{
    oprator.addEventListener('click',() => {
     
        //if operator clicked move first number to the above display and 
        //calculate result when second number entered and first number become result to chain operations
        
        if(secondNum !== ""){
        
           
            num1 = Number(firstNum);
            num2 = Number(secondNum);
            results = operate(num1,currentOperator,num2);
            firstNum = results;
            currentOperator = "";
            populate(firstNum,displayNext);
            displayCurrent.textContent = "";
            secondNum = ""; 
        }

        else if(displayNext.textContent !== ""){ 
            
            displayNext.textContent += currentOperator;
            console.log(displayNext.textContent)
            //currentOperator = "";
            //populate(displayCurrent.textContent,displayNext)
            currentOperator = "";
            
        }
     //we want the if else statment to be checked fisrst not to duplicate operator on display  
     currentOperator = oprator.textContent
    });
});

equal.addEventListener('click',() => {
//return if number or operator not entered
        if(firstNum == "" || secondNum == "" || customElements == ""){
            return displayCurrent.textContent = "Please,make  sure to enter two numbers and operator"
        }
        else{
            //convert string to number first
            num1 =Number(firstNum);
            num2 = Number(secondNum)
            results = operate(num1,currentOperator,num2)
            firstNum = results;
            populate(firstNum,displayNext);
            displayCurrent.textContent = "";
            secondNum = "";
        }
});

clearAll.addEventListener('click',() => {
    firstNum="";
    secondNum="";
    currentOperator="";
    displayCurrent.textContent =0;
    displayNext.textContent = 0;
});

backSpace.addEventListener('click',() => {
    //numbers are typed on display current so after checking if it is num1 or to num2 start remove the number
    if(secondNum !== ""){
        secondNum = displayCurrent.textContent.slice(0,-1);
        populate(secondNum,displayCurrent)
    }
    else{
        firstNum = displayCurrent.textContent.slice(0,-1);
        
        populate(firstNum,displayCurrent)
   // displayCurrent.textContent = re
    }
});

percents.addEventListener('click',() => {
    const percentage = (num) => {return num / 100}
    if(secondNum == ""){
        firstNum = percentage(firstNum);
        populate(firstNum,displayCurrent);
    }
    else{
       secondNum = percentage(secondNum);
       populate(secondNum,displayCurrent);
    }
});


