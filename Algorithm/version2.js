let attack = document.getElementById('attack');
let retreat = document.getElementById('retreat');
let exit = document.getElementById('exit');

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


class AlienShip{
    constructor(){
        this.shipArr = []
       
    }
    addArr = () =>{
        let hull = Math.floor(Math.random()*(7-3))+3;
        let firepower = Math.floor(Math.random()*(5-2))+2;
        let accuracy = Math.random() * (.8 - .6) + .6;
        this.shipArr.push({hull:hull,firepower:firepower,accuracy:accuracy,attack:this.attack});
   
    }
    attack(enemy){
        if(Math.random() < this.accuracy ){
            enemy.hull = enemy.hull - this.firepower;
        }
    }
    
}

const alien1 = new AlienShip();

const alienDiv = document.getElementById('aliens');
const numberOfShip = 6;
let i = 0;
while(i<numberOfShip){
    
  alien1.addArr();
  let img = document.createElement('img');
  img.setAttribute('src', './image/gif3.webp');
  img.setAttribute("height", "200");
  img.setAttribute("width", "150");
  img.setAttribute("alt", `alienship${i}`);
  //img.src = './image/alien.jfif';
  
  alienDiv.appendChild(img);
    i++;
}



const currentStatus = () =>{
        for(let j=0;j<alien1.shipArr.length;j++){
            return alert(`Your current status is ${soldier.hull},${soldier.firepower},${soldier.accuracy} and the alien status is ${alien1.shipArr[j].hull},${alien1.shipArr[j].firepower},${alien1.shipArr[j].accuracy}`)
        }
        }

const exit1 = ()=>{
            const exit = prompt('Do you want to exit the screen If yes type "Y" or no type "N"');
            if(exit.toLowerCase()=='y'){
                alert('Good Bye');
            }
            else{
                start();
            }
        }


// const attackAlien = () => {
//     const answer = prompt('Do you want to attack if yes type "A" or if not Type "N"');
//         if(answer.toLowerCase()=='a'){
//                 //callGame();
//             gameStart();
//             attackAlien();
               
//             }
//             else{
//                 exit1();
//             }
//         }




const gameStart = () =>{
  
    let arr = alien1.shipArr.length;
    
    let s = soldier.hull;
    currentStatus();
   
    while(arr>0){
      
       soldier.attack(alien1.shipArr[0]);
      
       if(alien1.shipArr[0].hull < 0){
       
            alien1.shipArr.shift();

            //arr+2
           // alienDiv.childNodes[arr+2].style.animation = "aliens 2s";
           
                alienDiv.removeChild(alienDiv.childNodes[arr+2]);
           
            
           
                
                
                console.log(alienDiv.childNodes[arr+2]);
                console.log("length of img",alienDiv.childNodes.length);
                console.log('Array length is ',alien1.shipArr.length);
            
            
            
         
        
            //alien1.shipArr.shift();
            //alienDiv.removeChild(alienDiv.getElementsByTagName('img')[0]);
            
            
            alert(`Successfull you defeat alien.Ready to attack next alien ship`);
          
            //alienDiv.removeChild(alienDiv.childNodes[0]);
            //alert('array length',arr);
            console.log("Aliens hull value is " ,alien1.shipArr[0].hull);
           
                
            break;
           
        }
            
       else{
            alert('The Alien is alive');
            alert('Alien is going to attack you now Good Luck!!!!')
        }
        
            //alert(soldier.hull);
        
            alien1.shipArr[0].attack(soldier);
            console.log("soldier hull",soldier.hull);
         
        if(soldier.hull <= 0 ){
            
            alert(`Aliens defeted you!!!!`);
           
            soldier.hull = 0;
            
            break;
            
        }
        else{
            alert(`Good job alien didnt touch you!!!!!`)
            alert('Next is your turn be prepared');
        }
       //arr--
       winner();
    }
         // arr--;
        
         //clickAttack();
        
}

const clickAttack = ()=>{
    //alert('Click Attack to attack first ship');
    document.getElementById('para').style.visibility='visible';
}
        
        
           const winner = () => {
            let arr = alien1.shipArr.length;
            if(arr===0){
                winnerSoldier();
                exit1();
              }
              if(soldier.hull == 0){
                winnerAlien();
                exit1();
              }
           }
           
        
        
        const winnerSoldier = () => {
            alert('Aliens all dead You win !!!!!!')
        };
        const winnerAlien = () => {
            alert('You are Dead GAME OVER!!!!!!!!!')
        }

const start = ()=>{
    alert('Welcome to Space Battle Game');
    const answer = prompt('Do you want to start the game ? If yes type "Y" or no type "N" ');
    if(answer.toLowerCase()=='y'){
        alert('Welcome player you are going to attack the first alien ship Be prepared!!!!');
        
        
       attackAlien();
       clickAttack();
      
       

    }
    else{
        
        exit1();
    }
    

}

window.onload = function(){ 
    //alert("Hi there");
    setTimeout(start,1000);
    //start();
    
    }


const attackAlien = () => { attack.addEventListener('click',function(){

   
            gameStart();
           // attackAlien();
               
          
           
        
    
  })
}
