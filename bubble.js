// var score=0;
// var Hit;

// function MaketheBubble(){
//     var cutter=" "
//     for(var i=1;i<=133;i++){
//     cutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML=cutter;
// }



// var Timer=60;
// function runTimer(){
//     var timer=setInterval(()=>{
//         if (Timer>0){
//             Timer--;
//             document.querySelector("#Timer").textContent=Timer
//         }
//         else{
//             clearInterval(timer)
//             document.querySelector("#pbtm").innerHTML=""
//         }
//     },1000);
// }


// function hitthe(){
//     Hit=Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent=Hit;

// }


// function countscore(){
//     score+=10;
//     document.querySelector("#score").textContent=score;

// }


// document.querySelector("#pbtm").addEventListener("click",function(details){
//     var dts=Number(details.target.textContent);
//     if(dts===Hit){
//         countscore();
//         hitthe();

//     }
// })

// MaketheBubble()
// runTimer()
// hitthe()

