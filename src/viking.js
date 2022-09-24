// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam
  }

  receiveDamage(damage) {
    this.health  = this.health - damage;
    if (this.health !== 0) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health !== 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
   constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
   }
   addViking(vikingSoldier){
    this.vikingArmy.push(vikingSoldier)
   }
   addSaxon(saxonSoldier){
    this.saxonArmy.push(saxonSoldier)
   }
   vikingAttack(){
    saxon.receiveDamage(this.viking.strength)
   }
   saxonAttack(){}
   showStatus() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy[i] === 0){
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
   } 
}
