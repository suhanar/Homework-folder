//const prompt = require('prompt-sync')();

console.log('window is loaded');
setTimeout(function () {  
alert('Welcome to  Space Battle Grounda ! ');  
gameload();
}, 2000);
const startGameBtn = document.getElementById('start-game-btn');
const RESULT_PLAYER_WINS = 'Captain OF USSAssembly Wins';
const RESULT_COMPUTER_WINS = 'Aliens Wins';
class USSAssembly {  
    constructor() 
    {    
        this.hull = 40;    
        this.firepower = 5;    
        this.accuracy = 0.7;   
         this.isAlive = true; 
     }
  attack(wader) 
    {    
    let ranNum = Math.random();    
    // console.log(`Accuracy threshold is ${ranNum}`);    
    if (ranNum < this.accuracy) 
    {     
        
        //document.getElementById('sound').play();     
     //console.log(`It's a direct hit!! Well done Capitan!`);     
      wader.hull = wader.hull - this.firepower;      
      //console.log(`alien has ${wader.hull} hull points left.`);
    }
}
}
      //   if (wader.hull <= 0) {     
         //     wader.isAlive = false;      
         //     console.log(`Alien ship is destroyed !!`);     
          //   }      
          // } else {      
            //   console.log(`you missed!`);      
            //    }  }}
const captain = new USSAssembly();





      class AlienShip {  
        constructor() 
        {    
            //this.isAlive = true;    
            this.shiparr = [];  
        }
  addalienArr = () => {    
    let hull = Math.floor(Math.random() * (7 - 3) + 3);    
    let firepower = Math.floor(Math.random() * (5 - 2) + 2);    
    let accuracy = Math.random() * (0.8 - 0.6) + 0.6;   
    this.shiparr.push({ hull: hull, firepower: firepower, accuracy: accuracy,attack: this.attack});  
};
  attack(wader) {   
     let ranNum = Math.random();    
    // console.log(`Accuracy threshold is ${ranNum}`);    
    if (ranNum < this.accuracy) 
    {     
        // console.log(`You've been hit!`);
      wader.hull = wader.hull - this.firepower;     
       //   console.log(`captain has ${wader.hull} hull points left.`);
      //   if (wader.hull <= 0) {    
          //     wader.isAlive = false;     
           //     console.log(`Your game is over!!! `);    
             //   }      // } 
             //else {      //   console.log(`You dodged the attack!`);      //   
     } 
    }}

const alien1 = new AlienShip();
const noOfAlienShip = 6;
let i = 0;
while (i < noOfAlienShip) {  
    alien1.addalienArr();  
    i++;
}
// const battle = (captain, alien) => {//   while (captain.isAlive && alien1.isAlive) {//     captain.attack(alien);//     if (alien1.isAlive) {//       alien.attack(captain);//     }//   }// };


const retreat = () => {  
    //captain.hull = 0;  
    console.log('game over');
    alert(`Game over!!!!`);
};
// const gameOver = () => {};





const gameReload = () => {  
    // retreat();  
    const selection = prompt('Want to Play again ? Type yes or No');  
    if (selection.toLowerCase() == 'yes') 
    {    alert(`Welcome Again Captain ,Buckle Up for the fight`); 
        console.log('welcome again')
       window.location.reload();  
    } else {    
        alert('Good Bye !!!!');    
        console.log('good bye')
        window.close();  
    
    }};



const gameStart = () => {  
    alert('Lets Battle Begin');  
    console.log('lets begin')
    // let lastAttack = 'captain';  
    let arr = alien1.shiparr.length; 
    console.log(arr);
     while (arr > 0) { 
        
       
        captain.attack(alien1.shiparr[0]);    
        if (alien1.shiparr[0].hull < 0) {      
          
            alien1.shiparr.shift();
           
            console.log(`Alien ship is destroyed !!!`);      
            alert(`Alien ship is destroyed !!! `);      
            
            console.log(alien1.shiparr);  
            if(alien1.shiparr.length == 0){
                console.log('array is completed');
                console.log('winner is captain');
                break;
            }
           
        } else {
            console.log('alien alive')
           
         alert(`Alien alive  ..Evil wins !!! take overt the galaxy !!!!!!!!!!`);  
         //break;
        }   
          
           alien1.shiparr[0].attack(captain);   
            console.log('test', captain.hull);    
            //console.log('test', JSON.stringify(alien1.shiparr));    
            if (captain.hull <= 0) {     
                
                  captain.hull = 0;      
                  alert(`${RESULT_COMPUTER_WINS}`); 
                  console.log('alien destroyed u') ;
                  
                  break; 
                //   if(captain.hull == 0){
                //     break;
                //   }
            
                 
                } else {     
                          
                     alert(`${RESULT_PLAYER_WINS}`); 
                    console.log('they didnt touch u')
                     //break;     
                        
                    }    
                     
            }  
                //getWinner();  
                // gameReload();
            };



            const getWinner = () => {  
                if (alien1.shiparr.length == 0) 
                {    
                    return RESULT_PLAYER_WINS;  
                    console.log('winner is captain')
                }  // else {  //   return RESULT_COMPUTER_WINS;  // }  
                if (captain.hull === 0) 
                {    return RESULT_COMPUTER_WINS;  
                    console.log('winner is alien')
                }};
        


            const gameload = () => {  
                let selection = prompt('Want to join the game ? Type yes or No'); 
                 if (selection.toLowerCase() == 'y') 
                 {    
                    alert(`Welcome Captain ,Buckle Up for the fight`); 
                    console.log('welcome')  
                    start();  
                    //gameStart();
                }
            };
            
            //gameload();



// window.addEventListener('DOMContentLoaded', (event) => {//   const audio = document.querySelector('audio');//   audio.volume = 0.2;//   audio.play();// });

const start = () => 
{  startGameBtn.addEventListener('click', function () {    
    console.log('Game is starting...');    
    gameStart();
    //  console.log(playerSelection);  
});
};








































