const number = document.querySelector('p');
const decrease = document.getElementById('decrease');
const restart = document.getElementById('restart');
const increase = document.getElementById('increase');
let count = 0;

number.textContent = count;
decrease.addEventListener('click', function(){
    count--
    number.textContent = count;
})
restart.addEventListener('click', function(){
    count = 0;
    number.textContent = count;
})
increase.addEventListener('click', function(){
    count++
    number.textContent = count;
})