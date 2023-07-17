import { GameObjects, Scene } from "phaser";
import { Chemp } from "../../classes/chemp";

 export class Home extends Scene{
    private chempList!: Chemp[];

    constructor(){
        super('home-scene');
        this.chempList = [];
    }

    create() : void{
        this.chempList.push(new Chemp(this, 100,100));
    }

    update() : void{
        this.chempList.forEach(chemp => {
            chemp.update();
        });
    }

 }