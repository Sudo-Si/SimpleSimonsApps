// magic 8 logic

 

let userName ='Jane'; 

let userQuestion = 'Will i go to the beach tomorrow?'; 

userName? console.log(`Hello,${userName}`) && console.log (userQuestion):console.log('Hello'); 

console.log(`${userName} asked ${userQuestion}`); 

//rounds the number off with math floor creating random number range between 1-8 

 let randomNumber = Math.floor(Math.random()*8); 

// console.log(randomNumber) 

let eightBall = ''; 

// eightBall ===  

eightBall = randomNumber 

 

switch( eightBall ){ 

 case 1: 

console.log('It is certain'); 

break; 

case 2: 

console.log('It is decidedly so'); 

break; 

case 3: 

console.log('Reply hazy try again'); 

break; 

case 4: 

console.log('Cannot predict now'); 

break; 

case 5: 

console.log('Do not count on it'); 

break; 

case 6: 

console.log('My sources say no'); 

break; 

case 7: 

console.log('Outlook not so good'); 

break; 

default: 

console.log('Signs point to yes') 

break; 

} 