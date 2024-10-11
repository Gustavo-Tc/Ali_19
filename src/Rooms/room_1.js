import { resources } from "../Resource.js";
import { Room } from "../Room.js";
import { Sprite } from "../Sprite.js";
import { Vector2 } from "../Vector2.js";
import { Map } from "../Map.js"
import { KeyHandler } from "../Objects/KeyHandler.js";
import { Button_Single } from "../Objects/Button_single.js";
import { Button_Hold } from "../Objects/Button_hold.js";


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
                [new Button_Single(
                    10 * 16, 
                    6 * 16
                )]
            )

            this.playerStartPosition = new Vector2(2,5).multiply(16);

            document.title = "Level 1";

    }
}