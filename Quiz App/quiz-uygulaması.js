
//Question Objects 

var question = function (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.checkanswer = function (choice) {
    return this.answer === choice;
}

var q1 = new question("What is biggest football team in Turkey ?", ["BEŞİKTAŞ", "gs", "fb", "ts"], "BEŞİKTAŞ");

var q2 = new question("What is most successful football team in Turkey ?", ["BEŞİKTAŞ", "gs", "fb", "ts"], "BEŞİKTAŞ");

var q3 = new question("What is the strongest football team in Turkey ?", ["BEŞİKTAŞ", "gs", "fb", "ts"], "BEŞİKTAŞ");

var q4 = new question("What is most loved football team in Turkey ?", ["BEŞİKTAŞ", "gs", "fb", "ts"], "BEŞİKTAŞ");

var questions = [q1, q2, q3, q4]

//Quiz Objects

var Quiz = function (questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
}
//Quiz Object prototypes

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
};
Quiz.prototype.scorehandling = function (answer) {
    if (this.questions[this.questionIndex].answer == answer) {
        this.score++;
    }
};

var quiz = new Quiz(questions);


//Load Questions
function loadquestion(question) {
    // creating element
    var soru = document.querySelector('#questiontext');
    var progress = document.querySelector('#progress');
    var cardbody = document.querySelector('.card-body');

    if (quiz.questionIndex == quiz.questions.length) {
        if (quiz.score != quiz.questions.length)
            cardbody.innerHTML = `Your Score : ${quiz.score}`;
        else {
            cardbody.innerHTML = `<b>You are already big BEŞİKTAŞ fans </b> ;)`
        }
    }
    else {
        soru.textContent = question.text;
        progress.textContent = `${quiz.questionIndex + 1} of ${quiz.questions.length}`;
        for (let i = 0; i < question.choices.length; i++) {
            var buton = document.querySelector('#choice' + i);
            buton.textContent = question.choices[i];
        }
    }
}
//Buttons add eventlisteners
function executelisteners() {
    var butons = document.querySelectorAll('button');
    butons.forEach(element => {
        element.addEventListener('click', function (e) {
            if (e.target.textContent == quiz.questions[quiz.questionIndex].answer) {
                quiz.score++;
            }
            quiz.questionIndex++;
            loadquestion(quiz.getQuestion());
        });
    });
}

loadquestion(quiz.getQuestion());

executelisteners()