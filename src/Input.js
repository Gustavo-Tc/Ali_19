import { Vector2 } from "./Vector2.js";

export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export class Input{

    constructor(){

        this.lookHeldDirections = [];
        this.heldDirections = [];
        
        document.addEventListener("keydown", (e) => {
            //Qual direção está sendo pressionada


            if(e.code === "ArrowUp" || e.code === "KeyW"){
                this.onArrowPressed(UP);
                this.heldDirections[0] = new Vector2(0,-1);
            }
            if(e.code === "ArrowDown" || e.code === "KeyS"){
                this.onArrowPressed(DOWN);
                this.heldDirections[1] = new Vector2(0,1);
            }
            if(e.code === "ArrowLeft" || e.code === "KeyA"){
                this.onArrowPressed(LEFT);
                this.heldDirections[2] = new Vector2(-1,0);
            }
            if(e.code === "ArrowRight" || e.code === "KeyD"){
                this.onArrowPressed(RIGHT)
                this.heldDirections[3] = new Vector2(1,0);
            }
        })

        document.addEventListener("keyup", (e) => {
            //Qual direção está sendo pressionada
            if(e.code === "ArrowUp" || e.code === "KeyW"){
                this.onArrowReleased(UP);
                
                this.heldDirections[0] = new Vector2(0,0);
            }
            if(e.code === "ArrowDown" || e.code === "KeyS"){
                this.onArrowReleased(DOWN);
                
                this.heldDirections[1] = new Vector2(0,0);
            }
            if(e.code === "ArrowLeft" || e.code === "KeyA"){
                this.onArrowReleased(LEFT);
                
                this.heldDirections[2] = new Vector2(0,0);
            }
            if(e.code === "ArrowRight" || e.code === "KeyD"){
                this.onArrowReleased(RIGHT);
                
                this.heldDirections[3] = new Vector2(0,0);
            }
        })
    }
    

    get lastDirection(){
        return this.lookHeldDirections[0];
    }

    get direction(){
        let result = new Vector2();

        this.heldDirections.forEach(element => {
            result.x += element.x;
            result.y += element.y;
        });

        return result;
    }

    onArrowPressed(direction){
        if(this.lookHeldDirections.indexOf(direction) === -1){
            this.lookHeldDirections.unshift(direction);
        }
    }

    onArrowReleased(direction){
        const index = this.lookHeldDirections.indexOf(direction);
        if(index === -1) return;

        this.lookHeldDirections.splice(index, 1);
    }
}