//Rarity, Quality, Material, Type, Enchantment, Modifier


// MANDATORY IDENTIFIERS
// 2. Quality expresses the overall make of the item and how durable it is. It can be improved by reforging.
// 3. Material describes the base material that the item is made from. Certain materials are better than others.
// 4. Type represents the base descriptive category for the item, such as sword or helm.

// OPTIONAL IDENTIFIERS
// 1. Rarity expresses how difficult an item is to find from common to mythic. Common does not have this trait
// 5. Enchantment displays the magical effects that the item has been imbued with. Can be altered or changed with enchanting.
// 6. Modifiers represent how many times the item has been upgraded. Upgrades increase item stats and can be performed indefinitely with diminishing chances of success.


// Worn Iron Axe
// Uncommon Masterwork Steel Pauldrons
// Rare Fine Leather Chestplate of Defense
// Mythic Rusty Golden Broadsword of Frost +5

//https://www.almarsguides.com/retro/walkthroughs/GBA/games/BaldursGateDarkAlliance/Misc/Lists/Weapons/
//https://wowpedia.fandom.com/wiki/Quality

class Weapon {
    constructor(rarity = undefined, quality = "poor", material = "bronze", type = "dagger", enchantment = undefined, modifier = undefined){
        this.rarity = this.setRarity();
        this.quality = this.setQuality();
        this.material = this.setMaterial();
        this.type = this.setType();
        this.enchantment = this.setEnchantment();
        this.modifier = this.setModifier();
    }

    getItemName(){
        if(this.rarity === undefined && this.enchantment === undefined && this.modifier === undefined){
            console.log(`${this.quality} ${this.material} ${this.type}`);
        } else if (this.rarity === undefined && this.enchantment === undefined) {
            console.log(`${this.quality} ${this.material} ${this.type} +${this.modifier}`);
        } else if (this.rarity === undefined && this.modifier === undefined) {
            console.log(`${this.quality} ${this.material} ${this.type} of ${this.enchantment}`);
        } else if (this.enchantment === undefined && this.modifier === undefined) {
            console.log(`${this.rarity} ${this.quality} ${this.material} ${this.type}`);
        } else if (this.rarity === undefined) {
            console.log(`${this.quality} ${this.material} ${this.type} of ${this.enchantment} +${this.modifier}`);
        } else if (this.enchantment === undefined) {
            console.log(`${this.rarity} ${this.quality} ${this.material} ${this.type} +${this.modifier}`);
        } else if (this.modifier === undefined) {
            console.log(`${this.rarity} ${this.quality} ${this.material} ${this.type} of ${this.enchantment}`);
        } else {
            console.log(`${this.rarity} ${this.quality} ${this.material} ${this.type} of ${this.enchantment} +${this.modifier}`);
        }
    }

    setRarity(){
        let random = Math.round(Math.random() * 100);

        if(random >= 99) {
            return "Mythic";
        } else if (random >= 90) {
            return "Legendary";
        } else if (random >= 80) {
            return "Epic";
        } else if (random >= 65) {
            return "Rare";
        } else if (random >= 45) {
            return "Uncommon";
        } else {
            return undefined;
        }
    }

    setQuality(){
        let random = Math.round(Math.random() * 100);

        if(random >= 95) {
            return "Masterful";
        } else if (random >= 85) {
            return "Exceptional";
        } else if (random >= 70) {
            return "Superior";
        } else if (random >= 60) {
            return "Fine";
        } else if (random >= 40) {
            return "Quality"; //Standard.. Default?
        } else {
            return "Poor";
        }
    }

    setMaterial(){
        let random = Math.round(Math.random() * 100);

        if(random >= 90) {
            return "Adamantite";
        } else if (random >= 70) {
            return "Mithril";
        } else if (random >= 40) {
            return "Steel";
        } else if (random >= 25) {
            return "Iron";
        } else if (random >= 10) {
            return "Bronze";
        } else {
            return "Wooden";
        }
    }

    setType(){
        let random = Math.round(Math.random() * 100);

        if(random >= 85) {
            return "Sword";
        } else if (random >= 70) {
            return "Warhammer";
        } else if (random >= 55) {
            return "Spear";
        } else if (random >= 40) {
            return "Axe";
        } else if (random >= 25) {
            return "Mace";
        } else {
            return "Dagger";
        }
    }

    setEnchantment(){
        let random = Math.round(Math.random() * 100);

        if(random >= 90) {
            return "Flame";
        } else if (random >= 80) {
            return "Frost";
        } else if (random >= 70) {
            return "Lightning";
        } else if (random >= 60) {
            return "Poison";
        } else if (random >= 50) {
            return "Life";
        }  else if (random >= 40) {
            return "Death";
        }  else if (random >= 30) {
            return "Light";
        }  else if (random >= 20) {
            return "Darkness";
        }  else if (random >= 10) {
            return "Chaos";
        }  else {
            return undefined;
        }
        //Life, Death, Light, Darkness, Order, Chaos, Shadow, Arcana
    }

    setModifier(){

        let random = Math.round(Math.random(100) * 5);

        if(random > 0) {
            return random;
        } else {
            return undefined;
        }

    }
}
const a = new Weapon(undefined, "Fine", "Steel", "Broadsword", undefined, undefined);
const b = new Weapon(undefined, "Fine", "Steel", "Broadsword", undefined, undefined);
const c = new Weapon(undefined, "Fine", "Steel", "Broadsword", undefined, undefined);
const d = new Weapon(undefined, "Fine", "Steel", "Broadsword", undefined, undefined);
const e = new Weapon(undefined, "Fine", "Steel", "Broadsword", undefined, undefined);

a.getItemName();
b.getItemName();
c.getItemName();
d.getItemName();
e.getItemName();