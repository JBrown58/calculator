function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function noOperand (a) {
  return a;
}

function operate (a, b, func) {
  return func(a, b)
}

let displayValue = document.getElementById('display')
let solution = document.getElementById('solution')
let list = document.getElementsByClassName('button-item');

let firstNumber;
let secondNumber = "";
let operand;
let result;
 

for(let i=0; i < list.length; i++){
 list[i].addEventListener("click", function (event) {
  if (event.target ===  list[3] ||event.target === list[7] ||event.target === list[11] ||event.target === list[15]) {
    if (secondNumber === ""){}
    if (typeof operand !== "undefined") {
      secondNumber = displayValue.innerHTML
      displayValue.innerHTML = ''
      if (operand === "*") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), multiply )
        firstNumber = result
      } else if (operand === "-") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), subtract )
        firstNumber = result
      } else if (operand === "+") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), add )
        firstNumber = result
        } else if (operand === "/") {
          result = operate (parseInt(firstNumber), parseInt(secondNumber), divide  )
          firstNumber = result
        }
    }
    if (typeof firstNumber !== "undefined" && secondNumber === ''){
      secondNumber = displayValue.innerHTML
      displayValue.innerHTML = ''
      if (operand === "*") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), multiply )
      } else if (operand === "-") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), subtract )
      } else if (operand === "+") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), add )
        } else if (operand === "/") {
          result = operate (parseInt(firstNumber), parseInt(secondNumber), divide  )
        }
      firstNumber = result
      secondNumber = ""
      return;
    }
    operand = event.target.innerHTML
    if (typeof firstNumber !== "undefined" && secondNumber !== '' && typeof result !== "undefined"){
      return;
    }
    if(typeof firstNumber !== "undefined") {
      secondNumber = displayValue.innerHTML
      if (operand === "*") {
        operand = multiply
        } else if (operand === "-") {
        operand = subtract
        } else if (operand === "+") {
          result = operate (parseInt(firstNumber), parseInt(secondNumber), add )
          firstNumber = result
        } else if (operand === "/") {
        operand = divide
        }
      return;
    }
      firstNumber = displayValue.innerHTML
    displayValue.innerHTML = ""
     } else if (event.target === list[14]) {
      if (typeof operand === "undefined") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), operand )
        displayValue.innerHTML = result
          return;
      }  secondNumber = displayValue.innerHTML
      //result = operate (parseInt(firstNumber), parseInt(secondNumber), operand ) //calcsolution
      if (operand === "*") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), multiply )
      } else if (operand === "-") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), subtract )
      } else if (operand === "+") {
        result = operate (parseInt(firstNumber), parseInt(secondNumber), add )
        } else if (operand === "/") {
          result = operate (parseInt(firstNumber), parseInt(secondNumber), divide  )
        }
     displayValue.innerHTML = result
    } else {
      displayValue.innerHTML += event.target.innerHTML
      
      return;
      }
      if(typeof firstNumber !== "undefined") {
        if (event.target.innerHTML === "=") {
          firstNumber = result
          secondNumber = ""
          operand = ""
          return;
        }
        secondNumber = displayValue.innerHTML
      }
      /* if( secondNumber !== '' || typeof firstNumber !== "undefined") {
          if (operand === "*") {
          operand = multiply
          } else if (operand === "-") {
          operand = subtract
          } else if (operand === "+") {
          operand = add
          } else if (operand === "/") {
          operand = divide
          }
       result = operate (parseInt(firstNumber), parseInt(secondNumber), operand )
       result = display.innerHTML
      }

      if(typeof firstNumber !== "undefined" || secondNumber !== ''  ) {
        if(event.target ===  list[3] ||event.target === list[7] ||event.target === list[11] ||event.target === list[15]) {
         result = operate (parseInt(firstNumber), parseInt(secondNumber), operand )
        }
      }*/
        } 
        
      )
     
    }
      
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //function operate (firstNumber, )



//if the last event target was /-*+, set displayvlaue to ''



/*buttons.addEventListener("click", function(event) {
  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const buttonValue = button.innerText;
    const displayValue = display.innerText;







// When 1-9 are pressed, values will show in display
// when 1-9 buttons are pressed, event listener will store values in valueDisplay. valueDisplay will be shown in "id" div




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*function sum(...args) {
      let total = 0;
          for (let x of args) {
           total += x;
    }
    return total;
  }
  
  
  function diff(...args) {
      let total = 0;
          for (let x of args) {
           total -= x;
    }
    return total;
  }
  
  function prod(...args) {
      let total = 0;
          for (let x of args) {
           total *= x;
    }
    return total;
  }
  
  function quo(...args) {
      let total = args[0]/args[1];
      args.splice(0, 2);
  if (args.length > 0) { 
  for (let i = 0; i = args.length; i++) {
     total /= args[0];
     args.splice(0, 1);
  } 
     return total;
  }
  return total;
  }*/