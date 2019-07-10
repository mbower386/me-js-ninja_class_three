class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("My ninja name is " + this.name + "!");
  }
  showStats() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
  }
  drinkSake() {
    this.health += 10;
  }
  punch(enemy) {
    if (typeof (enemy) === Ninja) {
      enemy.health -= 5;
      console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
    }
  }
  kick() {
    if (typeof (enemy) === Ninja) {
      enemy.health -= 15;
      console.log(enemy.name + " was punched by " + this.name + " and lost 15 health!");
    }
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

