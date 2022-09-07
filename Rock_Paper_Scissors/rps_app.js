//cache the dom

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p =document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userInput_span = document.getElementById("inpt-user-choice-output");
const computerInput_span = document.getElementById("computers-choice-output");
const result_span = document.getElementById("result-output"); 
 
function convertToWord(letter){
    if(letter === "r" )return "Rock"
    if(letter === "p" )return "Paper";
    return("Scissors")
    }
function win(user,computer){
    userScore ++;
    const userChoice_div = document.getElementById(user)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(user) }  beats PC's  ${convertToWord(computer)}` ;
    computerInput_span.innerHTML= "computer chose: " + computer;
    userInput_span.innerHTML= "User chose: " + user;
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() =>userChoice_div.classList.remove('green-glow'), 2000);
     // console.log(user)
    // console.log(computer)
    }

function loss(user,computer){  
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div =document.getElementById(user)
    result_p.innerHTML =`PC's ${convertToWord(computer)}   beats Your  ${convertToWord(user)}` ;
    computerInput_span.innerHTML= "computer chose: " + computer;
    userInput_span.innerHTML= "User chose: " + user;
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 2000);
    }

function draw(user,computer){ 
    const userChoice_div = document.getElementById(user)
    computerInput_span.innerHTML= "computer chose: " + computer;
    userInput_span.innerHTML= `User chose:  ${user}`;
    result_p.innerHTML = "Draw!";
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 2000);
    }

function game(userChoice){
        const computerChoice = getComputerChoice();
    // console.log(`Your Choice: ${userChoice}`)
    // console.log(`Computer Choice :${computerChoice}`)
        switch( userChoice + computerChoice){
            case "pr": 
            case "rs":
            case "sp": win(userChoice, computerChoice)
                result_span.innerHTML="You Won";
            break;
            case "ps":
            case "rp":
            case "sr":
                loss(userChoice, computerChoice)
                result_span.innerHTML="You Have Lost"
            break;
            case "ss":
            case "rr":
            case "pp":
                draw(userChoice, computerChoice)
                result_span.innerHTML="Draw"
            break;
            }
        }
function getComputerChoice(){
    const choices =['r','p','s']
    const randomChoice =Math.floor(Math.random() * choices.length)
    return choices[randomChoice];
   }

function main(){
        rock_div.addEventListener('click', ()=> game ("r")
        )
        paper_div.addEventListener('click', ()=> game ("p")
        )
        scissors_div.addEventListener('click', ()=> game ("s")
        )
    }


main();