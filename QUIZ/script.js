const quizDB= [
    {
        question: "Q1: Python Programming Language developed by ?",
        a: "none",
        b: "none",
        c: "none",
        d: "Guido van Rossum",
        ans: "ans4"
    },
    {
        question: "Q2: Python Case sensitive",
        a: "yes",
        b: "none",
        c: "none",
        d: "none",
        ans: "ans1"
    },
    {
        question: "Q3: python extension",
        a: "none",
        b: "none",
        c: "none",
        d: ".py",
        ans: "ans4"
    },
    {
        question: "Q4: 4+3%5",
        a: "none",
        b: "none",
        c: "none",
        d: "7",
        ans: "ans4"
    },
];



const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount =0;
let score= 0;
const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    opt1.innerHTML = questionList.a;
    opt2.innerHTML = questionList.b;
    opt3.innerHTML = questionList.c;
    opt4.innerHTML = questionList.d;
}
loadQuestion();

const Answer = () => {
    let answer;
    answers.forEach((currAnswer) => {
        if (currAnswer.checked){

        answer= currAnswer.id;
    }
    
    });
    return answer;

};
const deselectAll=() =>{
    answers.forEach((currAnswer)=> currAnswer.checked = false);
}
submit.addEventListener('click',() =>{
    const checkans = Answer();
    if(checkans==quizDB[questionCount].ans){

    score++;    
    };
   
    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
});



