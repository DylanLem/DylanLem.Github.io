import { Scene } from "phaser";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'

export class MainHUD extends Scene{
    constructor(){
        super('main-hud');

    }

    preload(){
        this.load.scenePlugin("rexUI");
    }
    
}