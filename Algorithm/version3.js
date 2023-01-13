let attack = document.getElementById('attack');
let retreat = document.getElementById('retreat');
let exit = document.getElementById('exit');
let army = document.getElementById('army');
let army1 = document.getElementsByClassName('army');
//army.scrollIntoView();
//army.scrollIntoView({ behavior: 'smooth' })
// let objDiv = army;
// objDiv.scrollTop = objDiv.scrollHeight;
// const scrollableDiv = army;
// scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
const scrollableDiv = army;
const observer = new MutationObserver(() => {
  scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
});
observer.observe(scrollableDiv, { childList: true });



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
            //return alert(`Your current status is ${soldier.hull},${soldier.firepower},${soldier.accuracy} and the alien status is ${alien1.shipArr[j].hull},${alien1.shipArr[j].firepower},${alien1.shipArr[j].accuracy}`)
            return alert(`PLAYER\n HULL : ${soldier.hull}\n FIREPOWER : ${soldier.firepower}\n ACCURACY :${soldier.accuracy} \n ---------------\n ALIEN \n HULL : ${alien1.shipArr[j].hull}\n FIREPOWER : ${alien1.shipArr[j].firepower}\n ACCURACY : ${alien1.shipArr[j].accuracy}`);
        }
        }

const exit1 = ()=>{
            let arr = alien1.shipArr.length;
            const exit = prompt('Do you want to exit the screen If yes type "Y" or no type "N"');
            if(exit.toLowerCase()=='y'){
                alert('Good Bye');
                window.close();
            }
            else{

                if(arr>0){
                    
                    //attackAlien();
                    gameStart();
                }
                else{
                    //alert('you want to start again');
                    window.location.reload();
                }
                if(soldier.hull===0 && arr>0){
                    window.location.reload();
                }
                
                
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


    
    currentStatus();
    
    let arr = alien1.shipArr.length;
    
    let s = soldier.hull;
    
    while(arr>0){
      console.log('calling soldier attack');
       soldier.attack(alien1.shipArr[0]);
      
       if(alien1.shipArr[0].hull < 0){
          
            alien1.shipArr.shift();
            let p = document.createElement('p');
            p.innerHTML = `Successfull you defeat alien.Ready to attack next alien ship`;
            p.style.color = 'green';
            
            p.classList.add('border1');
            
            army.appendChild(p);
           
            alienDiv.removeChild(alienDiv.childNodes[arr]);
          
            

            console.log(alienDiv.childNodes[arr+2]);
            console.log("length of img",alienDiv.childNodes.length);
            console.log('Array length is ',alien1.shipArr.length);
            
        
           
           
           
            break;
       
           
        }
            
       else{
       
            let p1 = document.createElement('p');
            p1.innerHTML = 'Alien is Alive.Alien is going to attack you now Good Luck!!!!';
            p1.style.color = 'orange';
           p1.classList.add('border1');
            army.appendChild(p1);
            
          
            
        }
            console.log('calling alien attack');
            

           
            alien1.shipArr[0].attack(soldier);
           
            console.log("soldier hull",soldier.hull);
         
        if(soldier.hull <= 0 ){
            
            //alert(`Aliens defeted you!!!!`);
            let p2 = document.createElement('p');
            p2.innerHTML = `Aliens defeted you!!!!`;
            p2.style.color = 'red';
           p2.classList.add('border1');
            army.appendChild(p2);
           
           
            soldier.hull = 0;
            //break;

            
            
            
        }
        else{
            // alert(`Good job alien didnt touch you!!!!!`)
            // alert('Next is your turn be prepared');
           // army1.removeChild(p);
           setTimeout(()=>{
            let p3 = document.createElement('p');
            p3.innerHTML = `Good job alien didnt touch you!!!!!`;
            p3.style.color = 'purple';
           // p3.style.border = "2px solid black";
           p3.classList.add('border1');
            army.appendChild(p3);
           

           },800)
           break;
            
        }
       arr--

       
      
       
    }
    //alert('Click Attack to attack next ship');
    winner();
      

        
}

const clickAttack = ()=>{
    //alert('Click Attack to attack first ship');
    document.getElementById('para').style.visibility='visible';
}
        
        
           const winner = () => {
            let arr = alien1.shipArr.length;
            
              if(soldier.hull == 0){
                document.getElementById('defeat-msg2').style.display='inline-block';
                document.getElementById('second').style.display='inline-block'
                //exit1();
                setTimeout(()=>{
                    exit1();
                },2000)
              }
              if(arr==0){
                document.getElementById('defeat-msg').style.display='inline-block';
                document.getElementById('first').style.display='inline-block'
                setTimeout(()=>{
                    exit1();
                },2000)
                
                //exit1();
              }
           }
           
        
        
        const winnerSoldier = () => {
            //alert('Aliens all dead You win !!!!!!')
           
        };
        const winnerAlien = () => {
            //alert('You are Dead GAME OVER!!!!!!!!!')
        
        }

let exitBtn = document.getElementById('exit');
exitBtn.addEventListener('click',function(){
    exit1();
}) 

let retreatBtn = document.getElementById('retreat');
retreatBtn.addEventListener('click',function(){
    //soldier.hull = 0;
    alert('You Loose the battle!!!!');
    exit1();
})



const start = ()=>{
    alert('Welcome to Space Battle Game');
    const answer = prompt('Do you want to start the game ? If yes type "Y" or no type "N" ');
    if(answer.toLowerCase()=='y'){
        alert('Welcome player you are going to attack the first alien ship Be prepared!!!!');
        currentStatus();
        
       attackAlien();
       alert('Click Attack to attack first ship');
       clickAttack();
 

    }
    else{
        
        exit1();
    }
    

}

window.onload = function(){ 
    //alert("Hi there");
    setTimeout(start,1000);

    
    }


const attackAlien = () => { attack.addEventListener('click',function(){

                gameStart();
 
  })
}

const reload = ()=>{
    const reload = prompt("Do you want to reload the game . If yes type 'y' if no type 'n' ");
    if(reload.toLowerCase()=='y'){
        
        window.location.reload();
   

    }

    else{
        exit1();
    }
}

let reloadBtn = document.getElementById('reload');
reloadBtn.addEventListener('click',function(){
      reload();
})



