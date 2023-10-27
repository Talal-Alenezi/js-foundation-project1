// Main
game()

// Functions

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    let choices = [`Rock`, `Paper`, `Scissors`]
    return choices[choice]
}

function round(computerSelection, playerSelection){
    let result =''
    // Computer Rock
    if(computerSelection == `Rock`){
        playerSelection == `Rock`? result='Tie! Try again'
        : playerSelection==`Paper`? result='YOU WON!'
        :result='You Lose! Try again'
    }

    // Computer Paper
    else if(computerSelection == `Paper`){
        playerSelection == `Rock`?result='You Lose! Try again'
        : playerSelection==`Paper`? result='Tie! Try again'
        :result='YOU WON!'
    }
    
    // Computer Scissors
    else if(computerSelection == `Scissors`){
        playerSelection == `Rock`?result='YOU WON!'
        : playerSelection==`Paper`? result='You Lose! Try again'
        :result='Tie! Try again'
    }
    return  result
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(i=0;i<5;i++){
        computerChoice = getComputerChoice()
        let playerChoice = prompt(`Rock? Paper? or Scissors?`)
        let result = round(computerChoice,playerChoice);
        console.log(`You Chose `+playerChoice+` Computer Chose `+computerChoice)
        console.log(result)
        if(result=='YOU WON!')
            playerScore++;
        else if(result == 'You Lose! Try again' )
            computerScore++;
        console.log(`Player Score = `+playerScore+ ` Computer Score = `+computerScore)
    }

    if(playerScore > computerScore)
        console.log(`YOU WON THE GAME!!!`)
    
}