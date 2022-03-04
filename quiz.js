window.onload = function() {
    document.getElementById('mycontainer').style.display = 'none';
}

function unhide() {
     
       document.getElementById("mycontainer").style.display ="inline-block";
    
       document.getElementById("intro").style.display = "none";
    
 }
    

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [
    {
        question : "When did Sheffield become a city?",
        
        choiceA : "1893",
        choiceB : "1993",
        choiceC : "2003",
        correct : "A"
    },{
        question : "When did Meadowhall open?",
        
        choiceA : "2002",
        choiceB : "1990",
        choiceC : "2000",
        correct : "B"
    },{
        question : "Which sport was originally played at Bramall Lane?",
        
        choiceA : "Hockey",
        choiceB : "Football",
        choiceC : "Cricket",
        correct : "C"
    },{
        question : " In which traditional county of England would you find Sheffield?",

        choiceA : "Lancashire",
        choiceB : "Hallamshire",
        choiceC : "Yorkshire",
        correct : "C"
    },
    {
        question : "Historically, which of these was Sheffield known for producing?",

        choiceA : "Wollen Goods",
        choiceB : "pottery",
        choiceC : "Cutlery",
        correct : "C"
    }
];



const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    }

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        
        score++;
        }else{
        }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
    scoreRender();
    }
}


function scoreRender(){
    scoreDiv.style.display = "block";
    
    
    const scorePerCent = Math.round(100 * score/questions.length);
    
    
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















