let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userpara=document.querySelector("#user-score");
let comppara=document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice); 
    
    })
})

const playGame=(userchoice) => {
    console.log("user choice=",userchoice);
    const compchoice = genComChoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice)
    {
        drawGame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")  // comp have 2 options: paper,scissors
        {
            userwin= compchoice==="paper"? false : true;
        }
        else if(userchoice==="paper")  //scissors,rock
        {
            userwin= compchoice==="scissors"? false : true;
        }
        else{
            userwin= compchoice==="rock"? false : true; 
        }
        showWinner(userwin,userchoice,compchoice);
    }

}

const showWinner=(userwin,userchoice,compchoice) => {
    if(userwin){
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userpara.innerText=userscore;
    }
    else{
        msg.innerText=`you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        comppara.innerText=compscore;

    }

}

const genComChoice=() => {
     const options=["rock","paper","scissors"];
     const randIndx=Math.floor(Math.random()*3);
     return options[randIndx];
}

const drawGame=() => {
    console.log("the game was draw");
    msg.innerText="its a draw!";
    msg.style.backgroundColor="black";


}


