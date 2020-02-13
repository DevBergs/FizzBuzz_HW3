console.log("Star Java Script Fizz Buzz");

//izvilktie globalie no DOM
const minInput = document.getElementById("minValue");
const maxInput = document.getElementById("maxValue");
const divEl = document.querySelector("#elements");

// Listener Generate divs
const btnGenerate = document.getElementById("btn-generate");
btnGenerate.addEventListener("click", creatDivs);
//Listener clear divs
const btnClearDivs = document.getElementById("btn-cleardivs");
btnClearDivs.addEventListener("click", onRemove);
//Listeners Generate custom divs
const btnGenerateCustom = document.getElementById("btn-generatefizzbuzz");
btnGenerateCustom.addEventListener("click", createfizzbuzz);
//Listeners Generate
const btnFizz = document.getElementById("btn-generatefizz");
btnFizz.addEventListener("click", genfizz);

//Funktion Creating fizz, buzz, fizzbuzz, num
function creatDivs() {
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
  for (let i = 0; i <= 100; i++) {
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    newDiv.appendChild(newPar);
    divEl.appendChild(newDiv).setAttribute("id", "div_" + i);
    if (i < minInput.value || i > maxInput.value) {
      newDiv.style = "display: none";
    } else {
      if (i % 3 === 0 && i % 5 === 0) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ BUZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fizbuz");
      } else if (i % 3 === 0) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fiz");
      } else if (i % 5 === 0) {
        newPar.appendChild(document.createTextNode(i + " = BUZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "buz");
      } else {
        newPar.appendChild(document.createTextNode(i));
        divEl.appendChild(newDiv).setAttribute("class", "num");
      }
    }
  }
  console.log("Div`s Created! WooHoo");
}

//Creating only fizzbuzz
function createfizzbuzz() {
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
  for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    newDiv.appendChild(newPar);
    divEl.appendChild(newDiv).setAttribute("id", "div_" + i);
    if (i < minInput.value || i > maxInput.value) {
      newDiv.style = "display: none";
    } else {
      if (i % 3 === 0 && i % 5 === 0) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ BUZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fizbuz");
      }
    }
  }
  console.log("FizzBuzz! WooHoo");
}

//Creating only fizz
function genfizz() {
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
  for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    newDiv.appendChild(newPar);
    divEl.appendChild(newDiv).setAttribute("id", "div_" + i);
    if (i < minInput.value || i > maxInput.value) {
      newDiv.style = "display: none";
    } else {
      if (i % 3 === 0) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fiz");
      }
    }
  }
  console.log("FizzBuzz! WooHoo");
}

//Clear divs by class name
function onRemove() {
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
  console.log("Divs Cleared! :)");
}
