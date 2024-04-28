let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const drawGame=()=>{
    console.log("game was draw");
}
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    let random=Math.floor(Math.random()*3);
    return options[random];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  }

const playGame=(userChoice)=>{
console.log("userchoice =",userChoice)
//generatee cmputer choice
const compChoice=compchoice();
console.log("comp choice =",compChoice);

if(userChoice===compChoice)
{
    drawGame();
}else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice)=>{ //Note this use of foreach
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        //console.log("choice was clicked",choiceId);
        playGame(choiceId); //This is where i got stuck. ***
    });
});























