var readlineSync = require("readline-sync");
var chalk = require('chalk');


var score = 0;

var userName =readlineSync.question(chalk.bgBlueBright("What is your name?: "));

console.log(chalk.bgYellow.white("Welcome",userName,"to my Bitcoin Quiz, Test your knowledge about the crypto world"));

function play(question,answer){
  var userAnswer = readlineSync.question(chalk.bgBlue(question))
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("You ar right!"));
    score ++;
    console.log(chalk.bgWhite.blue("Your Score:",score));
  }
  else {
    console.log(chalk.bgWhite.red("You are wrong!"));
    console.log(chalk.green("Correct Answer is:",answer));
    console.log(chalk.bgWhite.blue("Your Score:",score));
  }
}


questionList =[{
  question:"Who invented Bitcoin? ",
  answer:"Satoshi Nakamoto"
},
{
  question:"How many(in millions) bitcoins can ever exist ",
  answer:"21"
},
{
  question:"How many confirmations is considered safe for a Bitcoin transaction? ",
  answer:"6"
},
{
  question:"How fast each new Bitcoin block is found(in minutes)? ",
  answer:"10"
},
{
  question:"How many bitcoins is 1 satoshi? ",
  answer:"0.00000001"
},{
  question:"In what year was Bitcoin launched? ",
  answer:"2009"
},
{
  question:"What is the Blocksize Limit(in mb)? ",
  answer:"1"
},
{
  question:"What was the Reward for the First Bitcoin Mining? ",
  answer:"50"
},
{
  question:"What technology is Bitcoin built on? ",
  answer:"Blockchain"
},
{
  question:"Which site run by Ross Ulbricht was closed by the FBI for letting people buy drugs with Bitcoin? ",
  answer:"Silk Road"
}]


for (var i=0;i<questionList.length;i ++){
  currentQuestion = questionList[i];
  play(currentQuestion.question,currentQuestion.answer);
  if (score === 5){
    console.log(chalk.bgYellow("Your have reached Level One"))
    console.log(chalk.bgYellow("New Achievement Unlocked: TECKNO KING"))
  }
  else if(score === 8){
    console.log(chalk.bgYellow("Your have reached Level One"))
    console.log(chalk.bgYellow("New Achievement Unlocked: HODL MASTER"))
  }
  else if(score === 10){
    console.log(chalk.bgYellow("Your have reached Level Three"))
    console.log(chalk.bgYellow("New Achievement Unlocked: SATOSHI JR"))
  }
}

console.log(chalk.bgBlack("Yay!! Your Final Score: ",score));

var scoreDB = {
  "Jay":4,
  "Hari":3
}

for (var key in scoreDB){
  var highscore = scoreDB[key];
  if (score >= highscore){
    console.log(chalk.bgBlueBright("You have achieved a new highscore!!!!"))
    console.log(chalk.bgBlueBright("Please send a screenshot of your score to update the new highscore"))
    break;
  }
}

console.log(chalk.bgBlueBright("\nPrevious HighScores"));
console.log("-----------------")

for (var key in scoreDB){
  console.log(chalk.bgBlueBright(key,"-",scoreDB[key]))
}