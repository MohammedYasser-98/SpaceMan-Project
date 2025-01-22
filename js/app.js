/*-------------------------------- Constants --------------------------------*/
const RandomWords = ['ROCK', 'PAPER', 'SCISSORS', 'CAT', 'SHAKKING', 'ALMOST', 'BEND', 'PHONE', 'JAVASCRIPT', 'MATH', 'SPACE', 'SPIDER', 'GALAXY', 'BERRY', 'RASPBERRY'];

/*--------------------------Variabuls-------------------------------------*/
let guesses = [];
let Attempts = 6;
let chosenWord = '';
let arrayOfChosenWord ='';
let lettersLocation = '';

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.alphabet-button');
const display = document.querySelector('.display');
const messageEl = document.querySelector('.message')
const start = document.querySelector('.button');
const secretLtrs = document.querySelector('#div1');
const rePlayGame = document.querySelector('#replay-game')


/*--------------------------Functions--------------------------------*/
const displayExtend = () =>{
   
    const number = Math.floor(Math.random() * RandomWords.length);
    chosenWord = RandomWords[number]
    arrayOfChosenWord = chosenWord.split('');
    console.log(arrayOfChosenWord)
    console.log(RandomWords[number])
    
    
    for(let i =0; i < arrayOfChosenWord.length; i++){
        
        
        const ltr = document.createElement('div');
        ltr.classList.add('secret-ltr');
        ltr.id = i 
        display.append(ltr)
        
        buttons.forEach((button) => {
            button.addEventListener('click', (event) =>{
                
                event.target.disabled = true;
                
                if(event.target.innerText === arrayOfChosenWord[ltr.id]){
                    let secretLetters = document.querySelectorAll('.secret-ltr')
                    lettersLocation = document.getElementById(ltr.id);
                    
                    lettersLocation.textContent = event.target.innerText;                                                                  
                }                                                           
            })
        });
        
        
    }
    
}

const endingGame = ()=>{
    
    buttons.forEach((button) => {
        button.addEventListener('click', (event) =>{
            
            guesses.push(event.target.innerText) 
            event.target.disabled = true;
            
            if(!arrayOfChosenWord.includes(event.target.innerText)){
                Attempts = Attempts - 1;
                console.log('Attempts :', Attempts) 
                messageEl.textContent = `${Attempts} attempts remaining`
            }
            
            if(Attempts === 0){
                
                for(i=0; i<26; i++){
                    
                    document.getElementById(i).disabled = true;
                    
                }  
                messageEl.textContent = `GAME OVER! The word was ${chosenWord}`
                
                
                
            } else if(arrayOfChosenWord.every((letters)=> guesses.includes(letters))){
                
                for(i2=0; i2<26; i2++){
                    
                    document.getElementById(i2).disabled = true;            
                }
                messageEl.textContent = 'You Won!'
            }
            
        })
    });    
}

endingGame()


const rePlay = ()=>{
    
    Attempts = 6;
    messageEl.textContent = `6 attempts remaining`
    let e = document.querySelector('.display');
    e.innerHTML = "";
    guesses = [];
    
    for(i=0; i<26; i++){
        
        document.getElementById(i).disabled = false;
        
    }
    
}

/*----------------------------EVENT LISTENERS--------------------------------*/    
rePlayGame.addEventListener('click', rePlay)
rePlayGame.addEventListener('click', displayExtend)















/*--------------------graveyard-----------------------------------*/
//const clickedButton = (event)=>{
    
    // if(event.target.innerText === arrayOfChosenWord[i]){
        
    // disEl.textContent = event.target.innerText;
    
    
    
    // }
    
    //}
    // const ltr = document.createElement('div');
    // ltr.classList.add('secret-ltr');
    // console.log(ltr)
    
    
    // const disEl = document.getElementById(ltr.id)
    
    // console.log(ltr.id)
    
    // document.querySelector('.test').append(ltr)
    // console.log(secretLtrs)
    
    // ltr.textContent = "_"
    // console.log(ltr)
    
    