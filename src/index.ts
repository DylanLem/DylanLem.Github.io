import {Game, Types} from 'phaser';
import {Home, LoadingScene} from './scenes';


const gameConfig: Types.Core.GameConfig = {
        title: "Chempions!!!",

    type: Phaser.WEBGL,
    parent: 'game',
    backgroundColor: '#3f05ff',
    
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: "100%",
        height: "100%",
    },
    physics: {
        default: 'arcade',
        arcade: {
        debug: false,
        },
    },
    render: {
        antialiasGL: false,
        pixelArt: true,
    },
    callbacks: {
        postBoot: () => {
        window.sizeChanged();
        },
    },
    canvasStyle: `position: fixed; display: inline-block; width: 10%; height: 10%;`,
    autoFocus: true,
    audio: {
        disableWebAudio: false,
    },
    scene: [LoadingScene, Home],


    
};


window.sizeChanged = () => {
    if (window.game.isBooted) {
      setTimeout(() => {
        window.game.scale.resize(window.innerWidth, window.innerHeight);
        //window.game.canvas.setAttribute(
        //  'style',
        //  `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
       //);
      }, 100);
    }
  };

window.onresize = () => window.sizeChanged();

window.game = new Game(gameConfig);
