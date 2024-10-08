import { GameObject } from "../../GameObject.js";
import { Vector2 } from "../../Vector2.js";
import { Sprite } from "../../Sprite.js";
import { resources } from "../../Resource.js";
import { FrameIndexPattern } from "../../FrameIndexPattern.js";
import { WALK_DOWN, WALK_UP, WALK_LEFT, WALK_RIGHT ,STAND_DOWN, STAND_UP, STAND_LEFT, STAND_RIGHT} from "./heroAnimations.js";
import { Animations } from "../../Animations.js"
import { Input } from "../../Input.js";
import { UP, DOWN, LEFT, RIGHT} from "../../Input.js";

export class Hero extends GameObject{

    constructor(x,y, input)
    {
        super({
            position: new Vector2(x,y),
            input: new Input()
        });

        this.lastDirection = DOWN;
        
        this.input = input;

        this.body = new Sprite({
            resource: resources.images.hero,
            frameSize: new Vector2(32,32),
            hFrames: 3,
            vFrames: 8,
            frame: 1,
            position: new Vector2(16 * 6, 16 * 5),
            animations: new Animations({
                walkDown: new FrameIndexPattern(WALK_DOWN),
                walkUp: new FrameIndexPattern(WALK_UP),
                walkLeft: new FrameIndexPattern(WALK_LEFT),
                walkRight: new FrameIndexPattern(WALK_RIGHT),

                standDown: new FrameIndexPattern(STAND_DOWN),
                standUp: new FrameIndexPattern(STAND_UP),
                standLeft: new FrameIndexPattern(STAND_LEFT),
                standRight: new FrameIndexPattern(STAND_RIGHT)
            })
        })
    }

    Move(){
        
        if(!this.input.direction.equals(new Vector2(0,0))){
            if( this.input.lastDirection === "DOWN") {
                this.body.animations.play("walkDown");
                this.lastDirection = DOWN;
            }
        
            if( this.input.lastDirection === "UP") {
                this.body.animations.play("walkUp");
                this.lastDirection = UP;
            }
        
            if( this.input.lastDirection === "LEFT") {
                this.body.animations.play("walkLeft");
                this.lastDirection = LEFT;
            }
        
            if( this.input.lastDirection === "RIGHT") {
                this.body.animations.play("walkRight");
                this.lastDirection = RIGHT;
            }
        }else{
            if(this.lastDirection === UP){
                this.body.animations.play("standUp");
            }
            if(this.lastDirection === DOWN){
                this.body.animations.play("standDown");
            }
            if(this.lastDirection === LEFT){
                this.body.animations.play("standLeft");
            }
            if(this.lastDirection === RIGHT){
                this.body.animations.play("standRight");
            }

        }
    
        this.position.add(this.input.direction);
    
        if(this.body.getMapPos().equals(new Vector2(3,3))){
            console.log("ACHOOOU!");
        }
    
        //console.log(hero.getMapPos());
    }

    draw(ctx, x,y){
        this.body.draw(ctx, this.position.x, this.position.y);
    }

    step(delta){
        this.body.step(delta);
        console.log(this.lastDirection);
        this.Move();
    }
}