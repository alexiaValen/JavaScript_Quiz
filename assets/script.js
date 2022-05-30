//code


// VARIABLES AND QUESTIONS FOR QUIZ
let sec = 100;
let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: "Which function is used to serialize an object into a JSON string in Javascript?",
        answers: [
            "1 init()", 
            "2 convert()", 
            "3 stringify()", 
            "4 parse()"
        ],
        correct: 2
    },
    {
        title: "What surrounds a string?",
        answers: [
            "1 Square Brackets", 
            "2 Paranthesis", 
            "3 Curly Brackets", 
            "4 Quotations"
        ],
        correct: 3
    },
    {
        title: " Which is the correct way to write a JavaScript array?",
        answers: [
            "1 var namesArray = ['John','Bob','Linda']", 
            "2 var namesArray = 'John','Bob','Linda'", 
            "3 var namesArray = [['John'],['Bob'],['Linda']]", 
            "4 var namesArray = [[John],[Bob],[Linda]]"
        ],
        correct: 0
    },
    {
        title: "What keyword is used to declare an asynchronous function in Javascript?",
        answers: [
            "1 await", 
            "2 setTimeout", 
            "3 async", 
            "4 setInterval"
        ],
        correct: 2
    },
    {
        title: "The conditional statement, in Javascript, begins with the word______.",
        answers: [
            "1 Ok", 
            "2 Then", 
            "3 Else", 
            "4 If"
        ],
        correct: 3
    },
    {
        title: "What is the correct JavaScript syntax to write 'Hello World'?",
        answers: [
            "1 document.write('Hello World');", 
            "2 text.write('Hello World');", 
            "3 document.text('Hello World');", 
            "4 response.write('Hello World');"
        ],
        correct: 0
    },
    {
        title: "If 'var x = 10' and 'var y = 25' how would I console log it correctly so the output is 5?",
        answers: [
            "1 console.log{x+y/5};", 
            "2 console.log[x+y/5];", 
            "3 console.log('x+y/5');", 
            "4 console.log(x+y/5);"
        ],
        correct: 3
    },
    {
        title: "How do we write a comment in javascript?",
        answers: [
            "1 /* */", 
            "2 //", 
            "3 ##", 
            "4 $$"
        ],
        correct: 1
    },
    {
        title: "How can a datatype be declared to be a constant type?",
        answers: [
            "1 constant", 
            "2 let", 
            "3 const", 
            "4 var"
        ],
        correct: 2
    },
    {
        title: "Which of the following is not considered a JavaScript operator?",
        answers: [
            "1 this", 
            "2 delete", 
            "3 new", 
            "4 typeof"
        ],
        correct: 0
    },
];




// BEGINNING OF FUNCTIONS
$(document).ready(function(){

    $(".start a").click(function(event){
        event.preventDefault();
        startTimer();
        $(".start").hide();
        $(".quiz").show();
        showQuestion();
    });

    $(".quiz section").on("click", "span",function(){
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".quiz a").click(function(event){//lets switch a to button
        event.preventDefault();
        if($("span.selected").length){
            let choice = parseInt($("span.slected").attr("id"));
            checkAnswer(choice);
        } else {
            alert("PLEASE SELECT AN ANSWER");
        }
    });

    $(".summary a").click(function(event){
        event.preventDefault();
        restartQuiz();
    });
});







// TIMER FUNCTION
function startTimer(){
    var timer = setInterval(function(){
        sec--;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("Time is up!");
            $(".quiz").hide();
            showResults();
        }
    }, 1000);
}





// QUIZ MODULES 
function showQuestion(){
    let question = questions[currentQuestion];
    $(".quiz h2").text(question.title);
    $(".quiz section").html(" ");
    for(var i=0; i<question.answers.length; i++){
        $(".quiz section").append("<span id='"+i+"'>"+question.answers[i]+"</span>");
    }

}





// CHECKING FOR CORRECT ANSWER
function checkAnswer(choice){
    let question = questions[currentQuestion];
    if(question.correct === choice) {
        score++;
    } 
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        showResults();
    } else {
    showQuestion();
    }
}





// SHOWING FINAL RESULTS
function showResults(){//summary
    $(".quiz").hide();
    $(".summary").show();
    $(".summary p").text("Congrats you scored "+score+" out of "+questions.length+"!");
}



// OPTION TO RESTART QUIZ
function restartQuiz(){
    $(".summary").hide();
    $(".quiz").show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
}

