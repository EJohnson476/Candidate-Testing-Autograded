const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
/*
questions.push();
correctAnswers.push();
questions.push();
correctAnswers.push();
questions.push();
correctAnswers.push();
questions.push();
correctAnswers.push();
questions.push();
correctAnswers.push();
*/
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

    candidateAnswer = input.question(question);
 
  /* for (i = 0; i <= 5; i++)
  {
    candidateAnswers.push(input.question(`${question[i]}`));
  }
*/
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  if (candidateAnswer === correctAnswer)
{
  console.log("Your answer was correct.");
}
else
{
  console.log("Your answer was incorrect.");
}


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName} welcome to your test and good luck!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};