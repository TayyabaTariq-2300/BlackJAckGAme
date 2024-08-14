//blackjack game

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let mssg = " ";

let mssgEl = document.getElementById("mssg-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

let player = {
   name : prompt("Enter your name..."),
   chips : " "
};
let playerEl = document.getElementById("player-el");
playerEl.innerText = player.name  + ": ";

function startGame(){
   isAlive = true;
   let firstCard = getRandomNumber();
   let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
   sum = firstCard + secondCard;
   renderGame();
}

function renderGame() {
   cardEl.innerText = "Cards: ";
   for(let i = 0 ; i<cards.length ; i ++){
      cardEl.innerText +=   " "+cards[i];
   }
  
  sumEl.innerText = "Sum: " + sum;
  if (sum < 21) {
    mssg = "Do you want to draw a new card?";
    playerEl.innerText = player.name + ": ";                
  } else if (sum === 21) {
    mssg = "You've got Blackjack!";
    hasBlackJack = true;
    result();
  } else {
    mssg = "You're out of the game!";
    isAlive = false;
    result();
  }
  mssgEl.innerText = mssg;
}

function addCard() {
   if(isAlive === true && hasBlackJack === false){
      let newCard = getRandomNumber();
  sum += newCard;
  cards.push(newCard);
  renderGame();

   }
}

function getRandomNumber(){
   let randomNumber = Math.floor(Math.random()*13) + 1; //ranges from 0.000 to 12.999
   if(randomNumber === 1){
      return 11;
   }
   else if(randomNumber > 10){
      return 10;
   }
   else{
      return randomNumber;
   }
   
}
function result(){
   if(hasBlackJack === true){
      player.chips+=10;
      playerEl.innerText += "Wohooo! You have won " + player.chips + " points!";
   }
   else if(isAlive === false){
      player.chips = 0;
      playerEl.innerText += "Wanna try again?"; ;
   }
}

// practice
// let sentence = ["hello", "name", "is", "per"];
// let greetingsEl = document.getElementById("greetings-el");

// for(let i = 0; i<sentence.length; i++){
//    greetingsEl.innerText += " " +sentence[i]; 
// }

// let randomNumber =Math.floor(Math.random()*6); //ranges from 0 to 6(not inclusive of 6);
//    console.log(randomNumber);
// //floor method
//    let flooredNumber = Math.floor(3.51762);
//    console.log(flooredNumber);


//    //rollDice function
//    function rollDice(){
//       let rn = Math.floor(Math.random()*6) + 1; //1 to 6...
//       return rn;
//    }

//    console.log("This time:" + rollDice());

let person = {
   myName : "Tayyaba",
   age : 21,
   country : "Pakistan"
}

function logData(){
   console.log(person.myName + " is " + person.age + " years old and lives in " + person.country)
}

logData();

let largeCountries =  ["China", "India", "USA", "Indonesia", "Pakistan"];

for(let i = 0; i<largeCountries.length; i++){
   console.log("- " + largeCountries[i]);
}

let largeCountries1 =  ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

console.log(largeCountries1);
largeCountries1.pop();
console.log(largeCountries1);
largeCountries1.shift();
console.log(largeCountries1);

largeCountries1.push("Pakistan");
console.log(largeCountries1);
largeCountries1.unshift("China");
console.log(largeCountries1);

let game = ["rock", "paper", "scissors"];

function playGame(){
   let randomNumber =  Math.floor(Math.random()*3);
   console.log(randomNumber)
   return game[randomNumber];
}

console.log(playGame());