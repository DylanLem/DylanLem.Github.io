import { Vector } from "matter";
import { Entity } from "./entity";
import { GameObjects, Math } from "phaser";
import { chempState } from "./enums";


export class Chemp extends Entity{

    public state : chempState;
    
    public position: Math.Vector2; 

    private speed: number = 10;

    private initialized: boolean = false;

    private self: GameObjects.GameObject = this;


    constructor(scene: Phaser.Scene, x: number, y: number){
        
        super(scene, x, y, 'chemp');

        this.getBody().setSize(30, 30);
        this.getBody().setOffset(8, 0);

        this.setData("destination", new Math.Vector2(1,1));
        
        this.position = new Math.Vector2(x,y);
        

        this.state = chempState.Idle;

       
    }

    create(): void{
        
    }

    update(): void{
        if(!this.initialized){
            
            this.state = chempState.Idle;

            this.initialized = true;

            setInterval(this.findDestination, 2000);
            setInterval(() => console.log(this.getData("destination")), 1000)
        }
        
        
        
        
        this.getBody().setVelocity(0);


    
        let dVector = new Math.Vector2(this.getData('destination')).normalize().scale(this.speed);
        
       
        this.body?.velocity.set(dVector.x, dVector.y);
        this.getBody().gameObject.data.values
        
    }


    findDestination = () => {
        console.log('finding destination')
        this.state = chempState.Idle;
        
        this.getData('destination')
        

        switch (this.state){          
            case chempState.Idle:
                this.self.setData('destination', new Math.Vector2( Math.Between(-100,100), Math.Between(-100,100)));
              
                break;

            default:
                console.log('what da fuck');
        }
        
        
        
    };
    
}