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
}

function refreshCSS() {
  let links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('rel') == 'stylesheet') {
      let href = links[i].getAttribute('href').split('?')[0];
      // Append a unique query parameter (e.g., a timestamp) to the href
      let newHref = href + '?version=' + new Date().getTime();
      links[i].setAttribute('href', newHref);
    }
  }
}

//adding numbers to the calculator
var buttons=Array.from(document.querySelectorAll(".push"));
let btnText=["CE",..."/*-789+456123=0.".split("")]

console.log(btnText);
buttons.forEach((element,index) => {
    element.textContent=btnText[index];
    element.style.flexGrow="1";
    if(btnText[index]=="0"){
        element.setAttribute("id","zero");
        element.style.background="green";
        element.style.flexGrow="2";
    }
});

refreshCSS();