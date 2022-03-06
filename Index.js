var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("What's Your Name...?\n");
console.log("welcome..!",userName,"\nI hope YOU KNOW Shrikant..!\n");
function play(question,answer){

  var userAnswer = readLineSync.question(question);
  if(userAnswer === answer){
    console.log("Right...!");
    score = score + 1,"\n\n";
    
    console.log("your score is now: ",score)
  } else{
    console.log("wrong..!\n");
  }

  console.log("_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*\n");


  
}

var myQuestionsArray = [
  {   
Question: "who is shrikant's favourite hero?\n",
  Answer: "vijay"
  },
  
  {   
Question: "what is shrikant's favourite food?\n",
  Answer: "pav bhaji"
  },
  
  {   
Question: "what is shrikant's primary school name?\n",
  Answer: "marol kannada school"
  },
  
  {   
Question: "shrikant's birth month\n?",
  Answer: "june"
  }
  
];


for(i=0;i<myQuestionsArray.length;i++){
  play(myQuestionsArray[i].Question,myQuestionsArray[i].Answer);
    
}
if(score > 2){
console.log("thank's for your time, you know shrikant.!")}
else{
  console.log("sorry..! you dont know much about shrikant")
}
  


