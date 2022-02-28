document.querySelector('#choosePepperoni').addEventListener('click', addPepperoni)
document.querySelector('#chooseSausage').addEventListener('click', addSausage)
document.querySelector('#chooseOlives').addEventListener('click', addOlives)
document.querySelector('#chooseOnions').addEventListener('click', addOnions)
document.querySelector('#choosePeppers').addEventListener('click', addPeppers)
document.querySelector('#chooseSpinach').addEventListener('click', addSpinach)
document.querySelector('#chooseTomatoes').addEventListener('click', addTomatoes)
document.querySelector('#chooseMushrooms').addEventListener('click', addMushrooms)
document.querySelector('#choosePineapple').addEventListener('click', addPineapple)

function addPepperoni(){
    document.querySelector('#pepperoni').classList.toggle('hidden')
}

function addSausage(){
    document.querySelector('#sausage').classList.toggle('hidden')
}

function addOlives(){
    document.querySelector('#olives').classList.toggle('hidden')
}

function addOnions(){
    document.querySelector('#onions').classList.toggle('hidden')
}

function addPeppers(){
    document.querySelector('#peppers').classList.toggle('hidden')
}

function addSpinach(){
    document.querySelector('#spinach').classList.toggle('hidden')
}

function addTomatoes(){
    document.querySelector('#tomatoes').classList.toggle('hidden')
}

function addMushrooms(){
    document.querySelector('#mushrooms').classList.toggle('hidden')
}

function addPineapple(){
    document.querySelector('#pineapple').classList.toggle('hidden')
}

