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

    this.setHealth = function(health){
        hp = Math.floor(health);
    }
 
    this.attack = function (fighter){
        let buff;
        let probabilityOfAttack = (buff = fighter.getAgility() + fighter.getStrength()) === 50
            ? buff + 1 
            : 100 - buff;
        let successfulRandomForAttack = Math.floor( Math.random() * 100) + 1;

        if(successfulRandomForAttack >= probabilityOfAttack){
            fighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
        }else{
            console.log(`${fighter.getName()} attack missed`);
        }
    }

    this.logCombatHistory = function (){
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    }

    this.heal = function(addPercentageOfHp){
        let newHealth = hp + hp / 100 * addPercentageOfHp;

        newHealth = newHealth > 100 ? 100 : newHealth;
        if(hp === 0){
            newHealth = addPercentageOfHp;
        }
        console.log(`==>> ${this.getName()} was healed at ${Math.floor(newHealth)}hp`);
        this.setHealth(newHealth)
    }

    this.dealDamage = function(reducePercentageOfHp){
        let newHealth = hp - hp / 100 * reducePercentageOfHp;

        newHealth = newHealth < 0 ? 0 : newHealth;

        this.setHealth(newHealth);
    }

    this.addWin = function(){
        wins++;
    }

    this.addLoss = function(){
        losses++;
    }
}

function battle(ftr1, ftr2){
    if(ftr1.getHealth() <= 0){
        console.warn(`${ftr1.getName()} has no health to fight, needs to be healed`);
        return;
    }
    if(ftr2.getHealth() <= 0){
        console.warn(`${ftr2.getName()} has no health to fight, needs to be healed`);
        return;
    }
    
    do{
        ftr1.attack(ftr2);
        if(ftr2.getHealth() > 0){
            ftr2.attack(ftr1);
        }
    }while(ftr1.getHealth() > 0 && ftr2.getHealth() > 0)

    if(ftr1.getHealth() === 0){
        console.log(`!!! ==>> ${ftr2.getName()} is winner, The public is outraged!`);
        ftr2.addWin();
        ftr1.addLoss();
        ftr2.logCombatHistory();
    }
    if(ftr2.getHealth() === 0){
        console.log(`!!! ==>> ${ftr1.getName()} is winner, Congs!`);
        ftr1.addWin();
        ftr2.addLoss();
        ftr1.logCombatHistory();
    }
}

let f1 = new Fighter({name: 'Maximus', damage: 35, hp: 100, strength: 40, agility: 25});
let f2 = new Fighter({name: 'Commodus', damage: 25, hp: 100, strength: 30, agility: 35});

battle(f1, f2);
battle(f1, f2);
f2.heal(50);
battle(f1, f2);
battle(f1, f2);


