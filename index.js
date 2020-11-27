var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

// input
var userName = readlineSync.question("What's your name? ");

console.log(chalk.green("Welcome " + userName + "! to the marvel quiz?"));

var highScores = [
   {
      name: "Dr.Strange",
      score: 4,
   },
   {
      name: "black-window",
      score: 2,
   },
   {
      name: "Stan Lee",
      score: 1,
   },
];

// play function
function play(question, option1, option2, answer) {
   console.log(question);
   console.log(chalk.greenBright("1: " + option1));
   console.log(chalk.blueBright("2: " + option2));
   var userAnswer = readlineSync.question("Enter your option: ");

   if (userAnswer == answer) {
      // branching
      console.log(chalk.green("right!"));
      score++;
   } else {
      console.log(chalk.red("wrong!"));
   }

   console.log(chalk.magenta("current score: ", score));
   console.log(chalk.blue("-------------"));
}

// array of objects
var questions = [
   {
      question: "which cinematic universe is the best? ",
      option1: "DC",
      option2: "MARVEL",
      answer: 2,
   },
   {
      question: "Who is the best avenger? ",
      option1: "Iornman",
      option2: "captain america",
      answer: 1,
   },
   {
      question: "Who is iron man? ",
      option1: "peter parker",
      option2: "tony stark",
      answer: 2,
   },
   {
      question: "Who is the only window among the avengers?",
      option1: "black widow",
      option2: "scaret witch",
      answer: 1,
   },
   {
      question: "Who is the youngest avengers?",
      option1: "spider man",
      option2: "groot",
      answer: 1,
   },
   {
      question: "Who is the god among the avengers?",
      option1: "thor",
      option2: "vision",
      answer: 1,
   },
];

// loop
for (var i = 0; i < questions.length; i++) {
   var currentQuestion = questions[i];
   play(
      currentQuestion.question,
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.answer
   );
}

console.log(chalk.yellow("YAY! You SCORED: ", score));

console.log(chalk.magenta("Check out the Leader Board:-"));

//printing the leader board
for (var i = 0; i < highScores.length; i++) {
   console.log(chalk.blue("-----------------------"));
   console.log(chalk.red("Name: " + highScores[i].name));
   console.log(chalk.magenta("Score: " + highScores[i].score));
}

//checking for level
if (score >= 5)
   console.log(chalk.redBright("Congrats you are eligible for level 3!"));

if (score >= 3)
   console.log(chalk.redBright("COngrats you are eligible for level 2!"));

var f = 0;

//scrolling through the leader board
for (var i = 0; i < highScores.length; i++) {
   if (score > highScores[i].score) {
      f = 1;
      break;
   }
}

if (f === 1)
   console.log(chalk.green("Congrats you made it to the leader board!"));
else console.log(chalk.red("Sorry! you did not make it to the leader board."));

console.log(chalk.blue("-------------SHARE-YOUR-SCORE-------------"));
