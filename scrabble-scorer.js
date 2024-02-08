// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
 };
 
 function runProgram() {
    word = initialPrompt();
   
    scorerPrompt(word);
 }
 
  function oldScrabbleScorer(word) {
     word = word.toUpperCase();
    let sum = 0;
  
    for (let i = 0; i < word.length; i++) {
      for (const pointValue in oldPointStructure) {
        if (oldPointStructure[pointValue].includes(word[i])) {
          sum += parseInt(pointValue);
         }
       }
     }
    return sum;
   }
 
 // your job is to finish writing these functions and variables that we've named //
 // don't change the names or your program won't work as expected. //
 
 function initialPrompt() {
   let name = input.question('Enter your name:  ');
   console.log(`Hello ${name}`);
   console.log("Let's play some scrabble!\n");
   let wordToScore = input.question(`Enter a word to score:  `);
   return wordToScore;
   
 };
 
      let Alg1= {
        name: "Simple", 
        description: "One point per character.",
        scorerFunction: simpleScorer
      };
      let Alg2 = {
         name: "Vowel Bonus", 
         description: "Vowels are 3 pts, consonants are 1 pt.",
         scorerFunction: vowelBonusScorer
      };
      let Alg3 = {
         name: "Scrabble", 
         description: "The traditional scoring algorithm.",
         scorerFunction: scrabbleScorer
   };
   const scoringAlgorithms= [Alg1, Alg2, Alg3];
   function scorerPrompt( word) {
   
   let scoringAlgorithm;
   console.log(`Which scoring algorithm would you like to use? \n \n 0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n 1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n 2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
   
   scoringAlgorithm = input.question('Enter 0, 1, or 2: ');
 
   if(scoringAlgorithm === 0) {
     console.log("\nalgorithm name: ", scoringAlgorithms[0].name);
     console.log("scoringFunction result: ", scoringAlgorithms[0].scorerFunction(word));
   }
   if(scoringAlgorithm === 1) {
     console.log("\nalgorithm name: ", scoringAlgorithms[1].name);
     console.log("scoringFunction result: ", scoringAlgorithms[1].scorerFunction(word));
   }
   if(scoringAlgorithm == 2) {
     console.log("\nalgorithm name: ", scoringAlgorithms[2].name);
     console.log("scoringFunction result: ", scoringAlgorithms[2].scorerFunction(word));
   }
 }
 
 function simpleScorer(word){
   let simpleScorePointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']};
      console.log("WGAT ARE YOI: ", word)
   word = word.toUpperCase();
   let sum = 0;
   
    for (let i = 0; i < word.length; i++) {
      for (const pointValue in simpleScorePointStructure) {
        if (simpleScorePointStructure[pointValue].includes(word[i])) {
         sum += parseInt(pointValue);
        }
    }
 }
   return sum;
 }
 
 function vowelBonusScorer(word){
   let simpleScorePointStructure = {
   1: ['L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']  
   };
 
   word = word.toUpperCase();
    let sum = 0;
  
    for (let i = 0; i < word.length; i++) {
      for (const pointValue in simpleScorePointStructure) {
        if (simpleScorePointStructure[pointValue].includes(word[i])) {
          sum += parseInt(pointValue);
        }
    }
 }
   return sum;
 }
 
 function scrabbleScorer(word){
   word = word.toLowerCase();
   let sum = 0;
 
   for (let i = 0; i < word.length; i++) {
     sum += newPointStructure[word[i]];
   }
   return sum;
 }
 
 function transform(oldPointStructure) {
   let newStructure = {};
  
    for (const key in oldPointStructure) {
     newKeys = oldPointStructure[key];
     
     for (let i = 0; i < newKeys.length; i++) {
       newStructure[newKeys[i].toLowerCase()] = Number(key);
     }
   }
   return newStructure;
 };
 
 let newPointStructure = transform(oldPointStructure);


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt,
   scoringAlgorithms: scoringAlgorithms
};
