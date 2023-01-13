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


const numberOfShip = 6;
let i = 0;
while(i<numberOfShip){
    
  alien1.addArr();
  
    i++;
}


const game = ()=>{
    const arr = alien1.shipArr;
    const randomArr= Math.floor(Math.random()*arr.length);
    
    while(arr.length>0){
        soldier.attack(arr[0]);
        if(arr[0].hull<=0){
            arr.shift();
            console.log('Success alien died');
            console.log(arr);
            break;
        }
        else{
            console.log('Alien is alive!!');
            console.log(arr);
        }
        console.log(randomArr);
        arr[randomArr].attack(soldier);
        if(soldier.hull<=0){
            console.log('You defeated');
            break;
        }
        else{
            console.log('Good they didnt touch you!!!');
            
        }


    }
}
game();