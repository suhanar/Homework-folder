
let attack = document.getElementById('attack');
let retreat = document.getElementById('retreat');
let exit = document.getElementById('exit');

let textarea = document.getElementById('textarea');

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
            return alert(`PLAYER\n HULL : ${soldier.hull}\n FIREPOWER : ${soldier.firepower}\n ACCURACY :${soldier.accuracy} \n ---------------\n ALIEN \n HULL : ${alien1.shipArr[j].hull}\n FIREPOWER : ${alien1.shipArr[j].firepower}\n ACCURACY : ${alien1.shipArr[j].accuracy}`)
            //document.getElementById('textarea').innerHTML = `PLAYER\n HULL : ${soldier.hull}\n FIREPOWER : ${soldier.firepower}\n ACCURACY :${soldier.accuracy} \n ---------------\n ALIEN \n HULL : ${alien1.shipArr[j].hull}\n FIREPOWER : ${alien1.shipArr[j].firepower}\n ACCURACY : ${alien1.shipArr[j].accuracy}`
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
            
            textarea.innerHTML = '';
            //alert(`Successfull you defeat alien`);
            textarea.innerHTML=`Successfull you defeat alien`;
            textarea.style.color='green';
            textarea.style.fontSize = '25px';
            
            
            
            
            //alienDiv.removeChild(alienDiv.childNodes[0]);
            //alert('array length',arr);
            console.log("Aliens hull value is " ,alien1.shipArr[0].hull);
           
                
            break;
           
        }
            
       else{
            
            //alert('The Alien is alive')
            textarea.innerHTML='Alien is alive';
            textarea.style.color='red';
           
            textarea.innerHTML= "Alien is alive Be ready for the Alien attack"
            
        }
        
            //alert(soldier.hull);
        
            alien1.shipArr[0].attack(soldier);
            console.log("soldier hull",soldier.hull);
         
        if(soldier.hull <= 0 ){
            
            //alert(`Aliens defeted you!!!!`);
            textarea.innerHTML=`Aliens defeted you!!!!`;
           
            soldier.hull = 0;
           
            break;
            
        }
        // else{
        //     textarea.innerHTML = "Aliens Missed it !!!!! Great Job"
        // }
       arr--
        
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
            if(arr<=0){
                winnerSoldier();
                
              }
              if(soldier.hull <= 0){
                winnerAlien();
                
              }
           }
           
        
        
        const winnerSoldier = () => {
            //alert('Aliens all dead You win !!!!!!')
            textarea.innerHTML='Aliens all dead You win !!!!!!';
            //exit1();
        };
        const winnerAlien = () => {
            //alert('You are Dead GAME OVER!!!!!!!!!')
            textarea.innerHTML='You are Dead GAME OVER!!!!!!!!!';
            //exit1();
        }

const start = ()=>{
    alert('Welcome to Space Battle Game');
    const answer = prompt('Do you want to start the game ? If yes type "Y" or no type "N" ');
    if(answer.toLowerCase()=='y'){
        alert('Welcome player you are going to attack the first alien ship Be prepared!!!!');
        currentStatus();
        
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
           //winner();
               
          
           
        
    
  })
}
