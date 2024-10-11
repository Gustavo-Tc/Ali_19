import { GameObject } from "../GameObject.js";
import { Vector2 } from "../Vector2.js";
import { Sprite } from "../Sprite.js";
import { resources } from "../Resource.js";
import { FrameIndexPattern } from "../FrameIndexPattern.js";
import { Rectangle } from "../Rectangle.js";
import { Hero } from './Hero/Hero.js';
import { Button_Single} from "./Button_single.js"
import { Button_Hold} from "./Button_hold.js"

export class KeyHandler extends GameObject{
    
    constructor(keys){
        super({
            position: new Vector2(0,0),
        });
        this.children = keys;
    }

    draw(ctx){
        
        this.children.forEach(key => {
            key.draw(ctx);
        });
        
    }
    
    step(delta){

    }

    checkIfCollided(playerRectangle){
        this.children.forEach(key => {
            if(key.rectangle.Intercept(playerRectangle)){
                key.onColliderEnter();
            }else{
                key.onColliderExit();
            }
        });
    }
}