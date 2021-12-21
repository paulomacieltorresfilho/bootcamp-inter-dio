var currentNumber = document.getElementById("currentNumber");
var subtractWrapper = document.getElementById('subtract');
var addWrapper = document.getElementById('add');

function decrement() {
    currentNumber.innerHTML = currentNumber.innerHTML >= -9 ? currentNumber.innerHTML - 1 : -10;
}

function increment() {
    currentNumber.innerHTML = currentNumber.innerHTML <= 9 ? parseInt(currentNumber.innerHTML) + 1 : 10;
}

function changeColor() {
    currentNumber.style.color = currentNumber.innerHTML < 0 ? 'red' : 'black';
}

addWrapper.addEventListener("click", function() {
    increment();
    changeColor();
})

subtractWrapper.addEventListener("click", function() {
    decrement();
    changeColor();
})