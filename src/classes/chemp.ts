import { Vector } from "matter";
import { Entity } from "./entity";
import { Math } from "phaser";
import { chempState } from "../enums";


export class Chemp extends Entity{

    public state : chempState = chempState.Idle;
    private destination : Math.Vector2 = new Math.Vector2
    public position: Math.Vector2; 

    private speed: number = 10;

    constructor(scene: Phaser.Scene, x: number, y: number){
        
        super(scene, x, y, 'chemp');

        this.getBody().setSize(30, 30);
        this.getBody().setOffset(8, 0);

        this.position = new Math.Vector2(x,y);

       
    }

    create(): void{
        this.findDestination();
    }

    update(): void{
        
        
        this.getBody().setVelocity(0);

        let delta: Math.Vector2 = this.position.subtract(this.destination).normalize();
                let dVector = delta.scale(this.speed);

                this.body?.velocity.set(dVector.x, dVector.y);
        
    }


    findDestination() : void {
        console.log('finding destination')

        switch (this.state){
            case chempState.Idle:
                
                this.destination = new Math.Vector2( Math.Between(-100,100), Math.Between(-100,100)).add(this.position);
                break;

        }

        setTimeout(this.findDestination, 5000);
        
    }
    
}