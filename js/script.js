// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

  var moves = ["rock","paper","scissors"]
  var numberX = Math.random();
  var numberY = numberX* 3
  var numberN = Math.floor(numberY);
  console.log(numberN)

$("#shoot").click(function(){
  let playerInput = $("#input").val();
  var playerMove = playerInput.toLowerCase();
  
  if (playerMove === "rock"){
    
      if (numberN === "rock"){
        $("#result").append("Tie!")
      }else if (numberN === "paper"){
        $("#result").append("Bot Wins!")
      }else if (numberN === "scissors"){
        $("#result").append("Player Wins!")
      }
  
  }else if (playerMove === "paper"){
    
    if (numberN === "rock"){
        $("#result").append("Player Wins!")
      }else if (numberN === "paper"){
        $("#result").append("Tie!")
      }else if (numberN === "scissors"){
        $("#result").append("Bot Wins!")
      }
  }else if (playerMove === "scissors")
        $("#result").append("Player Wins!")
      }else if (numberN === "paper"){
        $("#result").append("Player Wins!")
      }else if (numberN === "scissors"){
        $("#result").append("Bot Wins!")
      }
  }
  
});

// DOCUMENT READY FUNCTION BELOW

