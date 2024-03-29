var counterDisplay=document.getElementById("CounterDisplay");
var errorMessege=document.getElementById("errorMessage");
var incrementBtn=document.getElementById("IncrementBtn");
var decrementBtn=document.getElementById("DecrementBtn");
var clearBtn=document.getElementById("clearBtn");

var count=0;
function updatecounter(){
    counterDisplay.textContent="Your Current Count is:   " +count;
    
}
function IncrementCount(){
    count++;
    updatecounter();
}
function decrementCount(){
    
    if(count>0){
        count--;
        updatecounter();
    }else {
        errorMessege.textContent = "Error: Can not go below Zero(0)";

        errorMessege.style.display = "block";
    }
}
function clearcount(){
    count=0;
    updatecounter();
}
incrementBtn.addEventListener("click",IncrementCount);
decrementBtn.addEventListener("click",decrementCount);
clearBtn.addEventListener("click",clearcount);
updatecounter();