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
var questionList = [
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
    
]