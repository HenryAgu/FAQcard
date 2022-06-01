// First Question 
const firstQuestion = document.getElementById('question1');
const firstAnswer = document.getElementById('answer1');
const firstArrow = document.getElementById('arrow1');

// Second Question
const secondQuestion = document.getElementById('question2');
const secondAnswer = document.getElementById('answer2');
const secondArrow = document.getElementById('arrow2');

// Third Question
const ThirdQuestion = document.getElementById('question3');
const ThirdAnswer = document.getElementById('answer3');
const ThirdArrow = document.getElementById('arrow3');

// Fourth Question
const FourthQuestion = document.getElementById('question4');
const FourthAnswer = document.getElementById('answer4');
const FourthArrow = document.getElementById('arrow4');

// Fifth Question
const FifthQuestion = document.getElementById('question5');
const FifthAnswer = document.getElementById('answer5');
const FifthArrow = document.getElementById('arrow5');


// First Question

    firstQuestion.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
firstQuestion.addEventListener('click',()=>{
    firstQuestion.style.borderBottom = "none"
    firstAnswer.classList.toggle('answer')
    firstAnswer.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
    firstAnswer.style.paddingBottom = "5px"
})


// Second Question
    secondQuestion.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
secondQuestion.addEventListener('click', ()=>{
    secondQuestion.style.borderBottom = "none"
    secondAnswer.classList.toggle('answer')
    secondAnswer.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
    secondAnswer.style.paddingBottom = "5px"
})

// Third Question
    ThirdQuestion.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
ThirdQuestion.addEventListener('click', ()=>{
    ThirdQuestion.style.borderBottom = "none"
    ThirdAnswer.classList.toggle('answer')
    ThirdAnswer.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
    ThirdAnswer.style.paddingBottom = "5px"
})

// Fourth Question
    FourthQuestion.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
FourthQuestion.addEventListener('click', ()=>{
    FourthQuestion.style.borderBottom = "none"
    FourthAnswer.classList.toggle('answer')
    FourthAnswer.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
    FourthAnswer.style.paddingBottom = "5px"
})

// Fifth Question
    FifthQuestion.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
FifthQuestion.addEventListener('click', ()=>{
    FifthQuestion.style.borderBottom = "none"
    FifthAnswer.classList.toggle('answer')
    FifthAnswer.style.borderBottom = "1px solid hsl(240, 5%, 91%)"
    FifthAnswer.style.paddingBottom = "5px"
})
