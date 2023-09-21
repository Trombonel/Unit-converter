/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("input-submit")
const length = document.getElementById("p-length")
const volume = document.getElementById("p-volume")
const mass = document.getElementById("p-mass")
const inputEl = document.getElementById("input-text")
let myNum

function meterToFeet(num) {
     num *= 3.281
     return num.toFixed(3)
}
function feetToMeter(num) {
     num /= 3.281
    return num.toFixed(3)
}
function litersToGallons(num) {
    num *= 0.264
    return num.toFixed(3)  
}
function gallonsToLiters(num) {
    num /= 0.264
    return num.toFixed(3)
}
function kilogramsToPounds(num){
    num *= 2.204
    return num.toFixed(3)
}
function poundsToKilograms(num) {
    num /= 2.204
    return num.toFixed(3)
}



function render(num) {
    length.textContent = `
    ${myNum} meters = ${meterToFeet(num)} feet | ${myNum} feet = ${feetToMeter(num)} meters
    `
    volume.textContent = `
    ${myNum} liters = ${litersToGallons(num)} gallons | ${myNum} gallons = ${gallonsToLiters(num)} liter
    `
    mass.textContent = `
    ${myNum} kilos = ${kilogramsToPounds(num)} pounds | ${myNum} pounds = ${poundsToKilograms(num)} kilos
    `
}



convertBtn.addEventListener("click", function(){
    myNum = inputEl.value
    inputEl.value = ""
    render(myNum)
})

