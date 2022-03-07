// assign starting price
let cost = 10
let total = document.querySelector('#cost')
total.innerHTML = cost

// variables to measure times clicked

// add event listeners for each topping
document.querySelector('#choosePepperoni').addEventListener('click', addPepperoni)
document.querySelector('#chooseSausage').addEventListener('click', addSausage)
document.querySelector('#chooseOlives').addEventListener('click', addOlives)
document.querySelector('#chooseOnions').addEventListener('click', addOnions)
document.querySelector('#choosePeppers').addEventListener('click', addPeppers)
document.querySelector('#chooseSpinach').addEventListener('click', addSpinach)
document.querySelector('#chooseTomatoes').addEventListener('click', addTomatoes)
document.querySelector('#chooseMushrooms').addEventListener('click', addMushrooms)
document.querySelector('#choosePineapple').addEventListener('click', addPineapple)

// functions for each topping button to toggle images and adust price
function addPepperoni(){
    document.querySelector('#pepperoni').classList.toggle('hidden')
    let timesClickedPepperoni = 0
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
    let timesClickedSausage = 0
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
    let timesClickedOlives = 0
    timesClickedOlives = timesClickedOlives + 1
    if (timesClickedOlives%2 == 1) {
        cost++
    }
    else {
        cost--  
    }
    total.innerHTML = cost
}

function addOnions(){
    document.querySelector('#onions').classList.toggle('hidden')
    let timesClickedOnions = 0
    timesClickedOnions = timesClickedOnions + 1
    if (timesClickedOnions%2 == 1) {
        cost++
    }
    else {
        cost--
    }
    total.innerHTML = cost
}

function addPeppers(){
    document.querySelector('#peppers').classList.toggle('hidden')
    let timesClickedPeppers = 0
    timesClickedPeppers = timesClickedPeppers + 1
    if (timesClickedPeppers%2 == 1) {
        cost++
    }
    else {
        cost--   
    }
    total.innerHTML = cost
}

function addSpinach(){
    document.querySelector('#spinach').classList.toggle('hidden')
    let timesClickedSpinach = 0
    timesClickedSpinach = timesClickedSpinach + 1
    if (timesClickedSpinach%2 == 1) {
        cost++
    }
    else {
        cost--   
    }
    total.innerHTML = cost
}

function addTomatoes(){
    document.querySelector('#tomatoes').classList.toggle('hidden')
    let timesClickedTomatoes = 0
    timesClickedTomatoes = timesClickedTomatoes + 1
    if (timesClickedTomatoes%2 == 1) {
        cost++
    }
    else {
        cost--   
    }
    total.innerHTML = cost
}

function addMushrooms(){
    document.querySelector('#mushrooms').classList.toggle('hidden')
    let timesClickedMushrooms = 0
    timesClickedMushrooms = timesClickedMushrooms + 1
    if (timesClickedMushrooms%2 == 1) {
        cost++
    }
    else {
        cost--  
    }
    total.innerHTML = cost
}

function addPineapple(){
    document.querySelector('#pineapple').classList.toggle('hidden')
    alert("Pineapple on pizza? Please re-evaluate your life choices")
    let timesClickedPineapple = 0
    timesClickedPineapple = timesClickedPineapple + 1
    if (timesClickedPineapple%2 == 1) {
        cost = cost + 5
    }
    else {
        cost = cost - 5   
    }
    total.innerHTML = cost
}

