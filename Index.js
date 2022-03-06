var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's Your Name...? ");
console.log("welcome..!",userName," DO YOU KNOW Shrikant..!");

function play(question,answer){

  var userAnswer = readLineSync.question(question);
  if(userAnswer === answer){
    console.log("Right...!");
    score = score + 1,"\n\n";
    
    console.log("your score is now: ",score)
  } else{

    console.log("wrong..!\n");
  }

  console.log("_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*");


  
}

var myQuestionsArray = [
  {   
Question: "who is your favourite hero?",
  Answer: "Batman"
  },
  
  {   
Question: "what's your favourite hero's costume color?",
  Answer: "yellow"
  },
  
  {   
Question: "what's your primary school name?",
  Answer: "marol kannada school"
  },
  
  {   
Question: "How old are you?",
  Answer: "23"
  }
  
];


for(i=0;i<myQuestionsArray.length;i++){
  play(myQuestionsArray[i].Question,myQuestionsArray[i].Answer);
    
}
console.log("thank's for your time...")
