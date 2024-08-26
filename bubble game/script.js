// making bubbles in random number 
function makingBubble(){
    let bob = "";
    
    for (let i= 1;
        i<137; i++){
         var rn = Math.floor(Math.random()*10)
        bob += `<div class="bubble">${rn}</div>`;
    }

    let area = document.querySelector(".area").innerHTML =bob;
   
}

makingBubble(); 


// functing of games
// timerrrr

let gg =0;
let timer =60; 
function timerval() {
    let times = setInterval(() => {
        if (timer>0){
            timer-- ;
            let a = document.querySelector("#time").innerHTML = timer; 
           // console.log(a);
        }
        else {
            clearInterval(times);
        document.querySelector(".area").innerHTML =`<h1 id="game"> GAME OVER </h2>`
        }

    }, 1000);
}
timerval()

// chnaging value of hit 

function hitting() {
     gg =  Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = `${gg}`
}
hitting()

let score = 0 ;
function scoring () {
    score += 10 ; 
    document.querySelector("#score").innerHTML = score ;
   
}
scoring()


// event bubbling and adding AddingListener

let no = document.querySelector(".area")
no.addEventListener("click", function(main){
    let click= Number(main.target.textContent);
    console.log(typeof main.target.textContent);

    if (click == gg ){
        scoring()
        makingBubble()
        hitting()

    }

})

 
 
















