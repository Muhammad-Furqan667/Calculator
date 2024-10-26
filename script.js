"use stict";

const cba = document.querySelectorAll(".c");
const sign = document.querySelectorAll(".sign")
const equal = document.querySelector(".equal");
const del = document.querySelector('.delete');
const showResult = document.querySelector('.show');
const reset = document.querySelector('.reset');
const perc = document.querySelector('.perc');

//Starting
let clickCount = true;
let show = true;
let nu = [];
let num = [];
let num1, num2, operator, result;

//Convert array into string
const spli = (numbr => numbr.toString().split(',').join(''));

//NUmber 
const umber = function(){
    for(let i = 0; i < cba.length; i++){
    cba[i].addEventListener("click", function () {
        if (clickCount) {
                nu.push(cba[i].textContent);
                showResult.textContent = spli(nu);
        } else {
            num1 = Number(spli(nu));
            num.push(cba[i].textContent);
            showResult.textContent = spli(num);
        }
    })
}};
umber();

//DEleting number
const delet = function() {
    del.addEventListener('click', function(){
        if(show){
        if(clickCount){
        nu.pop();
        showResult.textContent = spli(nu);
        }else if(!clickCount){
            num.pop();
            showResult.textContent = spli(num);
        }}
    })
};
delet();

//Operation/Sign
for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener("click", function () {
        show = true;
        if(nu != '' && num != ''){
            answer();
        }
        operator = sign[i].textContent;
        showResult.textContent = operator;
        clickCount = false;
    })
};

//Answer
const answer = function(){
    num2 = Number(spli(num));
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "%":
            result = num1 / 100;
            break;            
    }
    nu = [];
    num = [];
    nu.push(result);
};

//Equalto button
equal.addEventListener("click", function(){
    show = false;
    answer();
    showResult.textContent = result;
});

//Reset
const restart = function(){
    reset.addEventListener('click', function(){
    nu = [];
    num = [];
    showResult.textContent = '';
    clickCount = true;
    show = true;
})
};
restart();

