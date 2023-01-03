window.onload = function () {
  
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('Start-btn');
    var buttonStop = document.getElementById('Stop-btn');
    var buttonReset = document.getElementById('Reset-btn');
    var Interval ;

    function startTimer () {
        //this function will make the count begin when we click to the button 
        tens++; 
        
        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
          appendTens.innerHTML = tens;
        } 
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
        
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      }

    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer,10);
    }
    
      buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
        tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    } 
}