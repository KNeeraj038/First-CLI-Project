var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("Let's start with your name : ");
console.log("Hi "+userName+", good to see you !\n");

console.log("Let's play a game which will test you knowledge about India !\n")

console.log("------------------------------------------------");
console.log("Game rule:\n1) +1 point for correct answer\n2) -1 for wrong answer! \n")
console.log("------------------------------------------------\n");
// Questions and answers.
var questions = [
  {
    question: "Who was the first Prime Minister of India? ",
    options:"a. Indira Gandhi\nb. Narendra Modi\nc. Jawaharlal Nehru\nd. Rajiv Gandhi",
    answer:"c"
  },
  {
    question: "What is the capital city of India? ",
    options:"a. New Delhi\nb. Mumbai\nc. Kolkata\nd. Chennai",
    answer:"a"
  },
  {
    question: "Which state is also known as the “Fruit Bowl” of India?  ",
    options:"a. Jammu and Kashmir\nb. Himachal Pradesh\nc. Assam\nd. Meghalaya",
    answer:"b"
  },
  {
    question: "Which place in India is also known as the “Land of Rising Sun”? ",
    options:"a. Sikkim\nb. Arunachal Pradesh\nc. Karnataka\nd. Gujarat",
    answer:"b"
  }
];

function play(question, options, answer){
  var answerRcvd = readlineSync.question(question+"\n"+options+"\n");
  
  if(answer == answerRcvd){
    console.log("\nCorrect !");
    score++;
  }else{
    console.log("\nsorry! wrong answer");
    score--;
  }
}

for(var i=0; i<questions.length;i++){
  var result = play(questions[i].question,questions[i].options, questions[i].answer);
  console.log(">>> Current score: "+score+"\n");  
}

console.log("Thank you for playing the game! Your score is "+score);

