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
let questions = ["Who was the first American woman in space? " , 'True or false: 5 kilometer == 5000 meters? ' , "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride" , "true" , "40" , "Trajectory" , "3"];
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

   // candidateAnswer = input.question(question);
 
   for (i = 0; i <= 5; i++)
  {
    candidateAnswers.push(input.question(`${question[i]}`));
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let rightAnswers = 0;
  let wrongAnswers = 0;

for (i = 0; i <= 4; i++)
{
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase())
    {
      console.log("Your answer was correct.");
      rightAnswers++;
    }
  else
    {
      console.log(`Your answer was incorrect. The correct answer was ${correctAnswers[i]}.`);
      wrongAnswers++;
    }
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade = ((rightAnswers) / (questions.length) * 100);

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