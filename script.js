
const quoteDisplayElement= document.getElementById('quoteDisplay');
const quoteInputElement= document.getElementById('quoteInput');
const timerElement=document.getElementById('timer');
let correct=true;




quoteInputElement.addEventListener("input",()=>{
const arrayQuote= quoteDisplayElement.querySelectorAll('span')
const arrayInput=quoteInputElement.value.split('')

arrayQuote.forEach((characterSpan,index)=>{
const character= arrayInput[index];
if( character==null)
{
    characterSpan.classList.remove('correct');
    characterSpan.classList.remove('incorrect');
    correct=false;
    
}
else if(character===characterSpan.innerText)
{
    characterSpan.classList.add('correct');
    characterSpan.classList.remove('incorrect');
    

}
else {

    characterSpan.classList.remove('correct');
    characterSpan.classList.add('incorrect');
    correct=false;

}

 

})

if(correct) renderNewQuote()



})


function fetchApi(){
   return  fetch('https://api.quotable.io/random').then(response=>response.json()
).then(data=>data.content)

}

async function renderNewQuote(){
 
    const quote=await fetchApi();
    quoteDisplayElement.innerHTML= '';
    quote.split('').forEach(character => {
        const characterSpan=document.createElement('span');

        characterSpan.innerText=character;
        quoteDisplayElement.appendChild(characterSpan);
        
    });

quoteInputElement.value=null;
startTimer();

}


let startTime;
function startTimer(){
    timerElement.innerText=0;
    startTime=new Date();
    console.log(timer,timerElement)
    setInterval(()=>{
        timerElement.innerText= getTimerTime()

    },1000)

}

function getTimerTime(){
 return   Math.floor((new Date()- startTime)/ 1000)
}
renderNewQuote()