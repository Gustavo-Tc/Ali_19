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
    
    constructor(clearFunction, keys, obstacles, map){
        super({
            position: new Vector2(0,0),
        });
        this.children = keys;

        this.obstacles = obstacles;
        this.cleared = false;

        this.clear_played = false;
        this.clearFunction = clearFunction;
        this.map = map;
    }

    draw(ctx){
        
        this.children.forEach(key => {
            key.draw(ctx);
        });

        this.obstacles.forEach(key => {
            key.draw(ctx);
        });
        
    }
    
    step(delta){

    }
    
    updateMapTiles(){
            this.obstacles.forEach(element => {
                if(element.active){
                    this.map.setCell(element.position.divide(16), 1);
                }
                else
                {
                        this.map.setCell(element.position.divide(16),0);
                }
            });
        
    }


    checkIfCollided(playerRectangle){
        this.children.forEach(key => {
            if(key.rectangle.Intercept(playerRectangle)){
                key.onColliderEnter();
            }else{
                key.onColliderExit();
            }
        });

        this.checkClear();

    }

    checkClear(){
        let cleared = true;
        this.children.forEach(key => {
            if(key.isKey){
              if(key.active === false) cleared = false;
            }
        });

        if(cleared && !this.clear_played){
            //resources.playSFX("sfx_clear");
            this.clear_played = true;

            this.clearFunction();

        }
        this.cleared = cleared;
        return cleared;
    }

    
}