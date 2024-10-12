import { GameObject } from "../GameObject.js";
import { Vector2 } from "../Vector2.js";
import { Sprite } from "../Sprite.js";
import { resources } from "../Resource.js";
import { Rectangle } from "../Rectangle.js";

export class Button_exit extends GameObject{
    
    constructor(x,y,nextIndex){
        super({
            position: new Vector2(x,y)
        })
        this.isKey = false;

        this.nextIndex = nextIndex;
        this.body = new Sprite({
            resource: resources.images.button_red_up,
            frameSize: new Vector2(16,16)
        });
        
        this.body_active = new Sprite({
            resource: resources.images.button_red_down,
            frameSize: new Vector2(16,16)
        });
        this.rectangle = new Rectangle(
            this.position.x + 2, this.position.y,16,16
        );
        
        this.active = false;
    }
    
    draw(ctx){
        if(!this.active){
            this.body.draw(ctx,this.position.x, 
            this.position.y);
        }else{
                      this.body_active.draw(ctx,this.position.x, 
            this.position.y);
        }
    }
    
    step(delta){
    this.rectangle.x = this.position.x;
    this.rectangle.y = this.position.y;
        
    }
    
    onColliderEnter(other){
        this.active = true;
         window.location.href = this.nextIndex;
    }
    
    onColliderExit(other){
        this.active = false;
    }
    
    onColliderPush(other, direction){
        
    }
}