let cost = 10
let total = document.querySelector('#cost')
total.innerHTML = cost

let timesClickedPepperoni = 0
let timesClickedSausage = 0
let timesClickedOlives = 0
let timesClickedOnions = 0
let timesClickedPeppers = 0
let timesClickedSpinach = 0
let timesClickedTomatoes = 0
let timesClickedMushrooms = 0
let timesClickedPineapple = 0


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
    timesClickedPepperoni = timesClickedPepperoni + 1
    if (timesClickedPepperoni%2 == 1) {
        cost = cost + 2
    }
    else {
        cost = cost - 2
    }
    total.innerHTML = cost
}

function addSausage(){
    document.querySelector('#sausage').classList.toggle('hidden')
    timesClickedSausage = timesClickedSausage + 1
    if (timesClickedSausage%2 == 1) {
        cost = cost + 2
    }
    else {
        cost = cost - 2
    }        
    total.innerHTML = cost
}

function addOlives(){
    document.querySelector('#olives').classList.toggle('hidden')
    timesClickedOlives = timesClickedOlives + 1
    if (timesClickedOlives%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addOnions(){
    document.querySelector('#onions').classList.toggle('hidden')
    timesClickedOnions = timesClickedOnions + 1
    if (timesClickedOnions%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addPeppers(){
    document.querySelector('#peppers').classList.toggle('hidden')
    timesClickedPeppers = timesClickedPeppers + 1
    if (timesClickedPeppers%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addSpinach(){
    document.querySelector('#spinach').classList.toggle('hidden')
    timesClickedSpinach = timesClickedSpinach + 1
    if (timesClickedSpinach%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addTomatoes(){
    document.querySelector('#tomatoes').classList.toggle('hidden')
    timesClickedTomatoes = timesClickedTomatoes + 1
    if (timesClickedTomatoes%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addMushrooms(){
    document.querySelector('#mushrooms').classList.toggle('hidden')
    timesClickedMushrooms = timesClickedMushrooms + 1
    if (timesClickedMushrooms%2 == 1) {
        cost = cost + 1
    }
    else {
        cost = cost - 1   
    }
    total.innerHTML = cost
}

function addPineapple(){
    document.querySelector('#pineapple').classList.toggle('hidden')
    timesClickedPineapple = timesClickedPineapple + 1
    if (timesClickedPineapple%2 == 1) {
        cost = cost + 5
    }
    else {
        cost = cost - 5   
    }
    total.innerHTML = cost
}

