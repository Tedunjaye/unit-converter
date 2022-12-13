
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meter = 3.281
const liter = 0.264
const kilogram = 2.204


convertBtn.addEventListener("click", function() {
  let baseValue = inputEl.value
  
  lengthEl.textContent = `${baseValue} meters = ${(baseValue * meter).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meter).toFixed(3)} meters` 
  volumeEl.textContent = `${baseValue} liters = ${(baseValue * liter).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / liter).toFixed(3)} liters` 
  massEl.textContent = `${baseValue} kilos = ${(baseValue * kilogram).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kilogram).toFixed(3)} kilos` 
})

