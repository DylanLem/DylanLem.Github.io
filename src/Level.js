export class Level{

  constructor(height, width){
    this.name = "defaultLevel";
    this.levelType = "dungeon"
    this.height = height;
    this.width = width;
    this.levelData = null;
  }
}

class Tile {
  constructor(contents="wall"){
    this.contents = contents;
  }
}


export class WorldGenerator{

  static generate_level(level){

    for(let i=0; i<level.height; i++){
      for(let j=0; j<level.width; j++){
        level.levelData[i][j] = new Tile();
      }
    }

    let maxWidth, maxHeight = 15;
    let minWidth, minHeight = 4;

  }
}
