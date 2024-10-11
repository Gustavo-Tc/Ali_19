import { Vector2 } from "./Vector2.js";

export class Map{
    constructor(map){
        this.map = map;
    }

    getCell(vector2){
        return this.map[parseInt(vector2.y)][parseInt(vector2.x)];
    }
    setCell(vector2, value){
        this.map[parseInt(vector2.y)][parseInt(vector2.x)] = value;
    }
}