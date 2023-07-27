import {Game,Types} from "phaser";
import {Home, LoadingScene} from './scenes';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import { Pasture } from "./scenes/pasture";



const gameConfig: Types.Core.GameConfig = {
        
    title: "Chempions!!!",
    type: Phaser.AUTO,
    parent: 'gameslice',
    backgroundColor: '#3f05ff',

    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight,

    },
    physics: {
        default: 'arcade',
        arcade: {
        debug: false,
        },
    },
    
    callbacks: {
        postBoot: () => {
        window.sizeChanged();
        },
    },
    
    autoFocus: true,
    audio: {
        disableWebAudio: false,
    },

    plugins:{
        scene: [{
            key: 'rexUI',
            plugin:RexUIPlugin,
            mapping: 'rexUI'
        }]
    },

    scene: [LoadingScene, Home, Pasture],

};



window.onresize = () => window.sizeChanged();



window.sizeChanged = () => {
if (window.game?.isBooted) {
  setTimeout(() => {
    window.game.scale.resize(window.innerWidth, window.innerHeight);
    

  }, 100);
}
};

window.game = new Game(gameConfig);

