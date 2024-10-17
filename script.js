
const numberbtns = document.querySelectorAll(".numberbtn");
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operator");
const deletebtn = document.querySelector(".deletebtn");
const equalbtn = document.querySelector(".equalbtn");
const resetbtn = document.querySelector(".resetbtn");

let currentInput = " ";

//event for number btn
numberbtns.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.innerText);
        currentInput += item.innerText;
        screen.innerText = currentInput;

    })
})

//event for operators
operators.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.innerText);
        currentInput += item.innerText;
        screen.innerText = currentInput;

    })
})

//event for delete btn
deletebtn.addEventListener("click", () => {
    console.log("delete btn clicked");
    currentInput = currentInput.slice(0, -1); //erase the last index element
    if (screen.innerText === "") { //if screen is empty
        screen.innerText = "0";
    }
    else {
        screen.innerText = currentInput;
    }
})

//event for equal btn
equalbtn.addEventListener("click", () => {
    console.log("equal btn clicked");
    try {
        screen.innerText = eval(screen.innerText);
        isEvaluated = true;
        currentInput = screen.innerText;
    }
    catch (error) {
        screen.innerText = " ";
        currentInput = " ";

    }
})

//event for reset button 
resetbtn.addEventListener("click", () => {
    screen.innerText = " ";
    currentInput = " ";
})