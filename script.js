//Variables
let pScore = document.querySelector('.player-score p');
let cScore = document.querySelector('.computer-score p');
let NewPScore = 0;
let NewCScore = 0;

const match = document.querySelector('.match');
const intro = document.querySelector('.intro');
const playButton = document.querySelector('.intro button');
const pHand = document.querySelector('.player-hand');
const cHand = document.querySelector('.computer-hand');
const optionsButtons = document.querySelectorAll('.options button');

const computerOptions = ['rock','paper','scissors'];

//functions
function startMatch(){
    match.style.display = "flex";
    intro.style.display = "none";
};

function compareHands(playerChoice,computerChoice){
    const result = document.querySelector('.result');
   if(playerChoice === computerChoice){
       result.innerHTML = "It is a tie";
       return;
   }else if(playerChoice === 'rock'){
       if(computerChoice === 'paper'){
        result.innerHTML = "You Lose";
        NewCScore++;
        return;
       }else{
        result.innerHTML = "You Win";
        NewPScore++;
        return;
       }

    }else if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            result.innerHTML = "You Lose";
            NewCScore++;
            return;
           }else{
            result.innerHTML = "You Win";
            NewPScore++;
            return;
            }   
    }else if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            result.innerHTML = "You Lose";
            NewCScore++;
            return;
           }else{
            result.innerHTML = "You Win";
            NewPScore++;
            }   
    }
   
};

//Events

//start the match when click the button 
playButton.addEventListener('click',startMatch);

//choose option
optionsButtons.forEach(option => {
    option.addEventListener('click', function(){
        pHand.src = `images/rock.png`;
        cHand.src = `images/rock.png`;
        pHand.style.animation = 'shakePlayer 2s ease-in-out';
        cHand.style.animation = 'shakeComputer 2s ease-in-out';
        setTimeout(() => {
            //player option
            pHand.src = `images/${this.textContent}.png`;
            //computer option
            let computerChoice = Math.floor(Math.random()*3);
            cHand.src = `images/${computerOptions[computerChoice]}.png`;
            compareHands(this.textContent,computerOptions[computerChoice]);
            pScore.textContent = NewPScore;
            cScore.textContent = NewCScore;
            pHand.style.animation = '';
            cHand.style.animation = '';
        },2000);

        
    });
});

