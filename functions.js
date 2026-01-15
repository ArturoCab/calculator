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

function operate(expresion){
    //TODO: will get the operator from the expresion and evaluate acordingly
    label.textContent="operating...";
    let operators="+-*/";
    label.textContent=eval(expresion);

}

function click(event){
    event.preventDefault();
    if(event.target.textContent=="=") {
        operate(label.textContent);
        return;
    }
    label.textContent+=event.target.textContent;
}

const label=document.querySelector("label");
//adding numbers to the calculator
var buttons=Array.from(document.querySelectorAll(".push"));
let btnText=["CE",..."0.123456789/*-+=".split("")]

console.log(btnText);
buttons.forEach((element,index) => {
    element.textContent=btnText[index];
    element.addEventListener("click",click);
    if(btnText[index]=="0"){
        element.setAttribute("id","zero");
        element.style.background="green";
        element.style.flexGrow="2";
    }
});

