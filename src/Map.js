import { Vector2 } from "./Vector2.js";

export class Map{
    constructor(map){
        this.map = map;
    }

    getCell(vector2){
        //console.log(this.map[2][3]);
        return this.map[parseInt(vector2.y)][parseInt(vector2.x)];
        
    }
}