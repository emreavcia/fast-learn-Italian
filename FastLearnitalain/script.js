//variables for show and hide button
const showAnswers = document.getElementById("show-answers");
const answersSection = document.getElementById("answers-section");

//show and hide button function
showAnswers.addEventListener("click", function(){
    if (showAnswers.value ==="Show answers") {
    showAnswers.setAttribute("value", "Hide answers");
     answersSection.classList.remove("d-none")}
    else{
      answersSection.setAttribute("class", "d-none")
      showAnswers.setAttribute("value", "Show answers")
    }
})

//variables for check button
const inputs = document.querySelectorAll("input");
const checkBtn = document.querySelector('input[name="check"]');
const scoreSpan = document.getElementById("score-span")
let incremation =0;

//check button function 
checkBtn.addEventListener("click", function(){

    for(i=0; i<inputs.length; i++) {
        if(inputs[i].checked == true && inputs[i].value==1){
            incremation++;
        }
    }
    scoreSpan.textContent=`${incremation}`
});

// variables and a function for clear button 
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    window.location.reload()
});
