function Fighter(objPropFighter){
        let name = objPropFighter.name;
        let damage = objPropFighter.damage;
        let hp = objPropFighter.hp;
        let strength = objPropFighter.strength;
        let agility = objPropFighter.agility;
        let wins = 0;
        let losses = 0;

    this.getName = function (){
        return name;
    }
    this.getDamage = function (){
        return damage;
    }
    this.getHealth = function (){
        return hp;
    }
    this.getStrength = function (){
        return strength;
    }
    this.getAgility = function (){
        return agility;
    }
    this.attack = function (fighter){
        let buff;
        let probabilityOfAttack = (buff = fighter.agility + fighter.strength) === 50
            ? buff + 1 
            : 100 - buff;
        let successfulRandomForAttack = Math.floor( Math.random() * 100) + 1;
    
        if(successfulRandomForAttack >= probabilityOfAttack){
            fighter.hp = fighter.hp - this.getDamage();
            console.log(`${getName} makes ${this.getDamage()} damage to ${fighter.name}`);
        }else{
            console.log(`${fighter.name} attack missed`);
        }
    }
    this.logCombatHistory = function (){
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }
}

let f1 = new Fighter({name: 'axi', damage: 35, hp: 100, strength: 40, agility: 25});
let f2 = new Fighter({name: 'mu', damage: 25, hp: 100, strength: 30, agility: 35});

f1.logCombatHistory();
console.log(f1.getName());