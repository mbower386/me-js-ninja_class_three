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

    if (this.health > 100) {
      this.health = 100;
    }
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

  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
