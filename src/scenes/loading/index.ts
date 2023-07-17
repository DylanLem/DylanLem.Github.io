import {GameObjects, Scene} from 'phaser';

export class LoadingScene extends Scene{

    private splash!: GameObjects.Sprite;

    constructor() {
        super('loading-scene');
      }

      preload(): void{
        this.load.baseURL = 'assets/';
        // key: 'stay-tuned'
        this.load.image('stay-tuned', 'splash/stay-tuned.png');

        this.load.image('chemp', 'sprites/chemp.png');
      }


      create(): void {
        this.splash = this.add.sprite(600,300,"stay-tuned");
        
        this.scene.start('home-scene')
      }

      
      

}