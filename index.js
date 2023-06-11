/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input-el")
let errorMsg = document.querySelector(".hero-container p")
const conversionBtn = document.getElementById("convert-btn")
let lengthText = document.querySelector("#length p")
let volumeText = document.querySelector("#volume p")
let massText = document.querySelector("#mass p")


conversionBtn.addEventListener("click", function(){
    lengthText.textContent= ""
    volumeText.textContent = ""
    massText.textContent = ""
    let value = input.value
    console.log(parseInt(value))
    if(parseInt(value)) //ensures there is a number passed in
    {
        errorMsg.textContent = ""
        renderLength(value)
        renderVolume(value)
        renderMass(value)
    }
    else{
        errorMsg.textContent = "please enter in a number" 
    }

})

function renderLength(value)
{
    let conversion = 3.281
    lengthText.innerHTML = `
        ${value} meters = ${metricToImperial(value, conversion)} feet |
         ${value} feet = ${imperialToMetric(value, conversion)} meters`
}

function renderVolume(value)
{
    let conversion = 0.264
    volumeText.innerHTML = `
        ${value} liters = ${metricToImperial(value, conversion)} gallons |
         ${value} gallons = ${imperialToMetric(value, conversion)} liters`
}
function renderMass(value)
{
    let conversion = 2.204
    massText.innerHTML = `
        ${value} kilos = ${metricToImperial(value, conversion)} pounds |
         ${value} pounds = ${imperialToMetric(value, conversion)} kilos`
}

function metricToImperial(value, conversion)
{
    let finalNum = value * conversion
    finalNum = finalNum.toFixed(3)
    console.log(`metric to imperial: ${finalNum}`)
    return finalNum
}
//rounding errors
function imperialToMetric(value, conversion)
{
    let finalNum = value / conversion
    finalNum = finalNum.toFixed(3)
    console.log(`metric to imperial: ${finalNum}`)
    return finalNum
}