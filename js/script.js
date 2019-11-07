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
  var scoreboard = 

$("#shoot").click(function(){
  let playerInput = $("#input").val();
  var playerMove = playerInput.toLowerCase();
  $("#userChoice").text(playerMove);
  $("#computerChoice").text(numberC);
  
  if (playerMove === "rock"){
    
      if (numberC === "rock"){
        $("#result").text("Tie!");
      }else if (numberC === "paper"){
        $("#result").text("Bot Wins!");
      }else if (numberC === "scissors"){
        $("#result").text("Player Wins!");
      }
  
  }else if (playerMove === "paper"){
    
    if (numberC === "rock"){
        $("#result").text("Player Wins!");
      }else if (numberC === "paper"){
        $("#result").text("Tie!");
      }else if (numberC === "scissors"){
        $("#result").text("Bot Wins!");
      }
  }else if (playerMove === "scissors")
      if (numberC === "rock"){
        $("#result").text("Bot Wins!");
      }else if (numberC === "paper"){
        $("#result").text("Player Wins!");
      }else if (numberC === "scissors"){
        $("#result").text("Tie!");
      }
  
                                  
  
});

// DOCUMENT READY FUNCTION BELOW

