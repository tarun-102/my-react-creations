function Cleardisplay() {
    document.querySelector(".display").value = "0";
}

function appendnumber(number) {
    const display = document.querySelector('.display');
    if (display.value === '0') {
        display.value = number; 
    } else {
        display.value += number; 
    }

}

function delet() {
    const display = document.querySelector('.display')
    display.value = display.value.slice(0, -1);
}

function appendoprator (operator) {
    const display = document.querySelector('.display');
    if (display.value === '0') {
        display.value = operator; 
    } else {
        display.value += operator; 
    }
}

function calculate() {
    let display = document.querySelector('.display');
     try{
         display.value = eval(display.value);
     }catch(e){
         display.value = 'Error';
     }
 }