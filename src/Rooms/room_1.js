import { resources } from "../Resource.js";
import { Room } from "../Room.js";
import { Sprite } from "../Sprite.js";
import { Vector2 } from "../Vector2.js";
import { Map } from "../Map.js"
import { KeyHandler } from "../Objects/KeyHandler.js";
import { Button_Single } from "../Objects/Button_single.js";
import { Button_Hold } from "../Objects/Button_hold.js";
import { Gate_auto } from "../Objects/Gate_auto.js";


export class level_1 extends Room{
    constructor(){
        super()
            this.map_collisions = new Map([
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ])

            this.map_sprite = new Sprite({
                resource: resources.images.map,
                frameSize: new Vector2(320,180)
            });

            
            this.keyHandler = new KeyHandler(
                this.clear,
                [
                    new Button_Single( 10 * 16, 6 * 16),
                    new Button_Single( 14 * 16, 6 * 16)
                ],
                [
                    new Gate_auto(7 * 16, 5 * 16)
                ],
                this.map_collisions
            )

            this.playerStartPosition = new Vector2(2,5).multiply(16);


            document.title = "Level 1";

    }


    clear(){
        this.obstacles[0].active = false;

        this.map_collisions = new Map();

        //let url = "lvl_2.html";
        //history.pushState({}, "", url);
        
        document.title = "PASSOU";
        resources.playSFX("sfx_clear");
    }
}