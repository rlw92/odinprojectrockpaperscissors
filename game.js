let ps = 0;
    let cs =  0;
    let draws = 0;
    document.querySelector(".ps").textContent = "PLAYER SCORE: " + ps;
    document.querySelector(".cs").textContent = "COMPUTER SCORE: " + cs;

function playRound(player) {

    /* just for now while i import the other code
    if(player === computer){console.log("Match")}
    if(player != computer){console.log("No match")}
    console.log("player:" + player);
    console.log("computer:"+ computer);
    */

    let computer = computerPlays();

    

    if (player === computer) {alert("draw"); draws++} 
    else if (player==="rock" && computer === "scissors"){alert("rock beats scissors you win"); ps++} 
    else if (player==="rock" && computer === "paper"){alert("paper beats rock you lose"); cs++}
    else if (player==="paper" && computer === "scissors"){alert("scissors beats paper you lose"); cs++} 
    else if (player==="paper" && computer === "rock"){alert("paper beats rock you win"); ps++}
    else if (player==="scissors" && computer === "rock"){alert("rock beats scissors you lose"); cs++} 
    else if (player==="scissors" && computer === "paper"){alert("scissors beats paper you win"); ps++}
      
    document.querySelector(".ps").textContent = "PLAYER SCORE: " + ps;
    document.querySelector(".cs").textContent = "COMPUTER SCORE: " + cs;
    

    console.log("Computer chose " + computer);
    console.log("Player chose " + player );
    console.log("The scores are computer: " + cs);
    console.log("Draws:" + draws);
    console.log("Player: " + ps);
  }
  let choices = ["rock","paper","scissors"];
  
  function computerPlays(){let random = Math.floor(Math.random() * choices.length);
    let choice = choices[random];
    return choice;}
  const computer = computerPlays();
  
