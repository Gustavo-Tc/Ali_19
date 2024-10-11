import { Map} from "./Map.js"
import { KeyHandler } from "./Objects/KeyHandler.js";

export class Room{
    constructor(map_collisions, map_sprite,keyHandler, playerStartPosition){
        this.map_collisions = map_collisions;
        this.map_sprite = map_sprite;
        this.keyHandler = keyHandler;

        this.playerStartPosition = this.playerStartPosition;
    }

    drawMap(ctx,x,y){
        this.map_sprite.draw(ctx,0,0);
        this.keyHandler.draw(ctx);
    }
}

