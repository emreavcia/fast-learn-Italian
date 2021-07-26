//question list 
var myTest = [

    {
        question: "A colazione, i ticinesi di solito mangio",

        a: "biscotti",
        b: "pane e marmellata",
        c: "pane e formaggio",

        correctAnswer:"b",
        correctAnswerValue:"pane e marmellata" 
  
    },
   {
        question: "Normalmente, la colazione si consuma",

        a: "al bar",
        b: "al lavoro o a scuola",
        c: "a casa",

        correctAnswer:"c",
        correctAnswerValue:"a casa" 
    }, 
    {
        question: "A pranzo in Ticino si mangia",

        a: "qualcosa di semplice",
        b: "un pasto ricco con pasta, carne e pesce",
        c: "solo pane e formaggio",

        correctAnswer:"a",
        correctAnswerValue:"qualcosa di semplice" 
    }, 
    {
        question: "A merenda, i bambini",

        a: "mangiano un gelato e qualche biscotto",
        b: "bevono un succo di frutta e mangiano un frutto",
        c: "mangiano pane e cioccolato o un frutto",

        correctAnswer:"c",
        correctAnswerValue:"mangiano pane e cioccolato o un frutto" 
    }, 
    {
        question: "In inverno",

        a:"a cena si prepara qualcosa di caldo",
        b:"si mangia solo pane e formaggio",
        c: "si va sempre al ristorante",

        correctAnswer:"a",
        correctAnswerValue:"a cena si prepara qualcosa di caldo" 
    }, 
    {
        question: "La pizza",

        a: "la mangiano i ragazzi il sabato sera",
        b: "si mangia in pizzeria tutta la famiglia",
        c: "pane esi mangia con gli amici in giardino formaggio",

        correctAnswer:"b",
        correctAnswerValue:"si mangia in pizzeria tutta la famiglia" 
    }, 
    {
        question: "La torta di pane",

        a: "si fa con il pane fresco",
        b: "contiene anche l’uvetta",
        c: "non è un dolce della tradizione ticinese",

        correctAnswer:"b",
        correctAnswerValue:"contiene anche l’uvetta" 
    },
    {
        question: "Emre kac yasinda?",
        a: 29,
        b: 32,
        c: 31,

        correctAnswer: "c",
        correctAnswerValue:31 

    }

]
//total number of questions

const totalNumberOfQuestions = document.getElementById("totalNumberOfQuestions");
totalNumberOfQuestions.innerHTML = myTest.length;


/* the questions and correct answers maped() through  and new arrays created respectively for questions, correct answers and correct answer values
 */

const questions = myTest.map(item => item.question);
const correctAnswer = myTest.map( item => item.correctAnswer);
const correctAnswerValue= myTest.map( item => item.correctAnswerValue);

//variables for show and hide button
const showAnswers = document.getElementById("show-answers");
const answersSection = document.getElementById("answers-section");

//show and hide button function
showAnswers.addEventListener("click", function(){

    const answerList = document.getElementById("answerList");
    const answers = correctAnswerValue.map((item)=>{
    
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

// main ordered list is taken by ID
const test = document.getElementById("test")

/* three times correctAnswer array properties multiplied and nested in new array called  threeTimesMultpliedCorrerctAnswer */
const threeTimesMultpliedCorrerctAnswer=[];

for (var j = 0; j<correctAnswer.length; j++){
for(var i = 0; i<3; i++){
    threeTimesMultpliedCorrerctAnswer.push(correctAnswer[j]) 

}}

/* new array called structure created by map function out of the MyTest array */
let structure = myTest.map(function(item, index){
    return (     
        '<li class="mb-3">'+ item.question+
        '<ul class="list-unstyled mt-3">'+
          '<li class="pb-1">'+
            '<div class="form-check"> <input class="form-check-input" type="radio" name="flexRadioDefault'+index+'"'+
                'id="flexRadioDefault'+index+'1"'+ 'value="a">'+
              '<label class="form-check-label" for="flexRadioDefault'+index+'">' +
                item.a+
              '</label>'+
            '</div>'+
          '</li>'+
          '<li class="pb-1">'+
            '<div class="form-check">'+'<input class="form-check-input" type="radio" name="flexRadioDefault'+index+'"'+
                'id="flexRadioDefault'+index+'2" value="b">'+
              '<label class="form-check-label" for="flexRadioDefault'+index+'-2">'+
                item.b+
              '</label>'+
            '</div>'+
          '</li>'+
          '<li class="pb-1">'+
            '<div class="form-check">'+ '<input class="form-check-input" type="radio" name="flexRadioDefault'+index+'"'+
                'id="flexRadioDefault'+index+'3" value="c">'+
              '<label class="form-check-label" for="flexRadioDefault'+index+'-3">'+
                item.c+
             '</label>'+
           '</div> </li> </ul> </li>'
    )
}) 

// the main list embeded inside the page
test.innerHTML = structure.join("\n");

//variables for check button
const inputs = document.querySelectorAll("input");
const checkBtn = document.querySelector('input[name="check"]');
const scoreSpan = document.getElementById("score-span")

//chech button function
checkBtn.addEventListener("click", function(){
     let incremation =0;
    for(let i=0; i<inputs.length-1; i++){
       if(inputs[i].checked == true && inputs[i].value==threeTimesMultpliedCorrerctAnswer[i]){
            incremation++;
        }
    }
    scoreSpan.textContent=`${incremation}`
})

// variables and a function for clear button 
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    window.location.reload()
});

