import { GameObjects, Scene } from "phaser";
import { Chemp } from "../../classes/chemp";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import HolyGrail from "phaser3-rex-plugins/templates/ui/holygrail/HolyGrail";
import Anchor from "phaser3-rex-plugins/plugins/behaviors/anchor/Anchor";
import { Pasture } from "../pasture";

 export class Home extends Scene{
    
   // homeUI: HolyGrail = new HolyGrail(this)
    rexUI: RexUIPlugin;
    container: HolyGrail;
    content: Scene;
 

    constructor(){
        super('home-scene');
    }


    preload(){
    }

    create(){

        

        this.container = this.buildUI()

        this.scene.launch("pasture");

        
        this.add.existing(this.container);


        

        
        
        
       
    }

    update(){
        
       
    }


    buildUI(){
        
        var screenWidth = this.game.canvas.width;
        var screenHeight= this.game.canvas.height;

        var sideWidth = screenWidth *0.1;
        var footerHeight = screenHeight * 0.52;
        var footerWidth = screenWidth - (2 * sideWidth)

        
        var header = new GameObjects.Rectangle(this, 
            screenWidth/2, //x
            screenHeight * 0.025,//y 
            screenWidth, //width
            screenHeight * 0.05,//height 
            1)//colour

        var leftside = new GameObjects.Rectangle(this, 
            sideWidth /2, 
            (header.height + screenHeight)/2, 
            sideWidth, 
            this.game.canvas.height - header.height , 
            100 )

        var rightside = new GameObjects.Rectangle(this, 
            screenWidth - (sideWidth /2), 
            (header.height + screenHeight)/2, 
            sideWidth, 
            this.game.canvas.height - header.height, 
            100 )

        var footer = new GameObjects.Rectangle(this,
            sideWidth + footerWidth/2,
            screenHeight - (footerHeight/2),
            footerWidth,
            footerHeight, 
            1)


        var UI = this.rexUI.add.holyGrail({
            x: 0,
            y: 0,
            width: this.game.canvas.width,
            height: this.game.canvas.height,
            layoutMode:3,
            header: header,
            leftSide: leftside,
            rightSide: rightside,
            footer: footer

        });





        UI.drawBounds(this.add.graphics(), 0xff0000);



        return UI;
    }

 }