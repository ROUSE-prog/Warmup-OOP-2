class Pokemon {
    constructor(names, level = 1) {
      this.names = names; 
      this.level = level;
      this.updateStage(); 
    }
  
    updateStage() {
      if (this.level >= 36) {
        this.stage = 3;
      } else if (this.level >= 16) {
        this.stage = 2;
      } else {
        this.stage = 1;
      }
  
      this.name = this.names[this.stage - 1];
  
      if (this.stage === 1) {
        this.moves = ["Scratch"];
      } else if (this.stage === 2) {
        this.moves = ["Scratch", "Flame Thrower"];
      } else if (this.stage === 3) {
        this.moves = ["Scratch", "Flame Thrower", "Fire Spin"];
      }
    }
  
    levelUp(levelIncrease = 1) {
      this.level += levelIncrease;
      this.updateStage();
      console.log(
        `${this.name} leveled up to level ${this.level}. ${this.name} is in Stage ${this.stage}!`
      );
    }
  
    attack() {
      const move =
        this.moves[Math.floor(Math.random() * this.moves.length)];
      console.log(`${this.name} used ${move}!`);
    }
  }
  
  let myPokemon = new Pokemon(["Charmander", "Charmeleon", "Charizard"]);
  myPokemon.levelUp(); 
  myPokemon.attack(); 
  myPokemon.levelUp(16);
  myPokemon.attack();    
  
  console.log(myPokemon);
 