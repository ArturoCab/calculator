function click(event){
    event.preventDefault();

    let key=event.target.textContent;
    if(key==="CA"){ //this is clear
        input.value="";
        return;
    }
    if(key==="=") {
        let result=calculatorObj.operate(input.value, calculatorObj.operator);
        input.value=result;
        return;
    }

    if("/*-+".includes(key)){
        calculatorObj.preResult(key);
        return;
    }
    if(calculatorObj.waitingForSecond){
        console.log("are we waiting? "+calculatorObj.waitingForSecond);
        input.value=key;
        calculatorObj.waitingForSecond=false;
        console.log("are we waiting? "+calculatorObj.waitingForSecond);
    }else{
        input.value+=key;
    }
}

function setCalc(event){
    event.preventDefault();
    let key=event.key;
    console.log(key);
    let numbers="0123456789.";
    let operators="/*-+";

    //making sure the key pressed was a number
    if(numbers.includes(key)){
        event.target.value+=key;
    }
    if(operators.includes(key)){
        calculatorObj.preResult(key);
    }

    //making sure the last symbol is legit
    if(key=="Enter"){
        let result=calculatorObj.operate(input.value, calculatorObj.operator);
        input.value=result;
    }
}

//calculator as an object

const calculatorObj={
    waitingForSecond:false,
    ANS:0,
    operator:"",
    add(a,b){return a+b;},
    substract(a, b){return a-b;},
    multiply(a,b){return a*b;},
    divide(a,b){return b===0?"Error":a/b;},
    preResult(op){
        this.ANS=Number(input.value);
        input.value=this.ANS;
        this.operator=op;
        this.waitingForSecond=true;
    },
    operate(value, op){
        value= Number(value);
        switch(op){
            case "+": return this.add(this.ANS,value);
            case "-": return this.substract(this.ANS,value);
            case "*": return this.multiply(this.ANS,value);
            case "/": return this.divide(this.ANS,value);
            default:  return "ERROR";
        }
    }
};

/**/


const input=document.querySelector("input");
input.addEventListener("keydown",setCalc);
//adding numbers to the calculator

var buttons=Array.from(document.querySelectorAll(".push"));
let btnText=["CA",..."/*-789456+1230.=".split("")]

console.log(btnText);
buttons.forEach((element,index) => {
    element.textContent=btnText[index];
    element.addEventListener("click",click);
    
});

const buttonMap={};

buttons.forEach(btn=>{
    buttonMap[btn.textContent]=btn;
})


document.addEventListener("keydown",(event)=>{
    let key=event.key;
    if(key==="Enter") key="=";
    if(key==="Backspace") key="CA";
    if(key==="Escape") key="CA"; 

    if(buttonMap[key]){
        buttonMap[key].click();
    }
});