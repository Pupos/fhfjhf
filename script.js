let minu=0;
let secu=0;
let on =0;
let sint;
let j = 0;
let min=0;
let sec=0;
let known=1;
let rep;
let tests = [];
let mins = [];
let secs = [];
let obj = [];
let cont =0;
let counting = 0;
let lil = 0;
let totalMinutes = 0;
let totalSeconds = 0;
let done=1;
let ino=0;
let holdRep;
let i = 0;
    let exerDiv =[];
  let exerMin = [];
  let exerSec = [];
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
window.onload = initializeMap;
function initializeMap() { 
  document.getElementById("quol").value = "  1";  


  document.getElementById("new").onclick = function(){
    lil=0;
list();
  }
  document.getElementById("delete").onclick = function(){
  
    lil=1;
    list();
    
  }
  
  document.getElementById("rep").onclick = function(){
    rep=0;
  }
  
  document.getElementById("stop").onclick = function(){
    if (cont==0){
    cont=1;
      document.getElementById("stop").innerHTML = "continue";
    } else if (cont==1){
      cont=0;
      document.getElementById("stop").innerHTML = "stop";

    }
  }
  
  document.getElementById("start").onclick = function(){
   
  document.getElementById("Minin").style.visibility = "visible";
      document.getElementById("Secin").style.visibility = "visible";
      document.getElementById("rep").style.visibility = "visible";
      document.getElementById("stop").style.visibility = "visible";

      document.getElementById("screen").style.visibility = "visible";

      document.getElementById("Callin").style.visibility = "visible";

  
ino = on;
    rep = document.getElementById("quol").value;
    holdRep=rep;
  

shed();

  }
  
  
  
}

function list(){
  if (lil==0){
  tests.push(document.getElementById("call").value);
mins.push(document.getElementById("min").value);
secs.push(document.getElementById("sec").value);

on++;
let x = "-1000px";

    exerDiv [i]= document.createElement('div');
   exerMin[i] = document.createElement('div');
  exerSec[i]= document.createElement('div');
  exerSec[i].innerHTML = secs[i];
  exerSec[i].setAttribute('style', 
'background-color:yellow; width:80px; height:45px; position:relative; left:90%; top:300px;  z-index:0;  border:solid; border-color:blue;font-size:20px; border-radius:12px; text-align:center; background-color:cyan;');
  exerMin[i].innerHTML = mins[i];
  exerMin[i].setAttribute('style', 
'background-color:yellow; width:80px; height:45px; position:relative; left:80%; top:350px; color:white; z-index:0; border-color:blue; border:solid; font-size:20px; border-radius:12px; text-align:center; background-color:darkblue;');
  exerDiv[i].innerHTML = tests[i];
  exerDiv[i].setAttribute('style',
'background-color:yellow; width:120px; height:45px; position:relative; left:65%; top:400px; z-index:0;  border:solid; border-color:blue; font-size:20px; border-radius:12px; text-align:center; background-color:yellow;');
 document.body.appendChild(exerDiv[i]);
  document.body.appendChild(exerMin[i]);
  document.body.appendChild(exerSec[i]);
    
  } else if (lil==1){
    
    on--;
    secs.pop();
    mins.pop();
    tests.pop();
    document.body.removeChild(exerDiv[i-1]);
  document.body.removeChild(exerMin[i-1]);
  document.body.removeChild(exerSec[i-1]);
    i=i-2;
    
  }
  


    
i++;
}

function end(){
  
   document.getElementById("Minin").style.visibility = "hidden";
      document.getElementById("Secin").style.visibility = "hidden";

      document.getElementById("screen").style.visibility = "hidden";

      document.getElementById("Callin").style.visibility = "hidden";
        document.getElementById("rep").style.visibility = "hidden";

        document.getElementById("stop").style.visibility = "hidden";
rep=holdRep;
  document.getElementById("quol").value =" " + rep;
  
}

function shed(){
  if (rep>0){
    
    if (on>0) {
      if (done==1){
        done=0;
      document.getElementById('Callin').innerHTML = tests[j];

      min=mins[j];
      sec=secs[j];
        

        sint = setInterval(function() {count()}, 1000);
    
    
    }

  } else {
    done=1;
    rep--;
    on=ino;
    j=0;
     document.getElementById("quol").value="  "+rep;
    shed();
  }
  
  
  } else if (rep<=0){
    end();
  }
                   
  
}

function stop(){
  
}


function count(){
 
  if (cont==0){
    if (min==0 && sec<=0){
    
      min=0;
      sec=0;
      
 
          clearInterval(sint);

         done=1;
      on--;
      j++;
     shed();
      }
      
     
      
    
  
     if (sec>60){
       min+=sec/60-sec%60;
       sec=sec%60;
     }   
    if (sec<0){
      min-=1;
      sec=59;
    }
                

  
     timerU(min, sec);
    
 
    sec-=1;
    

  } else if (cont==1){
    stop();
  }

}

  
  function timerU(minutes, seconds){

    let mins;
    let secs;
    if (minutes<10){
      mins=" " + minutes;
      
    } else {
      mins= minutes;
    }
    if (seconds<10 && seconds.length==1){
      secs= "0"+seconds;
      
    } else {
      secs=seconds;
    }
  
    document.getElementById('Minin').innerHTML = mins;
    document.getElementById('Secin').innerHTML = secs;

    
  }
