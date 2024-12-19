
const increaseBtn = document.getElementById('increment');
const decreaseBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const countBtn = document.getElementById('counter');

let count = 0;

increaseBtn.onclick = function() {
    count++;
    countBtn.textContent = count;
}

decreaseBtn.onclick = function() {
    if (count > 0) {
        count--;
        countBtn.textContent = count;
    }
}

resetBtn.onclick = function() {
    count = 0;
    countBtn.textContent = count;
}