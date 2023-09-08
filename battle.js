// Any game object. Has a name, description.
class Entity {
    constructor() {
        this.name; //The name of the item.
        this.description; //The description of the item.
        this.xPos;
        this.yPos;
        this.canTake; //Whether or not an entity is able to be taken by the player.
        this.canEquip; //Whether or not an entity is able to be equipped by the player.
    }

    takeEntity(actor) {
        if (this.canTake === true) {
            actor.inventory.push(this);
        }
    }
}

class Equipment extends Entity {
    constructor(name) {
        super();
        this.name = name;
        this.canEquip = true;
        this.canTake = true;
    }
}

// Any living being within the game. Player, NPC, Enemy.
class Actor extends Entity{
    constructor() {
        super();
        this.xPos = 0;
        this.yPos = 0;
        this.level = 1;
        this.exp = 0;
        this.hp = 100;
        this.maxHp = 120;
        this.damage = 10;
        this.inventory = [];
        this.equipped = {
            head: 'nothing',
            chest: 'nothing',
            hands: 'nothing',
            legs: 'nothing',
            boots: 'nothing',
            weapon: 'nothing', //Primary damage dealing weapon.
            offhand: 'nothing', //Shield, orbs, two-handed, etc.
            trinket: 'nothing' //Ring, amulet, jewelry, magic items.
        };
        this.canEquip = false;
        this.canTake = false;
    }
    
    getHP() {
      return this.hp;
    }

    reduceHP(hp) {
      hp > this.maxHp ? this.hp = this.maxHp : this.hp = hp;
    }

    getInventory() {
        for (let item in this.inventory) {
            console.log(this.inventory[item].name);
        }
    }
};

class Player extends Actor {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// Generates a random whole number up to a given range limit.
function getRandom(rangeLimit){
    return Math.ceil(Math.random() * rangeLimit);
}

//############################################################################################################################################################################

battle = (attacker, defender) => {
    defender.reduceHP(defender.getHP() - getRandom(attacker.damage));
}

const p = new Player("Knight");
const e = new Actor("Monster")

console.log(p.inventory);
const i = new Equipment("Sword");
i.takeEntity(p);
console.log(p.inventory);
p.getInventory();
console.log(p);