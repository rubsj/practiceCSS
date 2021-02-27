const center = document.querySelector('.center');
const topLine = document.querySelector('.top');
const centerLine = document.querySelector('.center-line');
const bottomLine = document.querySelector('.bottom');

center.addEventListener('click' , ()=>{
    console.log('click event on center');
    topLine.classList.toggle('rotate');
    centerLine.classList.toggle('rotate');
    bottomLine.classList.toggle('rotate');
})