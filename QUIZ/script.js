const quizDB= [
    {
        question: "Q1: Where is the ‘Indian Institute Of Geomagnetism’ located?",
        a: "Mumbai",
        b: "Hyderabad",
        c: " Bengaluru",
        d: "Kochi",
        ans: "ans1"
    },
    {
        question: "Q2: ‘Dragonfly’, the recent project of NASA, was launched to explore which planet?",
        a: "Mars",
        b: "Jupiter",
        c: "Saturn",
        d: "Venus",
        ans: "ans3"
    },
    {
        question: "Q3: Which country has shut down the major ransomware network Hive?",
        a: "China",
        b: "USA",
        c: "Russia",
        d: "Israel",
        ans: "ans2"
    },
    {
        question: "Q4: Baidu, which was seen in the news, is the Internet search major based in which country?",
        a: "China",
        b: "USA",
        c: "Australia",
        d: "Israel",
        ans: "ans1"
    },
    {
        question: "Q5: As per the annual lightning report, which state recorded the highest number of flashes in 2022- 23?",
        a:"Maharashtra",
        b: "Mizoram",
        c: "Madhya Pradesh",
        d: "Sikkim",
        ans: "ans3"
    },
    {
        question: "Q6: Which country launched the ‘Beidou’ satellite navigation system?",
        a: "China",
        b: "USA",
        c: "Australia",
        d: "Israel",
        ans: "ans1"
    },
    {
        question: "Q7: Jawaharlal Nehru Port Authority (JNPA) is located in which state/UT?",
        a:"Maharashtra",
        b: "Mizoram",
        c: "Madhya Pradesh",
        d: "Sikkim",
        ans: "ans1"
    },
    {
        question: "Q8: Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
        a: "16 years",
        b: "18 years",
        c: "20 years",
        d: "Cannot be determined",
        ans: "ans1"
    },
    {
        question: "Q9: A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
        a: "12 Days",
        b: "15 Days",
        c: "16 Days",
        d: "18 Days",
        ans: "ans2"
    },
    {
        question: "Q10: If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004?",
        a: "Sunday",
        b: "Saturday",
        c: "Tuesday",
        d: "Wednesday",
        ans: "ans1"
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
