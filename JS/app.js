console.log("Star Java Script Fizz Buzz");

const minInput = document.getElementById("minValue");
const maxInput = document.getElementById("maxValue");
const divEl = document.querySelector("#elements");

// Individual Buttons
// Listener Generate divs

const btnAll = document.getElementById("btn-generate");
btnAll.addEventListener("click", () => creatDivs(true, true, true, true));
const btnFizzBuzz = document.getElementById("btn-generatefizzbuzz");
btnFizzBuzz.addEventListener("click", () =>
  creatDivs(true, false, false, false)
);
const btnFizz = document.getElementById("btn-generatefizz");
btnFizz.addEventListener("click", () => creatDivs(false, false, true, false));
const btnBuzz = document.getElementById("btn-generatebuzz");
btnBuzz.addEventListener(
  "click",
  () => creatDivs(false, true, false, false),
  myFunction
);
const btnClearDivs = document.getElementById("btn-cleardivs");
btnClearDivs.addEventListener("click", onRemove);

//Funktion Creating fizz, buzz, fizzbuzz, num

function creatDivs(genFizzBuzz, genFizz, genBuzz, genNum) {
  onRemove();
  console.log("Div`s Created! WooHoo");
  for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");
    newDiv.appendChild(newPar);
    divEl.appendChild(newDiv).setAttribute("id", "div_" + i);
    if (i < minInput.value || i > maxInput.value) {
      newDiv.style = "display: none";
    } else {
      if (i % 3 === 0 && i % 5 === 0 && genFizzBuzz == true) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ BUZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fizbuz");
      } else if (i % 3 === 0 && genFizz == true) {
        newPar.appendChild(document.createTextNode(i + " = FIZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "fiz");
      } else if (i % 5 === 0 && genBuzz == true) {
        newPar.appendChild(document.createTextNode(i + " = BUZZ"));
        divEl.appendChild(newDiv).setAttribute("class", "buz");
      } else if (genNum === true) {
        newPar.appendChild(document.createTextNode(i));
        divEl.appendChild(newDiv).setAttribute("class", "num");
      } else {
        newDiv.style = "display: none"; //delite none divs
      }
    }
  }
}

//Clear divs by class name
function onRemove() {
  console.log("Divs Cleared! :)");
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
}

//Delite num class ?????????? HOW

function myFunction() {
  var element = document.getElementsByClassName("num");
  element.classList.remove("num");
}

function classDelite() {
  console.log("num Delited!");
  this.removeAttribute("num");
}

function main() {
  console.log("Starting Listeners");
}

main();
