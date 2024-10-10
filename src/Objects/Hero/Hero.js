import { GameObject } from "../../GameObject.js";
import { Vector2 } from "../../Vector2.js";
import { Sprite } from "../../Sprite.js";
import { resources } from "../../Resource.js";
import { FrameIndexPattern } from "../../FrameIndexPattern.js";
import { WALK_DOWN, WALK_UP, WALK_LEFT, WALK_RIGHT ,STAND_DOWN, STAND_UP, STAND_LEFT, STAND_RIGHT} from "./heroAnimations.js";
import { Animations } from "../../Animations.js"
import { Input } from "../../Input.js";
import { UP, DOWN, LEFT, RIGHT} from "../../Input.js";
import { Rectangle } from "../../Rectangle.js";

export class Hero extends GameObject{

    constructor(x,y, input, map)
    {
        super({
            position: new Vector2(x,y),
            input: new Input()
        });

        this.lastDirection = DOWN;
        
        this.input = input;
        this.map = map;

        this.body = new Sprite({
            resource: resources.images.hero,
            frameSize: new Vector2(16,16),
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

        this.rectangle = new Rectangle(this.position.x, this.position.y, this.body.frameSize.x, this.body.frameSize.y);
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

            this.position.x += this.input.direction.x;
            if(this.input.direction.x < 0){
                if(this.map.getCell(new Vector2(this.position.x / 16, this.rectangle.Top() / 16)) === 1 ||
                this.map.getCell(new Vector2(this.position.x / 16, (this.rectangle.Bottom() - 1)/ 16)) === 1){
                    this.position.x -= this.input.direction.x;
                }
            }else if(this.input.direction.x > 0){
                if(this.map.getCell(new Vector2(this.rectangle.Right() / 16, this.rectangle.Top() / 16)) === 1 ||
                this.map.getCell(new Vector2(this.rectangle.Right() / 16, (this.rectangle.Bottom() - 1) / 16)) === 1){
                    this.position.x -= this.input.direction.x;
                }
            }

            
            
            this.position.y += this.input.direction.y;
            
            if(this.input.direction.y < 0){
                if(this.map.getCell(new Vector2(this.position.x / 16, this.position.y / 16)) === 1 ||
                this.map.getCell(new Vector2((this.rectangle.Right() - 1) / 16, this.position.y / 16)) === 1 ){
                    this.position.y -= this.input.direction.y;
                }
            }else if(this.input.direction.y > 0){
                if(this.map.getCell(new Vector2(this.rectangle.Left() / 16, this.rectangle.Bottom() / 16)) === 1 ||
                this.map.getCell(new Vector2((this.rectangle.Right() - 1) / 16, this.rectangle.Bottom() / 16)) === 1 ){
                    this.position.y -= this.input.direction.y;
                }
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
    
        //this.position.add(this.input.direction);
    
        if(this.body.getMapPos().equals(new Vector2(3,3))){
            console.log("ACHOOOU!");
        }
        
        

    }

    draw(ctx, x,y){
        this.body.draw(ctx, this.position.x - 6 * 16, this.position.y - 5 * 16);
    }

    step(delta){
        this.rectangle.x = this.position.x;
        this.rectangle.y = this.position.y;

        this.body.step(delta);
        this.Move();


        //console.log(this.getMapPos());

    }
}