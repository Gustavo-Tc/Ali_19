import { GameObject } from "../GameObject.js";
import { Vector2 } from "../Vector2.js";
import { Sprite } from "../Sprite.js";
import { resources } from "../Resource.js";
import { Rectangle } from "../Rectangle.js";

export class Gate_auto extends GameObject{
    
    constructor(x,y,isKey = true){
        super({
            position: new Vector2(x,y)
        })
        this.isKey = isKey;
        this.body = new Sprite({
            resource: resources.images.gate_block,
            frameSize: new Vector2(16,16)
        });
        
        this.rectangle = new Rectangle(
            this.position.x, this.position.y,16,16
        );
        
        this.active = true;
    }
    
    draw(ctx){
        if(this.active){
            this.body.draw(ctx,this.position.x, 
            this.position.y);
        }else{
            //this.body_active.draw(ctx,this.position.x, this.position.y);
        }
    }
    
    step(delta){
    this.rectangle.x = this.position.x;
    this.rectangle.y = this.position.y;
        
    }
    
    onColliderEnter(other){

    }
    
    onColliderExit(other){
        
    }
    
    onColliderPush(other, direction){
        
    }
}