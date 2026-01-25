function add(a,b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}


function click(event){
    event.preventDefault();
    if(event.target.textContent=="=") {
        operate(input.textContent);
        return;
    }
    input.textContent+=event.target.textContent;
}

function setCalc(event){
    event.preventDefault();
    let key=event.key;
    console.log(key);
    let numbers="0123456789/*-+.";
    let operators="/*-+";

    //making sure the key pressed was a number
    if(numbers.includes(key)){
        event.target.value+=key;
    }
    if(operators.includes(key)){
        calculatorObj.op=true;
        calculatorObj.operator=key;
    }

    //making sure the last symbol is legit
    if(key=="Enter"){
        calculatorObj.operate();
    }
}

//calculator as an object

const calculatorObj={
    ANS:0,
    operand1:"",
    operand2:"",
    operator:"",
    op:false,
    operate(){
        let operands=input.value.split(this.operator);
        operand1=operands[0];
        operand2=operands[1];
        console.log(this.operand1);
        console.log(this.operator);
        console.log(this.operand2);
        
    }
};

const input=document.querySelector("input");
input.addEventListener("keypress",setCalc);
//adding numbers to the calculator
var buttons=Array.from(document.querySelectorAll(".push"));
let btnText=["C",..."0.123456789/*-+=".split("")]

console.log(btnText);
buttons.forEach((element,index) => {
    element.textContent=btnText[index];
    element.addEventListener("click",click);
    
});

