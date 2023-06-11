/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input-el")
const conversionBtn = document.getElementById("convert-btn")
let lengthText = document.querySelector("#length p")
let volumeText = document.querySelector("#volume p")
let massText = document.querySelector("#mass p")


conversionBtn.addEventListener("click", function(){
    let value = input.value
    console.log(parseInt(value))
    if(parseInt(value)) //ensures there is a number passed in
    {
        render(lengthText)
    }
    else{
        console.log("not number") //replace with msg to user between box and button
    }

})

function render(conversionText)
{
    conversionText.innerHTML = `test`
}

function metricToImperial(conversion)
{
    let finalNum = input * conversion
    finalNum = finalNum.toFixed(3)
    console.log(`metric to imperial: ${finalNum}`)

}

function imperialToMetric(conversion)
{
    let finalNum = input / conversion
    finalNum = finalNum.toFixed(3)
    console.log(`metric to imperial: ${finalNum}`)

}