
const adviceNumber = document.getElementById('adviceNumber')
const adivcePara = document.getElementById('advicePara')

async function getAdvice(){

    await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => addDataToWebsite(data))
}

function addDataToWebsite(data){
    adviceNumber.innerText = data.slip.id;
    adivcePara.innerText = data.slip.advice;
}