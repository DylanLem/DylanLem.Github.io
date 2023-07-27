import { Vector } from "matter";
import { Entity } from "./entity";
import { GameObjects, Math } from "phaser";
import { ChempState, Rarities } from "./enums";


export class Chemp extends Entity{

    public state : ChempState;
    

    
    private rarity: Rarities = 0;
    
    private speed: number = 10;

    private initialized: boolean = false;

    private self: GameObjects.GameObject = this;


    constructor(scene: Phaser.Scene, x: number, y: number){
        
        super(scene, x, y, 'chemp');

        this.getBody().setSize(30, 30);
        this.getBody().setOffset(8, 0);

        this.setData("destination", new Math.Vector2(1,1));
        
        this.setInteractive();

        
        this.on('pointerdown', () => console.log("chempspot: " ,  this.x, " " , this.y) )
        this.on('pointerdownoutside', () => console.log("mousespot: " , this.scene.game.input.mousePointer?.position, " " , this.y) )
        this.state = ChempState.Idle;

       
    }

    create(): void{
        
    }

    update(): void{
        if(!this.initialized){            
            this.state = ChempState.Idle;
            this.initialized = true;
            setInterval(this.findDestination, 2000);
        }
        
        console.log('this might be where it all goes wrong')
        
        
        this.getBody().setVelocity(0);


    
        let dVector = new Math.Vector2(this.getData('destination')).normalize().scale(this.speed);
        
       
        this.body?.velocity.set(dVector.x, dVector.y);
        this.getBody().gameObject.data.values
        
    }


    findDestination = () => {
        this.state = ChempState.Idle;
        switch (this.state){          
            case ChempState.Idle:
                this.self.setData('destination', new Math.Vector2( Math.Between(-100,100), Math.Between(-100,100)));
              
                break;

            default:
                console.log('what da fuck');
        } 
    };
    
    getInfo = () => {

        return [
            {}
        ]
    }
}