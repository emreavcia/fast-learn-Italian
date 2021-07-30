/* new array called structure created by map function out of the database array */
let structure = database.map((item, index)=>
        '<li class="mb-3"> '+item.question
        
         + item.options.map((item, index1) =>(
          '<ul class="list-unstyled mt-3">'+
          '<li class="pb-1">'+
            '<div class="form-check"> <input class="form-check-input" type="radio" name="flexRadioDefault'+index+'"'+'id="flexRadioDefault'+index+index1+'"><label class="form-check-label" for="flexRadioDefault'+index+index1+'"'+/* 'value="'+ */item+'">'+ item+'</label>'+
            '</div>'+
          '</li>'+ 
        '</ul>' )).join("\n")+'</li>'
) 

// the main list embeded inside the page
test.innerHTML = structure.join("\n");


//variables for check button
const inputs = document.querySelectorAll('input[class="form-check-input"]');
const divs = document.querySelectorAll('div[class="form-check"]');

const labels = document.querySelectorAll('label[class="form-check-label"]')


const checkBtn = document.querySelector('input[name="check"]');

const scoreSpan = document.getElementById("score-span")

//variables for show and hide button
const showAnswers = document.getElementById("show-answers");
const answersSection = document.getElementById("answers-section");
//variable fot total number of questions
/* the questions and options maped() through and new arrays created respectively for questions, correct answers and correct answer values
 */

const questions = database.map(item => item.question);

const correctAnswer= database.map(item=>item.correctAnswer);
const options = database.map(item => item.options);


/* three times correctAnswer array properties multiplied and nested in new array called  threeTimesMultpliedCorrerctAnswer */
const threeTimesMultpliedCorrectAnswer=[];






const totalNumberOfQuestions = document.getElementById("totalNumberOfQuestions");
totalNumberOfQuestions.innerHTML = database.length;

