
for (var j = 0; j<correctAnswer.length; j++){
    for(var i = 0; i<3; i++){
        threeTimesMultpliedCorrectAnswer.push(correctAnswer[j]) 
    
    }}
//show and hide button function
showAnswers.addEventListener("click", function(){

    const answerList = document.getElementById("answerList");
    
    const answers = correctAnswer.map((item)=>{
    
        return('<li class="mb-2">'+item+'</li>') 
    }) 
    
    answerList.innerHTML = answers.join("\n");

    if (showAnswers.value ==="Show answers") {
    showAnswers.setAttribute("value", "Hide answers");
     answersSection.classList.remove("d-none")}
    else{
      answersSection.setAttribute("class", "d-none")
      showAnswers.setAttribute("value", "Show answers")
    }
})

//check button
checkBtn.addEventListener("click", function(){
    let incremation =0;
   for(let i=0; i<inputs.length-1; i++){
      if(inputs[i].checked == true && labels[i].textContent==threeTimesMultpliedCorrectAnswer[i]){
         incremation++;
          }
   scoreSpan.textContent=`${incremation}`;
}});

// variables and a function for clear button 
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    window.location.reload()
});





