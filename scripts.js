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

function operate (a, b, func) {
  return func(a, b)
}

let displayValue = document.getElementById('display')
let displaySummary = document.getElementById('displaySummary')
let solution = document.getElementById('solution')

let list = document.getElementsByClassName('button-item');

//everytime the button is clicked, it will add that number to the displayValue
let firstNumber;
let secondNumber = "";
let operand;

for(let i=0; i < list.length; i++){
  list[i].addEventListener("click", function (event) {
    if (event.target ===  list[3] ||event.target === list[7] ||event.target === list[11] ||event.target === list[15]) {
      displaySummary.innerHTML = firstNumber
      displayValue.innerHTML = ""
      operand = event.target.innerHTML
      
            
    } else if (event.target === list[14]) {
      solution.innerHTML = parseInt(displaySummary.innerHTML) + parseInt(displayValue.innerHTML)
    } else {displayValue.innerHTML += event.target.innerHTML}
    firstNumber = displayValue.innerHTML 
      }
      )}
      
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