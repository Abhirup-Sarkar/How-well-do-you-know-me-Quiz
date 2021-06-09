var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("What is your name?\n");
console.log("------------------");
console.log("Welcome"+userName+" to the game of 'HOW WELL DO YOU KNOW ABHIRUP?'. There will be four questions and you score 1 point for each correct answer and lose 1 point for each incorrect answer. Have fun playing it!");
if(readlineSync.keyINYN("Have you understood the instructions?\n"))
{
    //Yes(Y) key is pressed.
    console.log("Good! Let's start playing.");
}
else
{
    //No(N) key is pressed.
    console.log("Read the instructions again.");
}
console.log("------------------");
//play function
function play(question,correctAnswer)
{
    var userAnswer = readlineSync.question("Enter the correct option: ");
    if(userAnswer==questionList[i].correctAnswer)
    {
        console.log("you are right!");
        score = score+1;
    }
    else
    {
        console.log("You are wrong!");
        score = score+0;
    }
    console.log("Your current score is: ",score);
    console.log("------------------");

}
//QuestionList
var questionList =
 [
    {
        question: "1. Where do you live? ",
        a: "[a]: Serampore",
        b: "[b]: Kolkata",
        c: "[c]: Chandanagar",
        correctAnswer: "a",
    },
    {
        question: "2. What is my age? ",
        a: "[a]: 21",
        b: "[b]: 23",
        c: "[c]: 20",
        correctAnswer: "c",
    },
    {
        question: "3. What is my favorite food? ",
        a: "[a]: Pizza",
        b: "[b]: Chicken Roll",
        c: "[c]: Biriyani",
        correctAnswer: "b",
    },
    {
        question: "4. What is my favorite color? ",
        a: "[a]: Black",
        b: "[b]: Blue",
        c: "[c]: Pink",
    },
]   
//calling the function
for(i=0;i<questionList.length;i++)
{
    var currentQuestion = questionList[i].question;
    var optionOne = questionList[i].a;
    var optionTwo = questionList[i].b;
    var optionThree = questionList[i].c;
    console.log(currentQuestion);
    console.log(optionOne);
    console.log(optionTwo);
    console.log(optionThree);

    play(currentQuestion.question,currentQuestion.correctAnswer);
}
console.log("Well Done!");
console.log("Your final score: ",score);
console.log("------------------");
//Scoreboard
var highScore ={
    name: "dummyName",
    score: 2,
} 
if(score>=highScore.score)
{
    highScore.score = score;
    console.log("The highest score, "+highScore.score+", is made by you"+userName);

}
else
{
    console.log("Too bad! You could not beat the higest score");
    console.log("the highest score is: ",highScore);
}


    
