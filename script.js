// 🌟 Part 2: JavaScript Functions, Parameters, Return Values

// Function to double a number
function doubleNumber(num) {
  return num * 2; // Returning value
}

// Access input and display result
function calculateDouble() {
  let input = document.getElementById('inputNum').value;
  let number = parseFloat(input);
  
  if (!isNaN(number)) {
    let result = doubleNumber(number); // Function call with parameter
    document.getElementById('result').textContent = `Result: ${result}`;
  } else {
    document.getElementById('result').textContent = "Please enter a valid number.";
  }
}

// Demonstrating local vs global scope
let globalColor = "coral"; // Global variable

function changeBoxColor(color) {
  let box = document.getElementById('box');
  box.style.backgroundColor = color; // Local parameter used
}

// 🌟 Part 3: Combining CSS Animations with JS

document.getElementById("animateBtn").addEventListener("click", function () {
  let box = document.getElementById("box");
  box.classList.toggle("animate"); // Triggering CSS animation via class
  changeBoxColor(globalColor === "coral" ? "lightgreen" : "coral");
  globalColor = globalColor === "coral" ? "lightgreen" : "coral";
});

// Modal logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // Delay for animation
});
