// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

  var moves = ["rock","paper","scissors"]
  var numberX = Math.random();
  var numberY = numberX* 3;
  var numberN = Math.floor(numberY);
  var numberC = moves[numberN];

$("#shoot").click(function(){
  let playerInput = $("#input").val();
  var playerMove = playerInput.toLowerCase();
  $("#userChoice").append(playerMove);
  $("#computerChoice").append(numberC);
  
  if (playerMove === "rock"){
    
      if (numberC === "rock"){
        $("#result").append("Tie!");
      }else if (numberC === "paper"){
        $("#result").append("Bot Wins!");
      }else if (numberC === "scissors"){
        $("#result").append("Player Wins!");
      }
  
  }else if (playerMove === "paper"){
    
    if (numberC === "rock"){
        $("#result").append("Player Wins!");
      }else if (numberC === "paper"){
        $("#result").append("Tie!");
      }else if (numberC === "scissors"){
        $("#result").append("Bot Wins!");
      }
  }else if (playerMove === "scissors")
      if (numberC === "rock"){
        $("#result").append("Bot Wins!");
      }else if (numberC === "paper"){
        $("#result").append("Player Wins!");
      }else if (numberC === "scissors"){
        $("#result").append("Tie!");
      }
  
                                  
  
});

// DOCUMENT READY FUNCTION BELOW

