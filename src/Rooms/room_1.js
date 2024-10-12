import { resources } from "../Resource.js";
import { Room } from "../Room.js";
import { Sprite } from "../Sprite.js";
import { Vector2 } from "../Vector2.js";
import { Map } from "../Map.js"
import { KeyHandler } from "../Objects/KeyHandler.js";
import { Button_Single } from "../Objects/Button_single.js";
import { Button_Hold } from "../Objects/Button_hold.js";
import { Gate_auto } from "../Objects/Gate_auto.js";
import { Button_exit } from "../Objects/Button_exit.js";


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
                    new Button_Single( 3 * 16, 2 * 16),
                    new Button_Single( 3 * 16, 3 * 16),
                    new Button_Single( 3 * 16, 4 * 16),
                    new Button_Single( 3 * 16, 5 * 16),
                    new Button_Single( 3 * 16, 6 * 16),
                    new Button_Single( 3 * 16, 7 * 16),
                    new Button_Single( 3 * 16, 8 * 16),
                    
                    new Button_Single( 4 * 16, 2 * 16),
                    new Button_Single( 4 * 16, 3 * 16),
                    new Button_Single( 4 * 16, 4 * 16),
                    new Button_Single( 4 * 16, 5 * 16),
                    new Button_Single( 4 * 16, 6 * 16),
                    new Button_Single( 4 * 16, 7 * 16),
                    new Button_Single( 4 * 16, 8 * 16),
                    
                    
                    new Button_Single( 5 * 16, 2 * 16),
                    new Button_Single( 5 * 16, 3 * 16),
                    new Button_Single( 5 * 16, 4 * 16),
                    new Button_Single( 5 * 16, 5 * 16),
                    new Button_Single( 5 * 16, 6 * 16),
                    new Button_Single( 5 * 16, 7 * 16),
                    new Button_Single( 5 * 16, 8 * 16),
                    
                    
                    new Button_Single( 6 * 16, 2 * 16),
                    new Button_Single( 6 * 16, 3 * 16),
                    new Button_Single( 6 * 16, 4 * 16),
                    new Button_Single( 6 * 16, 5 * 16),
                    new Button_Single( 6 * 16, 6 * 16),
                    new Button_Single( 6 * 16, 7 * 16),
                    new Button_Single( 6 * 16, 8 * 16),
                    
                    
                    new Button_Single( 7 * 16, 2 * 16),
                    new Button_Single( 7 * 16, 3 * 16),
                    new Button_Single( 7 * 16, 4 * 16),
                    new Button_Single( 7 * 16, 5 * 16),
                    new Button_Single( 7 * 16, 6 * 16),
                    new Button_Single( 7 * 16, 7 * 16),
                    new Button_Single( 7 * 16, 8 * 16),
                    
                    
                    new Button_Single( 8 * 16, 2 * 16),
                    new Button_Single( 8 * 16, 3 * 16),
                    new Button_Single( 8 * 16, 4 * 16),
                    new Button_Single( 8 * 16, 5 * 16),
                    new Button_Single( 8 * 16, 6 * 16),
                    new Button_Single( 8 * 16, 7 * 16),
                    new Button_Single( 8 * 16, 8 * 16),
                    
                    
                    new Button_Single( 9 * 16, 2 * 16),
                    new Button_Single( 9 * 16, 3 * 16),
                    new Button_Single( 9 * 16, 4 * 16),
                    new Button_Single( 9 * 16, 5 * 16),
                    new Button_Single( 9 * 16, 6 * 16),
                    new Button_Single( 9 * 16, 7 * 16),
                    new Button_Single( 9 * 16, 8 * 16),
                    
                    new Button_Single( 10 * 16, 2 * 16),
                    new Button_Single( 10 * 16, 3 * 16),
                    new Button_Single( 10 * 16, 4 * 16),
                    new Button_Single( 10 * 16, 5 * 16),
                    new Button_Single( 10 * 16, 6 * 16),
                    new Button_Single( 10 * 16, 7 * 16),
                    new Button_Single( 10 * 16, 8 * 16),
                    
                    new Button_Single( 11 * 16, 2 * 16),
                    new Button_Single( 11 * 16, 3 * 16),
                    new Button_Single( 11 * 16, 4 * 16),
                    new Button_Single( 11 * 16, 5 * 16),
                    new Button_Single( 11 * 16, 6 * 16),
                    new Button_Single( 11 * 16, 7 * 16),
                    new Button_Single( 11 * 16, 8 * 16),
                    
                    new Button_Single( 12 * 16, 2 * 16),
                    new Button_Single( 12 * 16, 3 * 16),
                    new Button_Single( 12 * 16, 4 * 16),
                    new Button_Single( 12 * 16, 5 * 16),
                    new Button_Single( 12 * 16, 6 * 16),
                    new Button_Single( 12 * 16, 7 * 16),
                    new Button_Single( 12 * 16, 8 * 16),
                    
                    new Button_Single( 13 * 16, 2 * 16),
                    new Button_Single( 13 * 16, 3 * 16),
                    new Button_Single( 13 * 16, 4 * 16),
                    new Button_Single( 13 * 16, 5 * 16),
                    new Button_Single( 13 * 16, 6 * 16),
                    new Button_Single( 13 * 16, 7 * 16),
                    new Button_Single( 13 * 16, 8 * 16),
                    
                    new Button_Single( 14 * 16, 2 * 16),
                    new Button_Single( 14 * 16, 3 * 16),
                    new Button_Single( 14 * 16, 4 * 16),
                    new Button_Single( 14 * 16, 5 * 16),
                    new Button_Single( 14 * 16, 6 * 16),
                    new Button_Single( 14 * 16, 7 * 16),
                    new Button_Single( 14 * 16, 8 * 16),
                    
                    new Button_Single( 15 * 16, 2 * 16),
                    new Button_Single( 15 * 16, 3 * 16),
                    new Button_Single( 15 * 16, 4 * 16),
                    new Button_Single( 15 * 16, 5 * 16),
                    new Button_Single( 15 * 16, 6 * 16),
                    new Button_Single( 15 * 16, 7 * 16),
                    new Button_Single( 15 * 16, 8 * 16),
                    
                    new Button_Single( 16 * 16, 2 * 16),
                    new Button_Single( 16 * 16, 3 * 16),
                    new Button_Single( 16 * 16, 4 * 16),
                    new Button_Single( 16 * 16, 5 * 16),
                    new Button_Single( 16 * 16, 6 * 16),
                    new Button_Single( 16 * 16, 7 * 16),
                    new Button_Single( 16 * 16, 8 * 16),
                    
                    
                    new Button_exit( 17 * 16, 5 * 16,"index_3.html")
                ],
                [
                    new Gate_auto(17 * 16, 5 * 16)
                ],
                this.map_collisions
            )

            this.playerStartPosition = new Vector2(2,5).multiply(16);

            
        resources.playBGM("bgm_01", .4);
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