import {GameObjects, Scene} from 'phaser';

export class LoadingScene extends Scene{

    private splash!: GameObjects.Sprite;

    constructor() {
        super('loading-scene');
      }

      create(): void {
        this.splash = this.add.sprite(600,300,"stay-tuned");
        
      }

      preload(): void{
        this.load.baseURL = 'assets/';
        // key: 'stay-tuned'
        this.load.image('stay-tuned', 'splash/stay-tuned.png');
      }

      

}