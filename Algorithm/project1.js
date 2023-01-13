let prompt = require('prompt-sync')();


class USAssembly {
    constructor(){
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = 0.7
    }
    attack(enemy){
        if(Math.random() < this.accuracy ){
            enemy.hull = enemy.hull - this.firepower;
        }
    }
}

const soldier = new USAssembly();
//console.log(soldier.hull);

class AlienShip{
    constructor(){
        this.shipArr = []
        // this.hull = Math.floor(Math.random()*(7-3))+3;
        // this.firepower = Math.floor(Math.random()*(5-2))+2;
        // this.accuracy = Math.random() * (.8 - .6) + .6;
       // this.shipArr.push({hull:this.hull,firepower:this.firepower,accuracy:this.accuracy});
        
    }
    addArr = () =>{
        let hull = Math.floor(Math.random()*(7-3))+3;
        let firepower = Math.floor(Math.random()*(5-2))+2;
        let accuracy = Math.random() * (.8 - .6) + .6;
        //const alien = new AlienShip(hull,firepower,accuracy);
       // const alien = this.hull,this.firepower,this.accuracy;
       // this.shipArr.push({hull:hull,firepower:firepower,accuracy:accuracy});
       //this.shipArr.push({hull:this.hull,firepower:this.firepower,accuracy:this.accuracy});
      
    
            this.shipArr.push({hull:hull,firepower:firepower,accuracy:accuracy,attack:this.attack});
         


       
    }
    attack(enemy){
        if(Math.random() < this.accuracy ){
            enemy.hull = enemy.hull - this.firepower;
        }
    }
    
}

const alien1 = new AlienShip();
const arr = []
const numberOfShip = 6;
let i = 0;
while(i<numberOfShip){
    
  alien1.addArr();
    i++;
}
//console.log(alien1.shipArr);


const exit = ()=>{
    const exit = prompt('Do you want to exit the screen If yes type "Y" or no type "N"');
    if(exit.toLowerCase()=='y'){
        console.log('Good Bye');
    }
    else{
        start();
    }
}

const currentStatus = () =>{
    for(let j=0;j<alien1.shipArr.length;j++){
        return console.log(`Your current status is ${soldier.hull},${soldier.firepower},${soldier.accuracy} and the alien status is ${alien1.shipArr[j].hull},${alien1.shipArr[j].firepower},${alien1.shipArr[j].accuracy}`)
    }
    }

const attackAlien = () => {
    const answer = prompt('Do you want to attack if yes type "A" or if not Type "N"');
    if(answer.toLowerCase()=='a'){
        //callGame();
        gameStart();
        attackAlien();
       
    }
    else{
        exit();
    }
}


const gameStart = () =>{
    //turn for the soldier

   

   let arr = alien1.shipArr.length;
   //console.log('array length',arr);
   let soldierDead = false;
   let s = soldier.hull;
   while(arr>0){

   
   
    soldier.attack(alien1.shipArr[0]);

   
    if(alien1.shipArr[0].hull < 0){
        alien1.shipArr.shift();
        
        console.log(alien1.shipArr);
       // for(let k=0;k<alien1.shipArr.length;k++){
        console.log(`Successfull you defeat alien`);
        console.log('array length',arr);
        
        break;
       // }
       
    //    if(alien1.shipArr.length === 0 ){
    //     console.log('Aliens all died you win!!!!!!!');
    //     exit();
    //     }
        
    }
    
    else{
        console.log('The Alien is alive')
    }

    console.log(soldier.hull);

        alien1.shipArr[0].attack(soldier);
 
if(soldier.hull <= 0 ){
    
    console.log(`Aliens defeted you!!!!`);
   
    soldier.hull = 0;
    soldierDead=true;
    break;
    
}

   }
  arr--;
 winner();

   }


   const winner = () => {
    let arr = alien1.shipArr.length;
    if(arr===0){
        winnerSoldier();
        exit();
      }
      if(soldier.hull == 0){
        winnerAlien();
        exit();
      }
   }
   


const winnerSoldier = () => {
    console.log('Aliens all dead You win !!!!!!')
};
const winnerAlien = () => {
    console.log('You are Dead GAME OVER!!!!!!!!!')
}
   



const start = ()=>{
    console.log('Welcome to Space Battle Game');
    const answer = prompt('Do you want to start the game ? If yes type "Y" or no type "N" ');
    if(answer.toLowerCase()=='y'){
        console.log('Welcome player you are going to attack the first alien ship Be prepared!!!!');
        currentStatus();
        console.log('The first alien ship is about to hit you!!!');
       attackAlien();
      
       

    }
    else{
        
        exit();
    }
    

}


start();

// const callGame = () =>{
    
//    let i = 0;
//    let arr = alien1.shipArr.length;
   
//     // while(i<alien1.shipArr.length){
//     //     gameStart();
//     //     i++;
//     // }
//     while(arr<0){
//         console.log(arr);
//         gameStart();
//         arr--;
//     }
//     //exit();
   

// }
// callGame();



