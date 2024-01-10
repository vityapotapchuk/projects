const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');

let counter = 0;
counterNode.innerText = counter;

incBtnNode.addEventListener('click', () => {
    counter++;
    counterNode.innerText = counter;
})

clearBtnNode.addEventListener('click', () => {
    counterNode.innerText = counter = 0;

})

