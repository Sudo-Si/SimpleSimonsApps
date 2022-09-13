//cache the dom
 /* inital score set to 0:0 */
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score"); //declaring the user score element obj
const computerScore_span = document.getElementById("computer-score"); //declaring the computer score element obj
const scoreBoard_div = document.querySelector(".score-board");  //declaring the  score-board element obj
const result_p =document.querySelector(".result > p"); //Dispaly results in a paragraph obj
//user choices
const rock_div = document.getElementById("r"); // rock user choice 
const paper_div = document.getElementById("p"); // paper user choice 
const scissors_div = document.getElementById("s"); // scissors user choice 

const userInput_span = document.getElementById("inpt-user-choice-output"); // dispaly of the users choice 
const computerInput_span = document.getElementById("computers-choice-output"); // dispaly of the computer choice choice 
const result_span = document.getElementById("result-output");   // shows outcome
 
//letter to word converter 
function convertToWord(letter){
    if(letter === "r" )return "Rock"
    if(letter === "p" )return "Paper";
    return("Scissors")
    }

    //win function Logic
function win(user,computer){
    userScore ++;
    const userChoice_div = document.getElementById(user)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(user) }  beats PC's  ${convertToWord(computer)}` ;
    computerInput_span.innerHTML= `Computer chose:   ${convertToWord(computer) }`;
    userInput_span.innerHTML= `User chose:  ${convertToWord(user)}`;
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() =>userChoice_div.classList.remove('green-glow'), 2000);
    
    }

    /*loss function Logic */
function loss(user,computer){  
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div =document.getElementById(user)
    result_p.innerHTML =`PC's ${convertToWord(computer)}   beats Your  ${convertToWord(user)}` ;
    computerInput_span.innerHTML= `Computer chose:   ${convertToWord(computer) }`;
    userInput_span.innerHTML= `User chose:  ${convertToWord(user)}`;
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 2000);
    }

    /* Draw Function Logic */
function draw(user,computer){ 
    const userChoice_div = document.getElementById(user) // declaring userchoice_div setting it to user object
    computerInput_span.innerHTML= `Computer chose:   ${convertToWord(computer) }`; //declaring userchoice_div setting it to user object
    userInput_span.innerHTML= `User chose:  ${convertToWord(user)}`;         // converted output to words to make results easy to read
    result_p.innerHTML = "Draw!";
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 2000);
    }

    // Game function logic 
function game(userChoice){
    const computerChoice = getComputerChoice();
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
        //computer choice logic
function getComputerChoice(){
    const choices =['r','p','s']
    const randomChoice =Math.floor(Math.random() * choices.length)
    return choices[randomChoice];
   }
        //event selection
function main(){
    rock_div.addEventListener('click', ()=> game ("r")
    )
    paper_div.addEventListener('click', ()=> game ("p")
    )
    scissors_div.addEventListener('click', ()=> game ("s")
    )
}


main();