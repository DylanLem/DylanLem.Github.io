import { Data, Scene } from "phaser";
import { Chemp } from "../../classes/chemp";


export class Pasture extends Scene{
    chempList: Chemp[] = [];

    constructor(){
        let worldConfig = {
            key:'pasture',


            physics:{

                default: 'arcade',
                arcade:{
                    x:200,
                    y:25,
                    width:1000,
                    height:1000
                },

                
            }
        };

        super(worldConfig);
        this.chempList = [];
    }

    init(){
        
    }

    create(){
        this.chempList.push(new Chemp(this, 0,0)); 
        

     
    }

    update(){
        this.chempList.forEach(chemp => {
            chemp.update();
        });
    }

}