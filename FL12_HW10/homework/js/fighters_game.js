function Fighter(objPropFighter){
        let name = objPropFighter.name;
        let damage = objPropFighter.damage;
        let hp = objPropFighter.hp;
        let strength = objPropFighter.strength;
        let agility = objPropFighter.agility;

    getName(){
        return name;
    }
    getDamage(){
        return damage;
    }
    getHealth(){
        return hp;
    }
    getStrength(){
        return strength;
    }
    getAgility(){
        return agility;
    }
    attack(fighter){
        let buff;
        let probabilityOfAttack = (buff = fighter.agility + fighter.strength == 50) 
            ? buff +1 
            : 100 - buff;
        let successfulRandomForAttack = Math.floor( Math.random() * 100) + 1;
    
        if(successfulRandomForAttack >= probabilityOfAttack){
            fighter.hp = fighter.hp - getDamage();
            console.log(`${getName} makes ${getDamage()} damage to ${fighter.name}`);
        }else{
            console.log(`${fighter.name} attack missed`);
        }
    }
    logCombatHistory(){

    }
}