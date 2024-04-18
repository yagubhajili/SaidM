const total = document.querySelector('.total')
const decrement = document.querySelector('.decrement')
const increment = document.querySelector('.increment')



total.innerText = JSON.parse(localStorage.getItem('number'))



decrement.addEventListener('click', () => {

    total.innerText -= 1
    localStorage.setItem('number', JSON.stringify(total.innerText))



})
increment.addEventListener('click', () => {

    total.innerText = +total.innerText + 1
    localStorage.setItem('number', JSON.stringify(total.innerText))




})

