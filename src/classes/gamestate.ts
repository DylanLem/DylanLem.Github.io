import { Data, GameObjects, Scene } from "phaser";
import { Entity } from "./entity";
import { Chemp } from "./chemp";
import { PlayerData } from "./PlayerData";

export class gameState{
    private static instance: gameState;

    public Player: PlayerData ;

    private constructor(){
        this.Player = {
            nickname: "noob",
            chemps: []
        };



    }

    


    public static getInstance(): gameState{
        if(!gameState.instance){
            gameState.instance = new gameState();
        }
        

        return gameState.instance;
    }


    
    


}